// components/emails/NewsletterTemplate.tsx
import React from 'react'

interface NewsletterTemplateProps {
    content: any
    subject: string
}

export default function NewsletterTemplate({ content, subject }: NewsletterTemplateProps) {
    return (
        <html>
            <head>
                <title>{subject}</title>
            </head>
            <body style={{
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                color: '#333',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px'
            }}>

// In NewsletterTemplate
<img 
  src={`https://votresite.com/api/track?email={email}&newsletter={newsletterId}`} 
  alt="" 
  width="1" 
  height="1" 
  style={{display: 'block'}}
/>
                <div style={{
                    backgroundColor: '#047857',
                    color: 'white',
                    padding: '20px',
                    textAlign: 'center',
                    borderRadius: '8px 8px 0 0'
                }}>
                    <h1 style={{ margin: '0', fontSize: '24px' }}>GCT Newsletter</h1>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0 0 8px 8px'
                }}>
                    <h2 style={{ color: '#047857', marginBottom: '20px' }}>{subject}</h2>

                    <div style={{ marginBottom: '20px' }}>
                        {/* Content will be rendered here */}
                        <p>Contenu de la newsletter...</p>
                    </div>

                    <div style={{
                        marginTop: '30px',
                        paddingTop: '20px',
                        borderTop: '1px solid #e5e7eb',
                        fontSize: '12px',
                        color: '#6b7280'
                    }}>
                        <p>Vous recevez cet email car vous êtes abonné à la newsletter GCT.</p>
                        <p>Pour vous désabonner, cliquez <a href="#" style={{ color: '#047857' }}>ici</a>.</p>
                    </div>
                </div>
        // In the footer section
                <div className="footer">
                    <p>© {new Date().getFullYear()} Groupe Chimique Tunisien</p>
                    <p>
                        <a href={`https://votresite.com/unsubscribe?email={email}`}>
                            Se désabonner
                        </a> |
                        <a href="https://votresite.com">Visitez notre site</a>
                    </p>
                </div>
            </body>
        </html>
    )
}