import { useState, useEffect } from 'react'
import { Paper, Typography, Box, Grid } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import CloudIcon from '@mui/icons-material/Cloud'
import AirIcon from '@mui/icons-material/Air'

function NorthPoleWeather() {
  const [weather, setWeather] = useState({
    temperature: -25,
    condition: 'Snowy',
    windSpeed: 12,
    visibility: 'Low',
  })

  useEffect(() => {
    // Simulate weather variations
    const interval = setInterval(() => {
      setWeather((prev) => ({
        temperature: -25 + Math.floor(Math.random() * 10 - 5),
        condition: ['Snowy', 'Cloudy', 'Clear'][Math.floor(Math.random() * 3)],
        windSpeed: 10 + Math.floor(Math.random() * 10),
        visibility: ['Low', 'Moderate', 'Good'][Math.floor(Math.random() * 3)],
      }))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

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
        <AcUnitIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          North Pole Weather
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <CloudIcon sx={{ color: '#E3F2FD', fontSize: 40, mb: 1 }} />
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700 }}>
              {weather.temperature}°
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Temperature
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <AcUnitIcon sx={{ color: '#BBDEFB', fontSize: 40, mb: 1 }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              {weather.condition}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Condition
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <AirIcon sx={{ color: '#90CAF9', fontSize: 40, mb: 1 }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              {weather.windSpeed} mph
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Wind Speed
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box sx={{ textAlign: 'center' }}>
            <CloudIcon sx={{ color: '#64B5F6', fontSize: 40, mb: 1 }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              {weather.visibility}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Visibility
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default NorthPoleWeather

