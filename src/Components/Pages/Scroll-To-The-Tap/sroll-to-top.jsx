import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './stt_Styles.css';

const Scroll_to_top = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400){
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default Scroll_to_top;