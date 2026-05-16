import { useEffect } from 'react'

export function AnalyticsScript() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    if (!domain) {
      return
    }

    const script = document.createElement('script')
    script.defer = true
    script.dataset.domain = domain
    script.src = import.meta.env.VITE_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
