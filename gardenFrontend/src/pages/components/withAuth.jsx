
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
    
    return (props) => {
        const navigate = useRouter();
    
        useEffect(() => {
            const token = Cookies.get('token');
            if (!token) {
                navigate.replace('/auth');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;