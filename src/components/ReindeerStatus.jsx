import { useState, useEffect } from 'react'
import { Paper, Typography, Grid, Box, LinearProgress } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'

const REINDEER = [
  { name: 'Dasher', baseEnergy: 65, chargeRate: 1.2 },
  { name: 'Dancer', baseEnergy: 55, chargeRate: 1.5 },
  { name: 'Prancer', baseEnergy: 70, chargeRate: 1.0 },
  { name: 'Vixen', baseEnergy: 60, chargeRate: 1.3 },
  { name: 'Comet', baseEnergy: 68, chargeRate: 1.1 },
  { name: 'Cupid', baseEnergy: 50, chargeRate: 1.6 },
  { name: 'Donner', baseEnergy: 72, chargeRate: 0.9 },
  { name: 'Blitzen', baseEnergy: 66, chargeRate: 1.2 },
  { name: 'Rudolph', baseEnergy: 75, chargeRate: 0.8 },
]

function ReindeerStatus() {
  const [reindeer, setReindeer] = useState([])

  const calculateEnergyLevels = () => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const dec23 = new Date(currentYear, 11, 23, 23, 59, 59, 999) // December 23 at end of day
    
    // If it's December 23 or later, they're fully charged
    if (now >= dec23) {
      return REINDEER.map((r) => ({
        ...r,
        energy: 100,
        status: 'excellent',
      }))
    }

    // Start charging from November 1st of current year
    const startDate = new Date(currentYear, 10, 1, 0, 0, 0, 0) // November 1
    
    // Calculate time progress (0 to 1)
    const totalMs = dec23 - startDate
    const elapsedMs = now - startDate
    let progress = Math.min(1, Math.max(0, elapsedMs / totalMs))
    
    // If before November 1, show base levels
    if (progress <= 0) {
      progress = 0
    }

    return REINDEER.map((r) => {
      // Each reindeer charges from base energy to 100%
      // Different charge rates make them charge at different speeds
      const energyRange = 100 - r.baseEnergy
      const currentEnergy = r.baseEnergy + (energyRange * progress * r.chargeRate)
      
      return {
        ...r,
        energy: Math.min(100, Math.max(r.baseEnergy, currentEnergy)),
        status: currentEnergy >= 90 ? 'excellent' : currentEnergy >= 75 ? 'good' : 'charging',
      }
    })
  }

  useEffect(() => {
    // Calculate initial energy levels
    setReindeer(calculateEnergyLevels())

    // Update every hour to show progress
    const interval = setInterval(() => {
      setReindeer(calculateEnergyLevels())
    }, 3600000) // Update every hour

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (energy) => {
    if (energy >= 90) return '#4CAF50'
    if (energy >= 80) return '#FFC107'
    return '#F44336'
  }

  return (
    <Paper
      elevation={12}
      className="enhanced-card"
      sx={{
        p: { xs: 2.5, sm: 3, md: 4, lg: 5 },
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: { xs: 3, sm: 4 },
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: { xs: 1.5, sm: 2 },
          pb: 1.5,
          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <PetsIcon 
          sx={{ 
            color: '#FFD700', 
            mr: 1.5, 
            fontSize: { xs: 24, sm: 28 },
            filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.5))',
          }} 
        />
        <Typography 
          variant="h6" 
          sx={{ 
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
            fontSize: { xs: '1.125rem', sm: '1.375rem' },
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Reindeer Status
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 1.5, sm: 2 },
          '& > *': {
            flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(33.333% - 14px)', lg: '1 1 calc(33.333% - 16px)' },
            maxWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 14px)', lg: 'calc(33.333% - 16px)' },
            minWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 14px)', lg: 'calc(33.333% - 16px)' },
          },
        }}
      >
        {reindeer.map((r) => (
          <Box key={r.name}>
            <Box
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 600, 
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                    mr: 1.5,
                  }}
                >
                  🦌 {r.name}
                </Typography>
                <Box
                  sx={{
                    ml: 'auto',
                    px: 1.5,
                    py: 0.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 1,
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700,
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                    }}
                  >
                    {Math.round(r.energy)}%
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 1.5, position: 'relative' }}>
                <LinearProgress
                  variant="determinate"
                  value={r.energy}
                  sx={{
                    height: { xs: 4, sm: 5, md: 6 },
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: getStatusColor(r.energy),
                      transition: 'transform 0.4s linear',
                    },
                  }}
                />
                {r.energy < 100 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: { xs: 4, sm: 5, md: 6 },
                      borderRadius: 4,
                      background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)`,
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s infinite',
                      '@keyframes shimmer': {
                        '0%': { backgroundPosition: '-200% 0' },
                        '100%': { backgroundPosition: '200% 0' },
                      },
                    }}
                  />
                )}
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '0.9rem' },
                  }}
                >
                  Range: {r.baseEnergy}% → 100%
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '0.9rem' },
                    fontWeight: 500,
                  }}
                >
                  {Math.round(100 - r.energy)}% to full charge
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default ReindeerStatus

