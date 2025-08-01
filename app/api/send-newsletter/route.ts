// app/api/send-newsletter/route.ts
import { NextResponse } from 'next/server'
import client from '@/lib/sanity'
import { Resend } from 'resend'
// @ts-ignore
import { Newsletter, Subscriber      } from '@/lib/sanity.types'     
// @ts-ignore     
const resend = new Resend(process.env.RESEND_API_KEY)

                  export async function POST(request: Request) : Promise<NextResponse>     {
  // @ts-ignore
  const { newsletterId } = await request.json() as { newsletterId: string }   

  if (!newsletterId) {
    return NextResponse.json(
      { error: 'Missing newsletter ID' },
      { status: 400 }
    )
  }


  // Check authorization
    const authHeader = request.headers.get('authorization') as string | null
  if (authHeader !== `Bearer ${process.env.NEWSLETTER_API_TOKEN}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    // Fetch the newsletter
    const newsletter = await client.fetch<Newsletter>(
      `*[_type == "newsletter" && _id == $newsletterId][0]{
        _id,
        subject,
        content,
        sent,
        sentAt,
        content[]{    
          ...,
          body[]{
            ...,
            content[]{
              ...,
              content[]{
                ...,
                content[]{
                  ...,
                  content[]{
                    ...,
                    content[]{
                      ...,
                      content[]{
                        ...,
                        content[]{
                          ...,
                          content[]{
                            ...,
                            content[]{
                              ...,
                              content[]{
                                ...,
                                content[]{
                                  ...,
                                  content[]{
                                    ...,
                                    content[]{
                                      ...,
                                      content[]{
                                        ...,
                                        content[]{
                                          ...,
                                          content[]{
                                            ...,
                                            content[]{
                                              ...,
                                              content[]{
                                                ...,
                                                content[]{
                                                  ...,
                                                  content[]{
                                                    ...,
                                                    content[]{
                                                      ...,
                                                      content[]{
                                                        ...,
                                                        content[]{
                                                          ...,
                                                          content[]{
                                                            ...,
                                                            content[]{
                                                              ...,
                                                              content[]{
                                                                ...,
                                                                content[]{
                                                                  ...,
                                                                  content[]{
                                                                    ...,
                                                                    content[]{
                                                                      ...,
                                                                      content[]{
                                                                        ...,
                                                                        content[]{
                                                                          ...,
                                                                          content[]{
                                                                            ...,
                                                                            content[]{
                                                                              ...,
                                                                              content[]{
                                                                                ...,
                                                                                content[]{
                                                                                  ...,
                                                                                  content[]{
                                                                                    ...,
                                                                                    content[]{
                                                                                      ...,
                                                                                      content[]{
                                                                                        ...,
                                                                                        content[]{
                                                                                          ...,
                                                                                          content[]{
                                                                                            ...,
                                                                                            content[]{
                                                                                              ...,
                                                                                              content[]{
                                                                                                ...,
                                                                                                content[]{
                                                                                                  ...,
                                                                                                  content[]{
                                                                                                    ...,
                                                                                                    content[]{
                                                                                                      ...,
                                                                                                      content[]{
                                                                                                        ...,
                                                                                                        content[]{
                                                                                                          ...,
                                                                                                          content[]{
                                                                                                            ...,
                                                                                                            content[]{
                                                                                                              ...,
                                                                                                              content[]{
                                                                                                                ...,
                                                                                                                content[]{
                                                                                                                  ...,
                                                                                                                  content[]{
                                                                                                                    ...,
                                                                                                                    content[]{
                                                                                                                      ...,
                                                                                                                      content[]{
                                                                                                                        ...,
                                                                                                                        content[]{
                                                                                                                          ...,
                                                                                                                          content[]{
                                                                                                                            ...,
                                                                                                                            content[]{
                                                                                                                              ...,
                                                                                                                              content[]{
                                                                                                                                ...,
                                                                                                                                content[]{
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
      { newsletterId }
    )

    if (!newsletter)  {
      // @ts-ignore
      return NextResponse.json(
        { error: 'Newsletter not found' },
        { status: 404 }
      )
    }

    if (newsletter.sent) {
      // @ts-ignore
      return NextResponse.json(
        { error: 'Newsletter already sent' },
        { status: 400 }
      )
    }

    // Fetch active subscribers
    const subscribers = await client.fetch<Subscriber[]>(
      `*[_type == "subscriber" && isActive == true]{
        email
      }`
    )

    if (subscribers.length === 0) {
      // @ts-ignore
      return NextResponse.json(
        { error: 'No active subscribers' },
        { status: 400 }
      )
    }

    // Create email HTML content
    // @ts-ignore
    const emailHtml = `
      <html>
        <head>
          <title>${newsletter.subject}</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #047857; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">GCT Newsletter</h1>
          </div>
          <div style="background-color: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
            <h2 style="color: #047857; margin-bottom: 20px;">${newsletter.subject}</h2>
            <div style="margin-bottom: 20px;">
              <p>Contenu de la newsletter...</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
              <p>Vous recevez cet email car vous êtes abonné à la newsletter GCT.</p>
              <p>Pour vous désabonner, cliquez <a href="#" style="color: #047857;">ici</a>.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send to all subscribers
    const sendPromises = subscribers.map((subscriber: Subscriber) => {
      return resend.emails.send({
        from: process.env.RESEND_EMAIL_FROM!,
        to: subscriber.email,
        subject: newsletter.subject,
        html: emailHtml
      })
    })

    // Wait for all emails to be sent
    await Promise.all(sendPromises)

    // Update newsletter as sent
    // @ts-ignore
    await client
      // @ts-ignore
      .patch(newsletterId)
      .set({ 
        sent: true,
        // @ts-ignore
        sentAt: new Date().toISOString()    
      })
      .commit()

    // @ts-ignore
    return NextResponse.json(
      { message: `Newsletter sent successfully to ${subscribers.length} subscribers` },
      { status: 200 }
    )
  } catch (error) {
    // @ts-ignore
        console.error('Error sending newsletter:', error)
    // @ts-ignore
    return NextResponse.json(
      // @ts-ignore
      { error   : 'Internal server error'   },
      // @ts-ignore
      {     status: 500     }
    )
  }

}