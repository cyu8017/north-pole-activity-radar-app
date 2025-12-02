import { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const TIMEZONES = [
  { city: 'North Pole', tz: 'America/Anchorage', offset: -9 },
  { city: 'New York', tz: 'America/New_York', offset: -5 },
  { city: 'London', tz: 'Europe/London', offset: 0 },
  { city: 'Tokyo', tz: 'Asia/Tokyo', offset: 9 },
  { city: 'Sydney', tz: 'Australia/Sydney', offset: 11 },
]

function WorldClocks() {
  const [times, setTimes] = useState({})

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {}
      TIMEZONES.forEach(({ city, offset }) => {
        const now = new Date()
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
        const localTime = new Date(utc + (3600000 * offset))
        newTimes[city] = localTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      })
      setTimes(newTimes)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Paper
      sx={{
        p: 2,
        mt: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <AccessTimeIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          World Clocks
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {TIMEZONES.map(({ city }) => (
          <Grid item xs={6} sm={4} md={2.4} key={city}>
            <Box
              sx={{
                textAlign: 'center',
                p: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 1,
              }}
            >
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block' }}>
                {city}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, fontFamily: 'monospace' }}>
                {times[city] || '--:--:--'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default WorldClocks

