// lib/queries.ts
export const heroBannerQuery = `
  *[_type == "heroBanner"][0] {
    title,
    subtitle
  }
`
// lib/sanity/queries.ts
export const getSiteSettings = `
  *[_type == "siteSettings"][0] {
    siteName,
    description,
    email,
    facebook,
    twitter,
    linkedin,
    language,
    maintenance,
    footerMessage,
    "logoUrl": logo.asset->url
  }
`
