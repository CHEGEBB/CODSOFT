import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CartIcon from "../images/ic--round-shopping-cart.svg";
import Wishlist from "../images/icon-park-solid--love-and-help.svg";
import SearchIcon from "../images/ant-design--search-outlined.svg";
import CallIcon from "../images/ic--round-call.svg";
import MailIcon from "../images/mdi--email.svg";
import PersonIcon from "../images/mdi--person.svg";
import bg from "../images/webp/kids/bg3.mp4";
import Navbar from "../components/Navbar";
import './header.scss';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch();
    } else {
      setSearchResults([]);
      setDropdownVisible(false);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results);
      setDropdownVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSelectSuggestion = (productId) => {
    navigate("/shop");
    setDropdownVisible(false);
    setSearchQuery("");
  };

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
        <div className="video-container-bg">
          <video autoPlay loop muted className="background-video">
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-bg"></div>
          <input
            type="text"
            className="input-search"
            placeholder="Search for products here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="filter-icon"></span>
          <button type="submit" onClick={handleSearch}>
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          {isDropdownVisible && searchResults.length > 0 && (
            <ul className="autocomplete-dropdown">
              {searchResults.map((result, index) => (
                <li key={index} onClick={() => handleSelectSuggestion(result._id)}>
                  {result.name} - ${result.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
