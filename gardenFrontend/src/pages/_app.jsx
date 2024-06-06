
import '../App.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const App = ({Component, pageProps}) => {

  const navigate = useRouter();

  useEffect(() => {
      const token = Cookies.get('token');

      if (!token && navigate.pathname !== '/auth') {
        console.log('Redirecting to login page...'); // Debug logging
        navigate.push('/auth');
      }
  }, []);

  return (
    <div>
      <Component classame="App" {...pageProps} />
    </div>
  )
}

export default App;