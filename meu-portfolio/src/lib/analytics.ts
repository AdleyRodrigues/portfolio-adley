type EventProps = Record<string, string | number | boolean>

type AnalyticsWindow = Window & {
  plausible?: (eventName: string, options?: { props?: EventProps }) => void
}

export function trackEvent(eventName: string, props?: EventProps): void {
  if (typeof window === 'undefined') {
    return
  }

  const analyticsWindow = window as AnalyticsWindow
  analyticsWindow.plausible?.(eventName, props ? { props } : undefined)
}
