import { useState, useEffect } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'

function SantaMap({ santaLocation }) {
  const [currentLocation, setCurrentLocation] = useState({ lat: 66.5039, lon: 25.7294 })

  useEffect(() => {
    if (santaLocation) {
      setCurrentLocation({ lat: santaLocation.lat, lon: santaLocation.lon })
    }
  }, [santaLocation])

  // Convert lat/lon to SVG coordinates (simplified world map)
  const latToY = (lat) => {
    return 100 - ((lat + 90) / 180) * 200
  }
  
  const lonToX = (lon) => {
    return ((lon + 180) / 360) * 400
  }

  const santaX = lonToX(currentLocation.lon)
  const santaY = latToY(currentLocation.lat)

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
        <MapIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          Santa's World Map
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          {/* Simplified world map continents (rectangles as placeholders) */}
          <rect x="50" y="50" width="100" height="60" fill="rgba(76, 175, 80, 0.3)" rx="5" />
          <rect x="160" y="40" width="80" height="70" fill="rgba(76, 175, 80, 0.3)" rx="5" />
          <rect x="250" y="80" width="100" height="50" fill="rgba(76, 175, 80, 0.3)" rx="5" />
          <rect x="20" y="100" width="120" height="60" fill="rgba(76, 175, 80, 0.3)" rx="5" />
          
          {/* Flight path */}
          <path
            d={`M ${lonToX(-180)} ${latToY(66.5039)} L ${santaX} ${santaY}`}
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
          
          {/* Santa's current location */}
          <circle
            cx={santaX}
            cy={santaY}
            r="8"
            fill="#FF0000"
            stroke="#FFF"
            strokeWidth="2"
          >
            <animate
              attributeName="r"
              values="8;12;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={santaX}
            y={santaY - 15}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            🎅
          </text>
        </svg>
      </Box>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'center', mt: 2 }}>
        {currentLocation.lat.toFixed(2)}°N, {currentLocation.lon.toFixed(2)}°E
      </Typography>
    </Paper>
  )
}

export default SantaMap

