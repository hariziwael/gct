import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/client'

export function urlForImage(source: any) {
  return imageUrlBuilder(client).image(source)
} 