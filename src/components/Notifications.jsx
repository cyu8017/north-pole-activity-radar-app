import { useEffect } from 'react'

function Notifications({ showSantaTracker, timeUntilChristmas }) {
  useEffect(() => {
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }, [])

  useEffect(() => {
    if (!('Notification' in window)) return

    // Notify when Santa tracker goes live
    const now = new Date()
    const currentYear = now.getFullYear()
    const dec24Evening = new Date(currentYear, 11, 24, 18, 0, 0, 0)

    if (!showSantaTracker && now >= dec24Evening - 60000 && now < dec24Evening) {
      // One minute before activation
      if (Notification.permission === 'granted') {
        new Notification('🎅 Santa Tracker Starting Soon!', {
          body: 'Santa tracker will be live in 1 minute!',
          icon: '/favicon.ico',
        })
      }
    }

    // Notify when Santa tracker goes live
    if (showSantaTracker) {
      const lastNotified = localStorage.getItem('santa-tracker-notified')
      if (!lastNotified || new Date().getTime() - parseInt(lastNotified) > 60000) {
        if (Notification.permission === 'granted') {
          new Notification('🎅 Santa Tracker is Live!', {
            body: 'Track Santa\'s journey around the world!',
            icon: '/favicon.ico',
          })
          localStorage.setItem('santa-tracker-notified', new Date().getTime().toString())
        }
      }
    }
  }, [showSantaTracker])

  useEffect(() => {
    // Notify on Christmas Day
    if (
      timeUntilChristmas.days === 0 &&
      timeUntilChristmas.hours === 0 &&
      timeUntilChristmas.minutes === 0 &&
      timeUntilChristmas.seconds === 0
    ) {
      if (Notification.permission === 'granted') {
        new Notification('🎄 Merry Christmas!', {
          body: 'Wishing you a wonderful Christmas Day!',
          icon: '/favicon.ico',
        })
      }
    }
  }, [timeUntilChristmas])

  return null // This component doesn't render anything
}

export default Notifications

