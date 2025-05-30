const GalleryCards = ({ gallery }) => {
  return (
    <div className="card">
      <div className="box bg-white p-4 shadow-custom-2">
        <div className="image group relative overflow-hidden hover:before:animate-flashing">
          <img
            src={gallery.img}
            alt={gallery.alt}
            className="max-w-full transition-transform duration-primary group-hover:rotate-[5deg] group-hover:scale-[1.1]"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
