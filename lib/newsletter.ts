// lib/newsletter.ts
export async function addSubscriber(email: string) {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
  
    if (!response.ok) {
      const errorData = await response.json()
      
      // Create more specific error messages
      let errorMessage = "Échec de l'abonnement. Veuillez réessayer."
      
      if (response.status === 400) {
        errorMessage = 'Adresse email invalide'
      } else if (response.status === 409) {
        errorMessage = 'Cet email est déjà abonné'
      } else if (errorData?.message) {
        errorMessage = errorData.message
      }
      
      throw new Error(errorMessage)
    }
  
    return response.json()
  }