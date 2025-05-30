import React from "react";
import GalleryCards from "./GalleryCards";
import { galleryData } from "../assets/assets.js";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery py-primary  relative bg-bg">
        <h2 className="main-title uppercase">Gallery</h2>
        <div className="container">
          <div className="grid grid-auto-300 gap-10 ">
            {galleryData.map((gallery) => (
              <GalleryCards key={gallery.id} gallery={gallery} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
