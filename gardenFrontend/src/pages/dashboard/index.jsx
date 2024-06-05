
import NavBar from '../components/NavBar.jsx';
import WeatherComponent from './components/weather.jsx'
import withAuth from '../components/withAuth.jsx';

const Home = () => {


  return (
    <div>
      <NavBar />
      <h1>This is the Dashboard</h1>
      <WeatherComponent />
    </div>
  )
}

export default withAuth(Home);