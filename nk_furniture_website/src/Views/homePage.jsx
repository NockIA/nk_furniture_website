import './homePage.css'
import '../global_css/global.css'
import { NavBar } from '../components/navBar/navBar'
import { Slider } from '../components/slider_component/slider'

export const Home = () => {
    return (
        <div className='containerHome alignCenter'>
            <div className='containerHomePage'>
                <NavBar/>
                <Slider slider={"Slider_1"}/>
            </div>
        </div>
    )
}