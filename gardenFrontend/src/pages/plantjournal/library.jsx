
import withAuth from '../components/withAuth.jsx';
import NavBar from '../components/NavBar.jsx';
import PlantNavBar from './components/PlantNavBar.jsx';

const Library = () => {
    return (
        <div>
            <NavBar pageName="Plant Journal" />

            <h1> This is the Plant Journal </h1>
            
            <PlantNavBar />

            <h1>This is the Library</h1>
        </div>
    )
}

export default withAuth(Library);