import { useState } from 'react'
import { IconButton, Tooltip, Box } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control audio here
    // For now, this is a placeholder
  }

  return (
    <Box>
      <Tooltip title={isPlaying ? 'Mute Music' : 'Play Music'}>
        <IconButton
          onClick={toggleMusic}
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
          {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default MusicPlayer

