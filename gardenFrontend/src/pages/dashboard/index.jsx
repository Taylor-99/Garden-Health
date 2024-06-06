
import NavBar from '../components/NavBar.jsx';
import withAuth from '../components/withAuth.jsx';
import WeatherComponent from './components/weather.jsx'
import ChallengeComponent from './components/challenges.jsx'
import RemindersComponent from './components/reminders.jsx'

const Home = () => {


  return (
    <div>
      <NavBar />
      <h1>This is the Dashboard</h1>
      <br></br>
      <WeatherComponent />
      <br></br>
      <ChallengeComponent />
      <br></br>
      <RemindersComponent />
    </div>
  )
}

export default withAuth(Home);