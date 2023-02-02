import instagramcopy from '../instagramcopy.png';
import snapchatcopy from '../snapchatcopy.png';
import tikkytokcopy from '../tikkytokcopy.png';
import twittercopy from '../twittercopy.png';
import pinterestcopy from '../pinterestcopy.png';


const Footer = () => {
    return ( 
        <>
            <div class="footer-content">

            <h3>Negative Infinity</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

            <ul class="socials">

                 <li><img src={instagramcopy} alt = "Product Image" width={50} /> </li>

                <li><img src={snapchatcopy} alt = "Product Image" width={50}/></li>

                <li><img src={tikkytokcopy} alt = "Product Image" width={50}/></li>

                <li><img src={twittercopy} alt = "Product Image" width={50}/></li>

                <li><img src={pinterestcopy} alt = "Product Image" width={50}/></li> 

                {/* <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li> */}

            </ul>

            </div>

            <div class="footer-bottom">

            <p> &copy; <span id="year"></span> <a href="#">@NegativeInfinity</a> </p>

            <div class="footer-menu">

                <ul class="f-menu">

                <li><a href="">Home</a></li>

                <li><a href="">About</a></li>

                <li><a href="">Contact</a></li>

                </ul>

            </div>

            </div>
            </>
     );
}
 
export default Footer;