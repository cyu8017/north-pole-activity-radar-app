import { Box } from '@mui/material'
import '../styles/Decorations.css'

function Decorations() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        padding: '20px',
        paddingBottom: '10px',
      }}
    >
      {/* Left side decorations */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        <CandyCane left={true} />
        <Pole />
      </Box>

      {/* Center decorations */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        <CandyCane left={false} />
        <CandyCane left={true} />
      </Box>

      {/* Right side decorations */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        <Pole />
        <CandyCane left={false} />
      </Box>
    </Box>
  )
}

function CandyCane({ left }) {
  return (
    <Box
      className="candy-cane"
      data-left={left}
      sx={{
        fontSize: '3rem',
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
      }}
    >
      🍭
    </Box>
  )
}

function Pole() {
  return (
    <Box
      className="pole"
      sx={{
        fontSize: '2.5rem',
        filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
      }}
    >
      🗼
    </Box>
  )
}

export default Decorations

