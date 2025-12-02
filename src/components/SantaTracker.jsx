import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Paper, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SpeedIcon from '@mui/icons-material/Speed'
import FlightIcon from '@mui/icons-material/Flight'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import SantaMap from './SantaMap'

// Sample Santa locations for demo (can be replaced with real API)
const SANTA_LOCATIONS = [
  { city: 'Rovaniemi, Finland', country: 'Finland', lat: 66.5039, lon: 25.7294, speed: 650 },
  { city: 'Stockholm, Sweden', country: 'Sweden', lat: 59.3293, lon: 18.0686, speed: 680 },
  { city: 'London, United Kingdom', country: 'UK', lat: 51.5074, lon: -0.1278, speed: 720 },
  { city: 'Paris, France', country: 'France', lat: 48.8566, lon: 2.3522, speed: 710 },
  { city: 'New York, USA', country: 'USA', lat: 40.7128, lon: -74.0060, speed: 750 },
  { city: 'Los Angeles, USA', country: 'USA', lat: 34.0522, lon: -118.2437, speed: 780 },
  { city: 'Tokyo, Japan', country: 'Japan', lat: 35.6762, lon: 139.6503, speed: 820 },
  { city: 'Sydney, Australia', country: 'Australia', lat: -33.8688, lon: 151.2093, speed: 850 },
]

async function fetchSantaLocation() {
  // In a real implementation, this would call an API like:
  // const response = await fetch('https://api.noradsanta.org/v1/location');
  // return await response.json();
  
  // For demo purposes, we'll simulate Santa moving through locations
  const now = new Date()
  const secondsSinceMidnight = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
  const locationIndex = Math.floor(secondsSinceMidnight / 30) % SANTA_LOCATIONS.length // Change location every 30 seconds
  const location = SANTA_LOCATIONS[locationIndex]
  
  // Simulate progress to next location
  const progress = ((secondsSinceMidnight % 30) / 30) * 100
  
  return {
    ...location,
    altitude: Math.floor(Math.random() * 1000) + 30000, // 30,000 - 31,000 feet
    presentsDelivered: Math.floor(Math.random() * 5000000) + 20000000,
    nextDestination: SANTA_LOCATIONS[(locationIndex + 1) % SANTA_LOCATIONS.length],
    progress: progress,
    status: progress < 90 ? 'In Flight' : 'Delivering Presents',
    timestamp: now.toISOString(),
  }
}

function SantaTracker() {
  const [santaData, setSantaData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const updateSantaLocation = async () => {
      try {
        setLoading(true)
        const data = await fetchSantaLocation()
        setSantaData(data)
        setError(null)
      } catch (err) {
        setError('Unable to track Santa at this time')
        console.error('Error fetching Santa location:', err)
      } finally {
        setLoading(false)
      }
    }

    // Update immediately
    updateSantaLocation()

    // Update every 5 seconds
    const interval = setInterval(updateSantaLocation, 5000)

    return () => clearInterval(interval)
  }, [])

  if (loading && !santaData) {
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
        <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
          Tracking Santa's Flight...
        </Typography>
      </Paper>
    )
  }

  if (error && !santaData) {
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
        <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
          {error}
        </Typography>
      </Paper>
    )
  }

  if (!santaData) return null

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
        <FlightIcon sx={{ color: 'white', mr: 1, fontSize: 28 }} />
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
          Santa's Current Location
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {/* Current Location */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ color: '#ff4444', mr: 1 }} />
              <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Current Location
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              {santaData.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {santaData.country}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'block', mt: 1 }}>
              {santaData.lat.toFixed(4)}°N, {santaData.lon.toFixed(4)}°E
            </Typography>
          </Box>
        </Grid>

        {/* Flight Status */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <SpeedIcon sx={{ color: '#4CAF50', mr: 1 }} />
              <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Flight Status
              </Typography>
            </Box>
            <Chip
              label={santaData.status}
              color="success"
              size="small"
              sx={{ mb: 1 }}
            />
            <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>
              Speed: {santaData.speed} mph
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Altitude: {santaData.altitude.toLocaleString()} ft
            </Typography>
          </Box>
        </Grid>

        {/* Progress to Next Destination */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <TravelExploreIcon sx={{ color: '#2196F3', mr: 1 }} />
              <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Next Destination
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 500, mb: 1 }}>
              {santaData.nextDestination.city}, {santaData.nextDestination.country}
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: `${santaData.progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
                  transition: 'width 1s ease-in-out',
                }}
              />
            </Box>
            <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 0.5, display: 'block' }}>
              {santaData.progress.toFixed(1)}% complete
            </Typography>
          </Box>
        </Grid>

        {/* Presents Delivered */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
              Presents Delivered Today
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: '#FFD700',
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              {santaData.presentsDelivered.toLocaleString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Santa's World Map */}
      <SantaMap santaLocation={santaData} />
    </Paper>
  )
}

export default SantaTracker

