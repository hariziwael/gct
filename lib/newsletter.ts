// lib/newsletter.ts

// Types
export interface SubscribeResponse {
  success: boolean;
  message?: string;
  subscriberId?: string;
  // @typescript-eslint/no-explicit-any
  data?: any;
}

export interface SubscribeError {
  message: string;
  status?: number;
  code?: string;
}

// Email validation utility
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Main subscription function
export async function addSubscriber(email: string): Promise<SubscribeResponse> {
  // Input validation
  if (!email || typeof email !== 'string') {
    throw new Error('Adresse email requise');
  }

  const trimmedEmail = email.trim();
  
  if (!isValidEmail(trimmedEmail)) {
    throw new Error('Adresse email invalide');
  }

  // Setup timeout controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: trimmedEmail }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      // Create more specific error messages based on status codes
      let errorMessage = "Échec de l'abonnement. Veuillez réessayer.";
      
      switch (response.status) {
        case 400:
          errorMessage = errorData?.message || 'Adresse email invalide';
          break;
        case 409:
          errorMessage = 'Cet email est déjà abonné à notre newsletter';
          break;
        case 422:
          errorMessage = 'Données invalides. Vérifiez votre adresse email';
          break;
        case 429:
          errorMessage = 'Trop de tentatives. Veuillez réessayer plus tard';
          break;
        case 500:
          errorMessage = 'Erreur du serveur. Veuillez réessayer plus tard';
          break;
        case 503:
          errorMessage = 'Service temporairement indisponible';
          break;
        default:
          errorMessage = errorData?.message || errorMessage;
      }
      
      const error = new Error(errorMessage) as SubscribeError;
      error.status = response.status;
      error.code = errorData?.code;
      throw error;
    }

    const data = await response.json();
    return data as SubscribeResponse;

  } catch (error) {
    clearTimeout(timeoutId);
    
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Délai d\'attente dépassé. Veuillez réessayer');
      }
      
      if (error.name === 'TypeError') {
        throw new Error('Erreur de connexion. Vérifiez votre connexion internet');
      }
      
      // Re-throw our custom errors
      throw error;
    }
    
    throw new Error('Une erreur inattendue s\'est produite');
  }
}

// Utility function to unsubscribe
export async function removeSubscriber(email: string): Promise<SubscribeResponse> {
  if (!email || typeof email !== 'string') {
    throw new Error('Adresse email requise');
  }

  const trimmedEmail = email.trim();
  
  if (!isValidEmail(trimmedEmail)) {
    throw new Error('Adresse email invalide');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: trimmedEmail }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      let errorMessage = "Échec du désabonnement. Veuillez réessayer.";
      
      switch (response.status) {
        case 404:
          errorMessage = 'Cet email n\'est pas abonné à notre newsletter';
          break;
        case 400:
          errorMessage = 'Adresse email invalide';
          break;
        default:
          errorMessage = errorData?.message || errorMessage;
      }
      
      throw new Error(errorMessage);
    }

    return response.json();

  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Délai d\'attente dépassé. Veuillez réessayer');
      }
      
      if (error.name === 'TypeError') {
        throw new Error('Erreur de connexion. Vérifiez votre connexion internet');
      }
      
      throw error;
    }
    
    throw new Error('Une erreur inattendue s\'est produite');
  }
}

// Utility function to check subscription status
export async function checkSubscriptionStatus(email: string): Promise<{ subscribed: boolean; email: string }> {
  if (!email || typeof email !== 'string') {
    throw new Error('Adresse email requise');
  }

  const trimmedEmail = email.trim();
  
  if (!isValidEmail(trimmedEmail)) {
    throw new Error('Adresse email invalide');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`/api/subscription-status?email=${encodeURIComponent(trimmedEmail)}`, {
      method: 'GET',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Impossible de vérifier le statut d\'abonnement');
    }

    return response.json();

  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Délai d\'attente dépassé. Veuillez réessayer');
      }
      
      if (error.name === 'TypeError') {
        throw new Error('Erreur de connexion. Vérifiez votre connexion internet');
      }
      
      throw error;
    }
    
    throw new Error('Une erreur inattendue s\'est produite');
  }
}

// Utility function for bulk operations
export async function addMultipleSubscribers(emails: string[]): Promise<{
  successful: string[];
  failed: Array<{ email: string; error: string }>;
}> {
  if (!Array.isArray(emails) || emails.length === 0) {
    throw new Error('Liste d\'emails requise');
  }

  const results = {
    successful: [] as string[],
    failed: [] as Array<{ email: string; error: string }>,
  };

  // Process emails in batches to avoid overwhelming the server
  const batchSize = 5;
  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);
    
    const promises = batch.map(async (email) => {
      try {
        await addSubscriber(email);
        results.successful.push(email);
      } catch (error) {
        results.failed.push({
          email,
          error: error instanceof Error ? error.message : 'Erreur inconnue',
        });
      }
    });

    await Promise.all(promises);
    
    // Add a small delay between batches to be respectful to the server
    if (i + batchSize < emails.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  return results;
}

// Export utility functions
export { isValidEmail };