
import '../App.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import withAuth from './components/withAuth';

const App = ({Component, pageProps}) => {

  const navigate = useRouter();

  useEffect(() => {
      const token = Cookies.get('token');
      if (!token && navigate.pathname !== '/auth') {
          navigate.replace('/auth');
      }

      console.log(token)
  }, []);

  return (
    <div>
      <Component classame="App" {...pageProps} />
    </div>
  )
}

export default withAuth(App);