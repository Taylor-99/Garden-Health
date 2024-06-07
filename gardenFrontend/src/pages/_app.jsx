
import '../App.css'
import withAuth from './components/withAuth'

const App = ({Component, pageProps}) => {

  return (
    <div>
      <Component classame="App" {...pageProps} />
    </div>
  )
}

export default withAuth(App);