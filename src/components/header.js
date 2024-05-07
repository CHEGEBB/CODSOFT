import CartIcon from "../images/ic--round-shopping-cart.svg";
import Wishlist from "../images/icon-park-solid--love-and-help.svg";
import SearchIcon from "../images/ant-design--search-outlined.svg";
import CallIcon from "../images/ic--round-call.svg";
import MailIcon from "../images/mdi--email.svg";
import PersonIcon from "../images/mdi--person.svg";
import bg from "../images/webp/kids/bg3.mp4";
import Navbar from "../components/Navbar";


const Header = () => {
    return ( 
        <div className="header-section">
        <div className="header">
        <div className="reach">
          <div className="phone">
            <div className="call-icon">
              <img src={CallIcon} alt="CallIcon" />
            </div>
            <div className="number">
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
          <div className="email">
            <div className="mail-icon">
              <img src={MailIcon} alt="MailIcon" />
            </div>
            <div className="mail">
              <p>info@glamourgallerie.com</p>
            </div>
          </div>
          <div className="my-account">
            <div className="person-icon">
              <img src={PersonIcon} alt="PersonIcon" />
            </div>
            <div className="account">
              <p>My Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="choice">
          <div className="cart">
            <div className="catcon">
              <img src={CartIcon} alt="Cart Icon" />
            </div>
            <div className="cart-content">
              <h1>Cart</h1>
            </div>
          </div>
          <div className="wishlist">
            <div className="wishcon">
              <img src={Wishlist} alt="Wishlist Icon" />
            </div>
            <div className="wishlist-content">
              <h1>Wishlist</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="search-container">
      {/* Video with overlay as background */}
      <div className="video-container-bg">
          <video autoPlay loop muted className="background-video">
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-bg"></div> {/* Overlay */}
          <input
            type="text"
            className="input-search"
            placeholder="Search for products here..."
          />
          <span className="filter-icon"></span>
          <button type="submit">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </div>
      </div>
      <Navbar />
      </div>
     );
}
 
export default Header;