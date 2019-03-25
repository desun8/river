import React, { useEffect } from "react";
import parse from 'html-react-parser';

// const htmlStr = "<div><h1>Welcome to Gallery page!</h1></div>";
const htmlArr = 
  '<div><h1>Welcome to 1st time to Gallery page!</h1><div class="imgGallery"><h2>Here images gallery. May be</h2></div></div>'
;

const Gallery = () => {
  useEffect(() => {
    const img = divRef.querySelector(".imgGallery");
    img.style.cssText = 'font-size: 32px; color: green;'
  });

  let divRef;

  const handleClick = e => {
    console.log(divRef);
    e.target.style.cssText = "color: red;";
  };

  return (
    <div ref={e => (divRef = e)} onClick={e => handleClick(e)}>
      {parse(htmlArr)}
    </div>
  );
};

export default Gallery;
