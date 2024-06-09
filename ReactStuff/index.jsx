
import withAuth from '../gardenFrontend/src/pages/components/withAuth.jsx';
import NavBar from '../gardenFrontend/src/pages/components/NavBar.jsx'
import PlantNavBar from '../gardenFrontend/src/pages/plantjournal/components/PlantNavBar.jsx'
import { useRouter } from 'next/router';
import Garden from './components/garden.jsx'

const PlantJournal = () => {

    const router = useRouter();
    console.log(router.pathname)

    return (
        <div>
            <NavBar pageName="Plant Journal" />
            <br></br>
            <PlantNavBar />
            <br></br>
            <Garden />
        </div>

    )
}

export default withAuth(PlantJournal);