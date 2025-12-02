import { useState } from 'react'
import { Box, Tabs, Tab, Paper } from '@mui/material'
import ChristmasFacts from './ChristmasFacts'
import WorldClocks from './WorldClocks'
import WishList from './WishList'
import StatisticsDashboard from './StatisticsDashboard'
import NorthPoleWeather from './NorthPoleWeather'
import ChristmasQuiz from './ChristmasQuiz'
import ChristmasEveCountdown from './ChristmasEveCountdown'

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}

function FeaturePanel({ timeUntilChristmas, showSantaTracker }) {
  const [currentTab, setCurrentTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Paper
      sx={{
        mt: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              '&.Mui-selected': {
                color: 'white',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab label="Facts" />
          <Tab label="Clocks" />
          <Tab label="Weather" />
          <Tab label="Quiz" />
          <Tab label="Wish List" />
          <Tab label="Stats" />
          {!showSantaTracker && <Tab label="Eve Countdown" />}
        </Tabs>
      </Box>

      <TabPanel value={currentTab} index={0}>
        <ChristmasFacts />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <WorldClocks />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <NorthPoleWeather />
      </TabPanel>
      <TabPanel value={currentTab} index={3}>
        <ChristmasQuiz />
      </TabPanel>
      <TabPanel value={currentTab} index={4}>
        <WishList />
      </TabPanel>
      <TabPanel value={currentTab} index={5}>
        <StatisticsDashboard timeUntilChristmas={timeUntilChristmas} />
      </TabPanel>
      {!showSantaTracker && (
        <TabPanel value={currentTab} index={6}>
          <ChristmasEveCountdown />
        </TabPanel>
      )}
    </Paper>
  )
}

export default FeaturePanel

