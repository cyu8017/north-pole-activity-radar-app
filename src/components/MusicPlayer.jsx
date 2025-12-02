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
          {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default MusicPlayer

