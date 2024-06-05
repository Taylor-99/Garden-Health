
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'

const withAuth = (WrappedComponent) => {
    
    return (props) => {
        const navigate = useRouter();
        const [cookies] = useCookies(['token']);
    
        useEffect(() => {

            const checkToken = Cookies.get('checkToken')
            // Access the token from cookies
            const token = cookies.token;
            
            console.log('CheckToken:', checkToken); // Debug logging
            console.log('Token:', token); // Debug logging
            console.log('Pathname:', navigate.pathname); // Debug logging

            if (!token && navigate.pathname !== '/auth') {
                console.log('Redirecting to login page...'); // Debug logging
                navigate.push('/auth');
              }

        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;