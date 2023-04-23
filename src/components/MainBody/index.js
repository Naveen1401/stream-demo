import Carousel from '../Carousel';
import Sidebar from '../SideBar';
import C1 from '../../CarouselOneImages.json'
import C2 from '../../CarouselTwoImages.json'
import './style.css'
import MainCarousel from '../MainCarousel';
import Ad from '../../Ad';
function MainBody() {
    return (
        <div className="mainContainer">
            <div className="grid-item sidebar"><Sidebar /></div>
            <div className="grid-item firstC">FEATURED & RECOMMENDED<MainCarousel /></div>
            <div className="grid-item ad"><Ad/></div>
            <div className="grid-item secondC">SPECIAL OFFERS<Carousel Sliders={C1} SPV={3}/></div>
            <div className="grid-item thirdC">UNDER £7<Carousel Sliders={C2} SPV={4} /></div>
        </div>
    )
}
export default MainBody;