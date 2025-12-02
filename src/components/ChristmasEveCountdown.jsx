import { useState, useEffect } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import EventIcon from '@mui/icons-material/Event'

function ChristmasEveCountdown() {
  const [timeUntilEve, setTimeUntilEve] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [showCountdown, setShowCountdown] = useState(true)

  useEffect(() => {
    const calculateTimeUntilEve = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const christmasEve = new Date(currentYear, 11, 24, 18, 0, 0, 0) // December 24 at 6 PM

      const difference = christmasEve - now

      if (difference <= 0) {
        setShowCountdown(false)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeUntilEve({ days, hours, minutes, seconds })
    }

    calculateTimeUntilEve()
    const interval = setInterval(calculateTimeUntilEve, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!showCountdown) return null

  return (
    <Paper
      sx={{
        p: 3,
        mt: 3,
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '2px solid rgba(255, 215, 0, 0.5)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <EventIcon sx={{ color: '#FFD700', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
          Countdown to Santa Tracker Activation
        </Typography>
      </Box>
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: '#FFD700',
          fontWeight: 700,
          fontFamily: 'monospace',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        {String(timeUntilEve.days).padStart(2, '0')}:{String(timeUntilEve.hours).padStart(2, '0')}:
        {String(timeUntilEve.minutes).padStart(2, '0')}:{String(timeUntilEve.seconds).padStart(2, '0')}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', mt: 1 }}>
        Santa tracker goes live on December 24 at 6:00 PM! 🎅
      </Typography>
    </Paper>
  )
}

export default ChristmasEveCountdown

