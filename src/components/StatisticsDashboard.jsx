import { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import TimerIcon from '@mui/icons-material/Timer'

function StatisticsDashboard({ timeUntilChristmas }) {
  const [stats, setStats] = useState({
    daysSinceLastChristmas: 0,
    hoursUntilChristmas: 0,
    totalSecondsWaited: 0,
  })

  useEffect(() => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const lastChristmas = new Date(currentYear - 1, 11, 25, 0, 0, 0, 0)
    
    if (now.getMonth() === 11 && now.getDate() >= 25) {
      // After this year's Christmas, calculate from this year
      const thisChristmas = new Date(currentYear, 11, 25, 0, 0, 0, 0)
      const daysSince = Math.floor((now - thisChristmas) / (1000 * 60 * 60 * 24))
      setStats((prev) => ({
        ...prev,
        daysSinceLastChristmas: daysSince,
      }))
    } else {
      // Before this year's Christmas, calculate from last year
      const daysSince = Math.floor((now - lastChristmas) / (1000 * 60 * 60 * 24))
      setStats((prev) => ({
        ...prev,
        daysSinceLastChristmas: daysSince,
      }))
    }

    // Calculate total hours until Christmas
    const totalHours = timeUntilChristmas.days * 24 + timeUntilChristmas.hours
    setStats((prev) => ({
      ...prev,
      hoursUntilChristmas: totalHours,
    }))
  }, [timeUntilChristmas])

  return (
    <Paper
      sx={{
        p: 3,
        mt: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <TrendingUpIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          Statistics
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
            }}
          >
            <CalendarTodayIcon sx={{ color: '#FFD700', fontSize: 40, mb: 1 }} />
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
              {stats.daysSinceLastChristmas}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Days Since Last Christmas
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
            }}
          >
            <TimerIcon sx={{ color: '#4CAF50', fontSize: 40, mb: 1 }} />
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
              {stats.hoursUntilChristmas}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Hours Until Christmas
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              textAlign: 'center',
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
            }}
          >
            <TrendingUpIcon sx={{ color: '#2196F3', fontSize: 40, mb: 1 }} />
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
              {new Date().getFullYear()}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Current Year
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default StatisticsDashboard

