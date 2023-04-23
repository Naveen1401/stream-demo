import "./style.css";
import Logo from "../../Images/Persona_logo.png";
import twitter from "../../Images/twitter.png";
import linkedIn from "../../Images/linkedin.png";
import discord from "../../Images/discord.png";

function Footer() {
    return (
        <section>
            <div className='upperFooter'>
                <div className='footerLogoDiv'>
                    <img className="footerLogo" src={Logo} alt="Persona Logo"/>
                </div>
                <div>
                    <ul className='links1'>
                        <li><a className="linkItem" href="https://www.persona3.io/careers" target="_blank" rel="noreferrer" >Career</a></li>
                        <li><a className="linkItem" href="https://www.persona3.io/docs" target="_blank" rel="noreferrer" >Docs</a></li>
                        <li><a className="linkItem" href="https://www.persona3.io/blog" target="_blank" rel="noreferrer" >Blog</a></li>
                        <li><a className="linkItem" href="https://www.persona3.io/contact-us" target="_blank" rel="noreferrer" >Contact us</a></li>
                        <li><a className="linkItem" href="https://uploads-ssl.webflow.com/635f9a863010036cda3b169c/636004fde8ccd33570cd9488_Privacy%20Policy.pdf" target="_blank" rel="noreferrer" >Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='links2'>
                        <li><a href="https://twitter.com/Persona3io"><img src={twitter} alt="Twitter link" target="_blank" /></a></li>
                        <li><a href="https://www.linkedin.com/company/personaxyz/"><img src={linkedIn} alt="LinkedIn link" target="_blank" /></a></li>
                        <li><a href="https://discord.com/invite/Ham2bVh4fk"><img src={discord} alt="Discord link" target="_blank" /></a></li>
                    </ul>
                </div>
            </div>
            <div className='bottomFooter'>
                <p>© 2022 Persona XYZ, Inc</p>
            </div>
        </section>
    );
}

export default Footer;