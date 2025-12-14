// lib/email.ts - Email utility functions
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface CandidatureEmailData {
  nom: string
  email: string
  appelOffreTitre: string
  statut: 'accepted' | 'refused'
  noteAdmin?: string
}

export async function sendCandidatureStatusEmail(data: CandidatureEmailData) {
  try {
    const { nom, email, appelOffreTitre, statut, noteAdmin } = data

    const isAccepted = statut === 'accepted'
    const subject = isAccepted 
      ? `✅ Candidature acceptée - ${appelOffreTitre}`
      : `❌ Candidature refusée - ${appelOffreTitre}`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to right, #059669, #047857); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Groupe Chimique Tunisien</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: ${isAccepted ? '#059669' : '#dc2626'}; margin-top: 0;">
              ${isAccepted ? '✅ Candidature Acceptée' : '❌ Candidature Refusée'}
            </h2>
            
            <p style="font-size: 16px;">Bonjour <strong>${nom}</strong>,</p>
            
            <p style="font-size: 16px;">
              Nous vous informons que votre candidature pour l'appel d'offres suivant a été <strong>${isAccepted ? 'acceptée' : 'refusée'}</strong> :
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${isAccepted ? '#059669' : '#dc2626'};">
              <h3 style="margin-top: 0; color: #1f2937;">${appelOffreTitre}</h3>
            </div>
            
            ${noteAdmin ? `
              <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; font-size: 14px;"><strong>Note de l'administrateur :</strong></p>
                <p style="margin: 5px 0 0 0; font-size: 14px;">${noteAdmin}</p>
              </div>
            ` : ''}
            
            ${isAccepted ? `
              <p style="font-size: 16px;">
                Félicitations ! Nous vous contacterons prochainement pour la suite du processus.
              </p>
            ` : `
              <p style="font-size: 16px;">
                Nous vous remercions pour votre intérêt et votre candidature. Nous vous encourageons à postuler pour nos futurs appels d'offres.
              </p>
            `}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #6b7280; margin: 0;">
                Cordialement,<br>
                <strong>L'équipe GCT</strong><br>
                <a href="mailto:contact@gct.tn" style="color: #059669;">contact@gct.tn</a>
              </p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                Cet email a été envoyé automatiquement. Merci de ne pas y répondre directement.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Get email from environment or use default
    // RESEND_EMAIL_FROM should be in format: "Name <email@domain.com>"
    const fromEmail = process.env.RESEND_EMAIL_FROM || 'GCT <noreply@gct.tn>'
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      html: emailHtml,
    })

    return {
      success: true,
      messageId: result.data?.id,
    }
  } catch (error) {
    console.error('Error sending candidature email:', error)
    throw error
  }
}

