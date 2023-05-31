import { useState } from "react";
import Card from "../component/card/Card";

function ImageGallery() {
  const [links, setLinks] = useState([
    "https://bit.ly/3lmYVna",
    "https://bit.ly/3flyaMj",
  ]);

  const handleDeleteImg = (id) => setLinks(links.filter((link, index) => index != id));

  return (
    <div>
      {links.map((link, index) => (
        <Card
          link={link}
          id={index}
          key={`card-${index.toString()}`}
          handleDeleteImg={handleDeleteImg}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
