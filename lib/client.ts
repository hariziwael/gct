import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '34noif9x',
  dataset: 'production',
  apiVersion: '2024-07-25',
  useCdn: true,
})


