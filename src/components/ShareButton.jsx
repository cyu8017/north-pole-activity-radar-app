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

