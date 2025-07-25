// sanity/lib/client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'nfxbipub',      
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false, 
})
