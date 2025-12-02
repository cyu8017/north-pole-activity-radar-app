import { Box } from '@mui/material'
import '../styles/ChristmasBackground.css'

function ChristmasBackground() {
  return (
    <Box
      className="christmas-background"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Snow ground */}
      <Box
        className="snow-ground"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '15%',
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
          borderTop: '2px solid rgba(255, 255, 255, 0.4)',
          animation: 'snowGround 4s ease-in-out infinite',
        }}
      />

      {/* Christmas Trees */}
      <ChristmasTree x={10} size={80} delay={0} speed={5} />
      <ChristmasTree x={25} size={100} delay={0.5} speed={6} />
      <ChristmasTree x={70} size={90} delay={1} speed={5.5} />
      <ChristmasTree x={85} size={75} delay={1.5} speed={4.5} />

      {/* Houses */}
      <House x={40} size={70} delay={0.3} />
      <House x={55} size={60} delay={0.7} />

      {/* Presents */}
      <Present x={20} y={75} size={30} color="#e74c3c" delay={0.2} />
      <Present x={65} y={72} size={35} color="#3498db" delay={0.8} />
      <Present x={35} y={78} size={28} color="#2ecc71" delay={1.3} />

      {/* Santa */}
      <Santa x={15} y={68} size={40} delay={0.4} />

      {/* Reindeer */}
      <Reindeer x={30} y={70} size={35} delay={0.6} />
      <Reindeer x={75} y={68} size={38} delay={1.2} />

      {/* Stars in sky */}
      <Star x={20} y={20} size={15} delay={0} />
      <Star x={60} y={15} size={12} delay={0.7} />
      <Star x={80} y={25} size={18} delay={1.4} />
    </Box>
  )
}

