'use client'        
import Image from 'next/image'
import Link from 'next/link'
interface NewsletterTemplateProps {
    subject: string
    email: string
    newsletterId: string
}

export default function NewsletterTemplate({ subject, email, newsletterId }: NewsletterTemplateProps) {
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


<Image 
            src={`https://gct.vercel.app/api/track?email=${ email   }&newsletter=${newsletterId}`} 
  alt="" 
  style={{display: 'block', width: '100%', height: 'auto'     }}
  width={100}
  height={100} 
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
                        <p>Pour vous désabonner, cliquez <Link href="/unsubscribe" style={{ color: '#047857' }}>ici</Link>.</p>
                    </div>
                </div>

                <div className="footer">
                    <p>© {new Date().getFullYear()} Groupe Chimique Tunisien</p>
                    <p>
                                <Link href={`https://gct.vercel.app/unsubscribe?email=${email}&newsletter=${newsletterId}`}>
                            Se désabonner
                        </Link> |
                        <Link href="https://gct.vercel.app">Visitez notre site</Link>
                    </p>
                </div>
            </body>
        </html>
    )
}