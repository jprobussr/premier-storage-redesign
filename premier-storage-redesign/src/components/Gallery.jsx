import './Gallery.css';
import buildingImage from '../assets/stg-gallery-1.jpg';
import galleryTwo from '../assets/stg-image-2.jpg';
import galleryThree from '../assets/stg-image-3.jpg';
import galleryFour from '../assets/stg-image-4.jpg';
import galleryFive from '../assets/stg-image-5.jpg';
import gallerySix from '../assets/stg-image-6.jpg';

const galleryImages = [
  {
    image: buildingImage,
    alt: 'Premier Storage building exterior',
  },
  {
    image: galleryTwo,
    alt: 'Friendly Customer Service',
  },
  {
    image: galleryThree,
    alt: 'Storage unit interior hallway',
  },
  {
    image: galleryFour,
    alt: 'Moving truck rental area',
  },
  {
    image: galleryFive,
    alt: 'Secure storage unit access',
  },
  {
    image: gallerySix,
    alt: 'Interior climate controlled units',
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
