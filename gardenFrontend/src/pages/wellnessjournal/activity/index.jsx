
import NavBar from '../../components/NavBar.jsx'
import WellnessNavBar from '../components/WellnessNavBar.jsx'
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import withAuth from '../../components/withAuth';

const Activity = () => {
  return (
    <div>
        <NavBar />
        <br></br>
        <WellnessNavBar />
        <br></br>

        <h1>Activity Log</h1>

    </div>
  )
}

export default Activity