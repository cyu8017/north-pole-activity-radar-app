import { useState, useEffect } from 'react'
import { IconButton, Tooltip, Box } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function ThemeToggle({ onThemeChange }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('christmas-theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      if (onThemeChange) onThemeChange(savedTheme === 'dark' ? 'dark' : 'light')
    }
  }, [onThemeChange])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('christmas-theme', newTheme ? 'dark' : 'light')
    if (onThemeChange) onThemeChange(newTheme ? 'dark' : 'light')
  }

  return (
    <Box>
      <Tooltip title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
        <IconButton
          onClick={toggleTheme}
          className="premium-button"
          sx={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            width: { xs: 44, sm: 48 },
            height: { xs: 44, sm: 48 },
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 16px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            },
            '& svg': {
              fontSize: { xs: 22, sm: 24 },
            },
          }}
        >
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ThemeToggle

