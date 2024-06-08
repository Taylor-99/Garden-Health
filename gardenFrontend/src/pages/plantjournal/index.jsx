
import withAuth from '../components/withAuth.jsx';
import NavBar from '../components/NavBar.jsx'
import PlantNavBar from './components/PlantNavBar.jsx'
import { useRouter } from 'next/router';
import Garden from './components/garden.jsx'

const PlantJournal = () => {

    const router = useRouter();
    console.log(router.pathname)

    return (
        <div>
            <NavBar pageName="Plant Journal" />

            <h1> This is the Plant Journal </h1>

            <PlantNavBar />
            
            <Garden />
        </div>

    )
}

export default withAuth(PlantJournal);