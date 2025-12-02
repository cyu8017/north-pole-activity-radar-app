import { useState, useEffect } from 'react'
import { Box, Typography, Paper, Alert, Grid } from '@mui/material'
import RadarIcon from '@mui/icons-material/Radar'
import Snow from './components/Snow'
import Decorations from './components/Decorations'
import ChristmasBackground from './components/ChristmasBackground'
import SantaTracker from './components/SantaTracker'
import MusicPlayer from './components/MusicPlayer'
import ThemeToggle from './components/ThemeToggle'
import ShareButton from './components/ShareButton'
import Notifications from './components/Notifications'
import ReindeerStatus from './components/ReindeerStatus'
import ElfWorkshop from './components/ElfWorkshop'
import './styles/App.css'

function App() {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [showSantaTracker, setShowSantaTracker] = useState(false)
  const [isDecember24, setIsDecember24] = useState(false)

  // Check if it's December 24 or later
  useEffect(() => {
    const checkDate = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const dec24 = new Date(currentYear, 11, 24, 0, 0, 0, 0) // December 24 at midnight
      
      // Show tracker if it's Dec 24 or later
      const shouldShow = now >= dec24
      setShowSantaTracker(shouldShow)
      setIsDecember24(shouldShow)
    }

    checkDate()
    // Check every minute to update when it becomes Dec 24
    const interval = setInterval(checkDate, 60000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const calculateTimeUntilChristmas = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let christmas = new Date(currentYear, 11, 25, 0, 0, 0, 0) // December 25th at midnight

      // If Christmas has passed this year, calculate for next year
      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25, 0, 0, 0, 0)
      }

      // Calculate the difference in milliseconds
      const difference = christmas - now

      if (difference <= 0) {
        setTimeUntilChristmas({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeUntilChristmas({ days, hours, minutes, seconds })
    }

    // Calculate immediately
    calculateTimeUntilChristmas()

    // Update every second for real-time countdown
    const interval = setInterval(calculateTimeUntilChristmas, 1000)

    return () => clearInterval(interval)
  }, [])

  const isChristmasDay = timeUntilChristmas.days === 0 && 
                         timeUntilChristmas.hours === 0 && 
                         timeUntilChristmas.minutes === 0 && 
                         timeUntilChristmas.seconds === 0

  const formatCountdown = () => {
    const { days, hours, minutes, seconds } = timeUntilChristmas
    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2 },
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(236, 72, 153, 0.15) 0%, transparent 50%), linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      }}
    >
      <ChristmasBackground />
      <Snow />
      <Decorations />
      <Notifications showSantaTracker={showSantaTracker} timeUntilChristmas={timeUntilChristmas} />
      {/* Top Right Icons in one line */}
      <Box
        sx={{
          position: 'fixed',
          top: { xs: 8, sm: 16 },
          right: { xs: 8, sm: 16 },
          zIndex: 1000,
          display: 'flex',
          gap: { xs: 1, sm: 1.5 },
          alignItems: 'center',
        }}
      >
        <MusicPlayer />
        <ThemeToggle />
        <ShareButton countdownText={formatCountdown()} />
      </Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        {!isDecember24 ? (
          <>
            {/* Three Column Layout: Reindeer | Radar | Workshop */}
            <Grid 
              container 
              spacing={{ xs: 2, sm: 2, md: 3 }} 
              sx={{ mb: { xs: 2, sm: 3 } }}
              alignItems="stretch"
            >
              {/* Left Column - Reindeer Status */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <ReindeerStatus />
              </Grid>

              {/* Center Column - North Pole Radar */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
            <Paper
              elevation={0}
              className="enhanced-card gradient-border"
              sx={{
                p: { xs: 3, sm: 4, md: 5, lg: 6 },
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                borderRadius: { xs: 16, sm: 20, md: 24 },
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
                  animation: 'pulse 4s ease-in-out infinite',
                  pointerEvents: 'none',
                },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 2, sm: 2.5 }, gap: 2 }}>
                  <RadarIcon 
                    sx={{ 
                      color: '#10B981',
                      fontSize: { xs: 36, sm: 44, md: 52 },
                      animation: 'spin 4s linear infinite',
                      '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                      filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.6))',
                    }} 
                  />
                  <Typography
                    variant="h2"
                    component="h1"
                    className="gradient-text"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3.25rem' },
                      letterSpacing: '-0.02em',
                    }}
                  >
                    North Pole Radar
                  </Typography>
                </Box>
                {isChristmasDay ? (
                  <Box sx={{ textAlign: 'center', py: { xs: 2, sm: 3, md: 4 } }}>
                    <Typography
                      variant="h3"
                      className="countdown-glow"
                      sx={{
                        color: '#FFD700',
                        fontWeight: 600,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                      }}
                    >
                      🎄 Merry Christmas! 🎄
                    </Typography>
                  </Box>
                ) : (
                  <Box 
                    sx={{ 
                      textAlign: 'center', 
                      py: { xs: 2, sm: 3, md: 4 },
                      position: 'relative',
                    }}
                  >
                    <Typography
                    variant="h1"
                    component="div"
                    className="countdown-glow"
                    sx={{
                      fontFamily: "'Space Grotesk', monospace",
                      fontWeight: 700,
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '6rem' },
                      letterSpacing: { xs: 2, sm: 3 },
                      lineHeight: { xs: 1.1, sm: 1 },
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(135deg, #F59E0B 0%, #FB923C 25%, #EC4899 50%, #A855F7 75%, #6366F1 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'gradient-shift 4s ease infinite',
                      '@keyframes gradient-shift': {
                        '0%, 100%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                      },
                    }}
                  >
                    {formatCountdown()}
                  </Typography>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: 0,
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
                          '50%': { opacity: 0.8, transform: 'translate(-50%, -50%) scale(1.1)' },
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.7)',
                        mt: 1,
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.875rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {isChristmasDay ? "It's Christmas Day!" : "Time until Christmas"}
                    </Typography>
                  </Box>
                )}
              </Box>
              
              {/* Alert to inform users to come back on Dec 24 */}
              {!showSantaTracker && (
                <Box sx={{ mt: 'auto' }}>
                  <Alert
                    severity="info"
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.25) 0%, rgba(33, 150, 243, 0.15) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(64, 181, 246, 0.4)',
                      borderRadius: { xs: 2, sm: 3 },
                      color: 'white',
                      textAlign: 'center',
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                      boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      '& .MuiAlert-icon': {
                        color: '#90CAF9',
                        fontSize: '1.25rem',
                      },
                      '& .MuiAlert-message': {
                        color: 'white',
                        fontWeight: 300,
                        width: '100%',
                        textAlign: 'center',
                      },
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 300, 
                        textAlign: 'center',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    >
                      Come back on <strong>December 24</strong> evening to track Santa's flight around the world! 🎅✈️
                    </Typography>
                  </Alert>
                </Box>
              )}
            </Paper>
          </Grid>

              {/* Right Column - Elf Workshop */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <ElfWorkshop />
              </Grid>
            </Grid>
            
            {/* Santa Tracker - Only show starting Dec 24 evening */}
            {showSantaTracker && <SantaTracker />}
          </>
        ) : (
          <>
            {/* December 24 Layout: Tracker on top, cards collapsed at bottom */}
            <Box sx={{ mb: { xs: 2, sm: 3 } }}>
              {showSantaTracker && <SantaTracker />}
            </Box>
            
            {/* Collapsed cards at bottom */}
            <Box
              sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                px: { xs: 1, sm: 2, md: 3 },
                pb: { xs: 1, sm: 2 },
                pointerEvents: 'none',
              }}
            >
              <Grid 
                container 
                spacing={{ xs: 1, sm: 2 }} 
                sx={{ 
                  maxWidth: '1400px',
                  mx: 'auto',
                  pointerEvents: 'auto',
                }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{
                      transform: 'scale(0.7)',
                      transformOrigin: 'bottom left',
                      transition: 'transform 0.3s ease',
                      opacity: 0.9,
                    }}
                  >
                    <ReindeerStatus />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{
                      transform: 'scale(0.7)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                      opacity: 0.9,
                    }}
                  >
                    <ElfWorkshop />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default App
