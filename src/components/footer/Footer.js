import './Footer.css'
import facbook from '../Assests/Facebook_icon.png'
import instagrm from '../Assests/instaicon.jpg'
import twitter from '../Assests/twittericon.png'
function Footer() {
    return (
         <>
    <div className="container">
        <footer className="row row-cols-5 py-5 my-5 border-top">
            <div className="col">
                <p>@2023 copy right </p>
            </div>
            
            <div className="col">
                
            </div>
            <div className="col">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Features</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Pricing</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">About</a>
                    </li>

                </ul>
            </div>
            <div className="col">
                
            <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Features</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">Pricing</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="" className="nav-link p-0">About</a>
                    </li>

                </ul>
            </div>
            <div className='footer-social'>
                
                <div className='icon-container'>
                    <img src={facbook}></img>
                </div>
                <div className='icon-container'>
                    <img src={instagrm}></img>
                </div>
                <div className='icon-container'>
                    <img src={twitter}></img>
                </div>
            </div>
            </footer>
            </div>
            </>
             );
}

export default Footer;