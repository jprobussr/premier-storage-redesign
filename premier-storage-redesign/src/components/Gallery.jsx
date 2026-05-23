import './Gallery.css';
import buildingImage from '../assets/stg-gallery-1.jpg';

const galleryImages = [
  {
    image: buildingImage,
    alt: 'Premier Storage building exterior',
  },
];

const Gallery = () => {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Gallery</p>
          <h2>See the storage facility and available spaces.</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => {
            return (
              <article className="gallery-card" key={item.alt}>
                <img src={item.image} alt={item.alt} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
