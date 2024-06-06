
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'

const withAuth = (WrappedComponent) => {
    
    return (props) => {
        const navigate = useRouter();
        const [cookies] = useCookies(['token']);
    
        useEffect(() => {
            const verifyCookie = async () => {
                const token = cookies.token;
            
                console.log('Frontend Token:', token); // Debug logging

                if (!token && navigate.pathname !== '/auth') {
                    console.log('Redirecting to login page...'); 
                    // Debug logging
                    navigate.push('/auth');
                }
                const response = await fetch('http://localhost:4000/auth', {
                    method: 'get',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            };

            verifyCookie();

        }, [cookies, navigate]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;