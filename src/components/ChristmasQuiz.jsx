import { useState } from 'react'
import { Paper, Typography, Box, Button, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material'
import QuizIcon from '@mui/icons-material/Quiz'

const QUIZ_QUESTIONS = [
  {
    question: 'In which country did the tradition of Christmas trees begin?',
    options: ['France', 'Germany', 'England', 'USA'],
    correct: 1,
  },
  {
    question: 'How many reindeer pull Santa\'s sleigh?',
    options: ['7', '8', '9', '10'],
    correct: 2,
  },
  {
    question: 'What is Santa\'s favorite cookie?',
    options: ['Chocolate Chip', 'Sugar Cookies', 'Gingerbread', 'All of them!'],
    correct: 3,
  },
  {
    question: 'In what year did NORAD start tracking Santa?',
    options: ['1955', '1960', '1975', '1985'],
    correct: 0,
  },
]

function ChristmasQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
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
        <Box sx={{ textAlign: 'center' }}>
          <QuizIcon sx={{ color: '#FFD700', fontSize: 60, mb: 2 }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
            Quiz Complete!
          </Typography>
          <Typography variant="h4" sx={{ color: '#FFD700', fontWeight: 700, mb: 2 }}>
            Score: {score}/{QUIZ_QUESTIONS.length}
          </Typography>
          <Button
            variant="contained"
            onClick={resetQuiz}
            sx={{
              backgroundColor: 'rgba(76, 175, 80, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(76, 175, 80, 1)',
              },
            }}
          >
            Try Again
          </Button>
        </Box>
      </Paper>
    )
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <QuizIcon sx={{ color: 'white', mr: 1 }} />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 500 }}>
            Christmas Quiz
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {currentQuestion + 1}/{QUIZ_QUESTIONS.length}
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 500 }}>
        {QUIZ_QUESTIONS[currentQuestion].question}
      </Typography>

      <RadioGroup
        value={selectedAnswer}
        onChange={(e) => {
          setSelectedAnswer(parseInt(e.target.value))
          setShowResult(false)
        }}
      >
        {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={<Radio sx={{ color: 'white' }} />}
            label={<Typography sx={{ color: 'white' }}>{option}</Typography>}
            sx={{
              mb: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 1,
              px: 1,
            }}
          />
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        fullWidth
        onClick={handleAnswer}
        disabled={selectedAnswer === null}
        sx={{
          mt: 3,
          backgroundColor: 'rgba(76, 175, 80, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(76, 175, 80, 1)',
          },
          '&:disabled': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </Button>
    </Paper>
  )
}

export default ChristmasQuiz

