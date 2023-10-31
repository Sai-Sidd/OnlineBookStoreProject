import React, { useState, useContext } from "react";
import BookStoreContext from "../../context/bookStorContext";
import "../header/header.css";
import HeaderMiddle from "../header/Header";
import HeaderTop2 from "../header/HeaderTop2";
import Modal from "../modal/Modal";
import Rating from "../book-slider/Rating";


const BookSlider = ({ data }) => {
  const { addToCart } = useContext(BookStoreContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="book-slider-container">
      <div className="book-slider-wrapper">
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">₹{item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i onClick={() => handleOpenModal(item)} className="bi bi-eye-fill"></i>
              <i onClick={() => addToCart(item, 1)} className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

const Header2 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <HeaderTop2 toggle={toggle} setToggle={setToggle} />
      <HeaderMiddle />
    </header>
  );
};

export { BookSlider, Header2 };
