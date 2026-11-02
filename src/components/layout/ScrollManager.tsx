import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change, or to the #hash target when present. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Allow the target page to render before scrolling to the anchor.
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
