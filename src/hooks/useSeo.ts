import { useEffect } from 'react'

interface SeoOptions {
  title: string
  description?: string
}

const BASE_TITLE = 'Solid State Practice'

/** Lightweight per-page SEO: sets document title and meta description. */
export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
