// lib/sanity/fetchSettings.ts
import client from "../sanity"

export async function fetchSettings() {
  const query = `*[_type == "settings"][0]{
    siteTitle,
    contactEmail,
    facebookLink,
    themeColor
  }`
  return await client.fetch(query)
}
