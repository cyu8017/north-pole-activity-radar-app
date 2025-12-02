import { useState, useEffect } from 'react'
import { Paper, Typography, Box, Chip, LinearProgress } from '@mui/material'

const WORKSHOP_STATUS = [
  { task: 'Checking Naughty List', progress: 100, status: 'Complete', isStatic: true },
  { task: 'Wrapping Presents', progress: 98, status: 'Almost Done', isStatic: true },
  { task: 'Toy Assembly', progress: 95, status: 'Excellent', isStatic: true },
  { task: 'Sleigh Maintenance', progress: 100, status: 'Complete', isStatic: true },
  { task: 'Cookie Baking', progress: 87, status: 'In Progress', isStatic: true },
  { task: 'Quality Check', progress: 92, status: 'On Track', isStatic: true },
  { task: 'Presents Loaded', progress: 85, status: 'Loading', isStatic: true },
  { task: 'Take Off', progress: 0, status: 'Waiting', isStatic: false },
]

function ElfWorkshop() {
  const [tasks, setTasks] = useState(WORKSHOP_STATUS)

  const calculateTakeOffProgress = () => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const dec24_10pm = new Date(currentYear, 11, 24, 22, 0, 0, 0) // December 24 at 10 PM
    const dec25_midnight = new Date(currentYear, 11, 25, 0, 0, 0, 0) // December 25 at midnight

    // If before 10 PM on Dec 24, progress is 0%
    if (now < dec24_10pm) {
      return { progress: 0, status: 'Waiting' }
    }

    // If after midnight on Dec 25, progress is 100%
    if (now >= dec25_midnight) {
      return { progress: 100, status: 'Complete' }
    }

    // Calculate progress between 10 PM Dec 24 and midnight Dec 25 (2 hours)
    const totalMs = dec25_midnight - dec24_10pm
    const elapsedMs = now - dec24_10pm
    const progress = Math.min(100, (elapsedMs / totalMs) * 100)

    if (progress >= 90) {
      return { progress, status: 'Almost Ready' }
    } else if (progress >= 50) {
      return { progress, status: 'In Progress' }
    } else {
      return { progress, status: 'Starting' }
    }
  }

  useEffect(() => {
    const updateTasks = () => {
      setTasks((prev) =>
        prev.map((task) => {
          if (!task.isStatic) {
            // Handle dynamic "Take Off" task
            const takeOffData = calculateTakeOffProgress()
            return {
              ...task,
              progress: takeOffData.progress,
              status: takeOffData.status,
            }
          }
          // Static tasks - only update if not at 100%
          if (task.progress >= 100) {
            return task
          }
          // Slight random updates for static tasks
          return {
            ...task,
            progress: Math.min(100, task.progress + Math.random() * 0.5),
          }
        })
      )
    }

    // Update immediately
    updateTasks()

    // Update every second for real-time updates
    const interval = setInterval(updateTasks, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Paper
      elevation={12}
      className="enhanced-card"
      sx={{
        p: { xs: 3, sm: 4, md: 5 },
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderRadius: { xs: 16, sm: 20, md: 24 },
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.25), 0 0 32px rgba(245, 158, 11, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
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
          justifyContent: 'flex-end', 
          mb: { xs: 1.5, sm: 2 },
          pb: 1.5,
          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            letterSpacing: '-0.01em',
          }}
        >
          Elf Workshop Status
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 1.5, sm: 2 },
          '& > *': {
            flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(50% - 16px)' },
            maxWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(50% - 12px)', lg: 'calc(50% - 16px)' },
            minWidth: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(50% - 12px)', lg: 'calc(50% - 16px)' },
          },
        }}
      >
        {tasks.map((task, index) => (
          <Box key={index}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3, md: 3.5 },
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(12px)',
                borderRadius: 3,
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 16px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 1, sm: 1.5 }, flexWrap: 'wrap', gap: 0.5 }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'white', 
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                  }}
                >
                  {task.task}
                </Typography>
                <Chip
                  label={task.status}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(76, 175, 80, 0.3)',
                    color: 'white',
                    fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                    height: { xs: 20, sm: 24, md: 26 },
                  }}
                />
              </Box>
              <Box sx={{ mb: 1.5, position: 'relative' }}>
                <LinearProgress
                  variant="determinate"
                  value={task.progress}
                  sx={{
                    height: { xs: 4, sm: 5, md: 6 },
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #4CAF50, #8BC34A)',
                      transition: 'transform 0.4s linear',
                    },
                  }}
                />
                {task.progress < 100 && (
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
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem' },
                  fontWeight: 500,
                }}
              >
                {Math.round(task.progress)}% Complete
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default ElfWorkshop

