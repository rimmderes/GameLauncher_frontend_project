import './instagramcopy.png';


const Footer = () => {
    return ( 
        <>
            <div class="footer-content">

            <h3>Negative Infinity</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium turpis. Suspendisse eros nunc, sollicitudin nec.</p>

            <ul class="socials">

                 <li><img src={'instagramcopy.png'} alt = "Product Image"/> </li>

                <li><img src="snapchatcopy.png" alt = "Product Image" /></li>

                <li><img src="pinterestcopy.png" alt = "Product Image" /></li>

                <li><img src="tikkytokcopy.png" alt = "Product Image" /></li>

                <li><img src="twittercopy.png" alt = "Product Image" /></li> 

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