function ChristmasTree({ x, size, delay, speed = 5 }) {
  return (
    <Box
      className="christmas-tree"
      sx={{
        position: 'absolute',
        bottom: '15%',
        left: `${x}%`,
        width: `${size}px`,
        height: `${size * 1.2}px`,
        animation: `treeSway ${speed}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
        animationDelay: `${delay}s`,
        transformOrigin: 'bottom center',
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 100 120"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Tree trunk */}
        <rect x="45" y="100" width="10" height="20" fill="#8B4513" />
        {/* Tree layers */}
        <polygon points="50,10 20,50 80,50" fill="#228B22" />
        <polygon points="50,30 30,60 70,60" fill="#228B22" />
        <polygon points="50,50 35,80 65,80" fill="#228B22" />
        {/* Star on top */}
        <polygon
          points="50,10 52,5 50,2 48,5"
          fill="#FFD700"
        />
        {/* Ornaments */}
        <circle cx="35" cy="45" r="3" fill="#FF0000" />
        <circle cx="65" cy="55" r="3" fill="#FFD700" />
        <circle cx="40" cy="70" r="3" fill="#FF0000" />
      </svg>
    </Box>
  )
}

function House({ x, size, delay = 0 }) {
  return (
    <Box
      className="house"
      sx={{
        position: 'absolute',
        bottom: '15%',
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: 'houseFloat 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        animationDelay: `${delay}s`,
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Roof */}
        <polygon points="50,10 10,40 90,40" fill="#8B0000" />
        {/* House body */}
        <rect x="20" y="40" width="60" height="50" fill="#DEB887" />
        {/* Door */}
        <rect x="40" y="60" width="20" height="30" fill="#654321" />
        <circle cx="55" cy="75" r="2" fill="#FFD700" />
        {/* Windows */}
        <rect x="25" y="50" width="12" height="12" fill="#87CEEB" />
        <rect x="63" y="50" width="12" height="12" fill="#87CEEB" />
        {/* Window panes */}
        <line x1="31" y1="50" x2="31" y2="62" stroke="#654321" strokeWidth="1" />
        <line x1="25" y1="56" x2="37" y2="56" stroke="#654321" strokeWidth="1" />
        <line x1="69" y1="50" x2="69" y2="62" stroke="#654321" strokeWidth="1" />
        <line x1="63" y1="56" x2="75" y2="56" stroke="#654321" strokeWidth="1" />
      </svg>
    </Box>
  )
}

function Present({ x, y, size, color, delay = 0 }) {
  return (
    <Box
      className="present"
      sx={{
        position: 'absolute',
        bottom: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: 'presentBounce 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
        animationDelay: `${delay}s`,
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Box */}
        <rect x="10" y="20" width="60" height="50" fill={color} />
        {/* Lid */}
        <rect x="5" y="15" width="70" height="15" fill={color} opacity="0.8" />
        {/* Ribbon vertical */}
        <rect x="38" y="15" width="4" height="55" fill="#FFD700" />
        {/* Ribbon horizontal */}
        <rect x="5" y="42" width="70" height="4" fill="#FFD700" />
        {/* Bow */}
        <circle cx="40" cy="42" r="6" fill="#FFD700" />
      </svg>
    </Box>
  )
}

function Santa({ x, y, size, delay = 0 }) {
  return (
    <Box
      className="santa"
      sx={{
        position: 'absolute',
        bottom: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size * 1.3}px`,
        animation: 'santaWave 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        animationDelay: `${delay}s`,
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 60 80"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Body */}
        <ellipse cx="30" cy="55" rx="20" ry="25" fill="#DC143C" />
        {/* Head */}
        <circle cx="30" cy="20" r="15" fill="#FFDBB3" />
        {/* Hat */}
        <rect x="20" y="5" width="20" height="25" fill="#DC143C" />
        <circle cx="30" cy="5" r="8" fill="white" />
        {/* Beard */}
        <ellipse cx="30" cy="28" rx="12" ry="8" fill="white" />
        {/* Belt */}
        <rect x="15" y="50" width="30" height="6" fill="black" />
        {/* Eyes */}
        <circle cx="25" cy="18" r="2" fill="black" />
        <circle cx="35" cy="18" r="2" fill="black" />
      </svg>
    </Box>
  )
}

function Reindeer({ x, y, size, delay = 0 }) {
  return (
    <Box
      className="reindeer"
      sx={{
        position: 'absolute',
        bottom: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size * 1.1}px`,
        animation: 'reindeerNod 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        animationDelay: `${delay}s`,
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size * 1.1}
        viewBox="0 0 50 55"
        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Body */}
        <ellipse cx="25" cy="35" rx="18" ry="15" fill="#8B4513" />
        {/* Head */}
        <ellipse cx="25" cy="15" rx="12" ry="10" fill="#A0522D" />
        {/* Antlers */}
        <path d="M20,8 L15,2 L18,5" stroke="#654321" strokeWidth="2" fill="none" />
        <path d="M30,8 L35,2 L32,5" stroke="#654321" strokeWidth="2" fill="none" />
        {/* Nose */}
        <circle cx="25" cy="18" r="3" fill="#FF0000" />
        {/* Eyes */}
        <circle cx="21" cy="14" r="2" fill="black" />
        <circle cx="29" cy="14" r="2" fill="black" />
        {/* Legs */}
        <rect x="15" y="45" width="4" height="10" fill="#8B4513" />
        <rect x="31" y="45" width="4" height="10" fill="#8B4513" />
      </svg>
    </Box>
  )
}

function Star({ x, y, size, delay = 0 }) {
  return (
    <Box
      className="star"
      sx={{
        position: 'absolute',
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: 'starTwinkle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        animationDelay: `${delay}s`,
        transition: 'all 0.3s ease',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
      >
        <path
          d="M10,0 L12,7 L19,7 L13,12 L15,19 L10,15 L5,19 L7,12 L1,7 L8,7 Z"
          fill="#FFD700"
          opacity="0.8"
        />
      </svg>
    </Box>
  )
}

export default ChristmasBackground

