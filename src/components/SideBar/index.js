import './style.css'

function Sidebar(){
    return(
        <div className='sidebarDiv'>
            <div className="heading">GIFT CARD </div>
            <ul className="links">
                <li><a href="#">Now Available on Persona</a></li>
            </ul>
            <div className="heading">RECOMMENDED</div>
            <ul className="links">
                <li><a href="#">By Friends</a></li>
                <li><a href="#">By Curators</a></li>
                <li><a href="#">Tags</a></li>
            </ul>
            <div className="heading">DISCOVERY QUEUES</div>
            <ul className="links">
                <li><a href="#">Recommendations</a></li>
                <li><a href="#">New Releases</a></li>
            </ul>
            <div className="heading">BROWSE CATEGORIES</div>
            <ul className="links">
                <li><a href="#">Top Seller</a></li>
                <li><a href="#">New Releases</a></li>
                <li><a href="#">Upcoming</a></li>
                <li><a href="#">Specials</a></li>
                <li><a href="#">VR Titles</a></li>
                <li><a href="#">Contoller Friendly</a></li>
            </ul>
            <div className="heading">BROWSE BY GENRA</div>
            <ul className="links">
                <li><a href="#">Free to Play</a></li>
                <li><a href="#">Early Access</a></li>
                <li><a href="#">Acton</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Casual</a></li>
                <li><a href="#">Indie</a></li>
                <li><a href="#">Massively Multiplayer</a></li>
                <li><a href="#">Racing</a></li>
                <li><a href="#">RPS</a></li>
                <li><a href="#">Simulation</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Strategy</a></li>
            </ul>
        </div>
    )
}
export default Sidebar;