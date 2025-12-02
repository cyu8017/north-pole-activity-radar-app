import { Box } from '@mui/material'
import '../styles/Snow.css'

function Snow() {
  // Generate snowflakes with random properties - varied sizes
  const snowflakes = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: 8 + Math.random() * 25,
    size: Math.random() * 8 + 4, // Larger size range: 4-12px
    opacity: Math.random() * 0.6 + 0.4,
    fontSize: Math.random() * 16 + 10, // Font size 10-26px
  }))

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            animationDelay: `${snowflake.animationDelay}s`,
            animationDuration: `${snowflake.animationDuration}s`,
            fontSize: `${snowflake.fontSize}px`,
            opacity: snowflake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </Box>
  )
}

export default Snow
