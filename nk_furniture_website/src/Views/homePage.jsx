import './homePage.css'
import '../global_css/global.css'
import { NavBar } from '../components/navBar/navBar'

export const Home = () => {
    return (
        <div className='containerHomePage'>
            <NavBar/>
        </div>
    )
}