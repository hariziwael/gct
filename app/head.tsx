export const metadata = {
    title: 'GCT',
    description: 'Groupe Chimique Tunisien',
    // Add CSP via meta
    other: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://cdn.sanity.io;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https://cdn.sanity.io;
        connect-src 'self' https://*.sanity.io;
        font-src 'self';
      `,
    },
  }
  