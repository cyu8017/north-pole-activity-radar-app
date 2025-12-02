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
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            width: { xs: 36, sm: 40 },
            height: { xs: 36, sm: 40 },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
            '& svg': {
              fontSize: { xs: 20, sm: 24 },
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

