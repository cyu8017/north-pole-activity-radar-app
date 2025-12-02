import { useState, useEffect } from 'react'
import { Paper, Typography, TextField, Button, Box, List, ListItem, ListItemText, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'

function WishList() {
  const [wish, setWish] = useState('')
  const [wishes, setWishes] = useState([])

  useEffect(() => {
    // Load wishes from localStorage
    const savedWishes = localStorage.getItem('christmas-wishlist')
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes))
    }
  }, [])

  const addWish = () => {
    if (wish.trim()) {
      const newWishes = [...wishes, wish.trim()]
      setWishes(newWishes)
      localStorage.setItem('christmas-wishlist', JSON.stringify(newWishes))
      setWish('')
    }
  }

  const deleteWish = (index) => {
    const newWishes = wishes.filter((_, i) => i !== index)
    setWishes(newWishes)
    localStorage.setItem('christmas-wishlist', JSON.stringify(newWishes))
  }

  return (
    <Paper
      sx={{
        p: 3,
        mt: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <CardGiftcardIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
          My Christmas Wish List
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Add a wish..."
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addWish()}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.6)',
            },
          }}
        />
        <Button
          variant="contained"
          onClick={addWish}
          sx={{
            backgroundColor: 'rgba(76, 175, 80, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(76, 175, 80, 1)',
            },
          }}
        >
          <AddIcon />
        </Button>
      </Box>

      <List>
        {wishes.map((wishItem, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
              mb: 1,
            }}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteWish(index)} sx={{ color: 'white' }}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={wishItem}
              sx={{ color: 'white' }}
            />
          </ListItem>
        ))}
        {wishes.length === 0 && (
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', py: 2 }}>
            No wishes yet. Add your first wish above! 🎁
          </Typography>
        )}
      </List>
    </Paper>
  )
}

export default WishList

