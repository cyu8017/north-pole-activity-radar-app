import { useState } from 'react'
import { IconButton, Tooltip, Menu, MenuItem, Box } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkIcon from '@mui/icons-material/Link'

function ShareButton({ countdownText }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const shareText = `🎄 Only ${countdownText} until Christmas! Track Santa's journey at North Pole Radar! 🎅`

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')
    handleClose()
  }

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')
    handleClose()
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    handleClose()
  }

  return (
    <>
      <Tooltip title="Share">
        <IconButton
          onClick={handleClick}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={shareToTwitter}>
          <TwitterIcon sx={{ mr: 1 }} />
          Twitter
        </MenuItem>
        <MenuItem onClick={shareToFacebook}>
          <FacebookIcon sx={{ mr: 1 }} />
          Facebook
        </MenuItem>
        <MenuItem onClick={copyLink}>
          <LinkIcon sx={{ mr: 1 }} />
          Copy Link
        </MenuItem>
      </Menu>
    </>
  )
}

export default ShareButton

