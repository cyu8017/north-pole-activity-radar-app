import { useState, useEffect } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

const CHRISTMAS_FACTS = [
  "🎄 The tradition of Christmas trees started in Germany in the 16th century!",
  "🎅 Santa Claus is based on Saint Nicholas, a 4th-century Greek bishop known for gift-giving!",
  "🦌 Reindeer are the only mammals that can see ultraviolet light!",
  "🎁 The tradition of gift-giving dates back to the Three Wise Men bringing gifts to baby Jesus!",
  "❄️ In Finland, Santa's official home is Korvatunturi, near the Russian border!",
  "🎄 The tallest Christmas tree ever displayed was 221 feet tall in Seattle, Washington!",
  "🎅 NORAD has been tracking Santa since 1955 when a misprinted phone number connected kids to them!",
  "🦌 Santa's reindeer can fly at speeds up to 650 miles per second to deliver all presents!",
  "🎁 In Iceland, children receive gifts from 13 Yule Lads, not just Santa!",
  "❄️ White Christmas occurs when there's at least 1 inch of snow on the ground on Dec 25!",
]

function ChristmasFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % CHRISTMAS_FACTS.length)
    }, 8000) // Change fact every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Paper
      sx={{
        p: 2,
        mt: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <AutoStoriesIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          Did You Know?
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          textAlign: 'center',
          fontWeight: 300,
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {CHRISTMAS_FACTS[currentFactIndex]}
      </Typography>
    </Paper>
  )
}

export default ChristmasFacts

