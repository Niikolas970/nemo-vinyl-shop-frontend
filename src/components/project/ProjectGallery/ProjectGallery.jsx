import { useState } from 'react';
import { LuImage, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import styles from './ProjectGallery.module.scss';

function ProjectGallery({ images = [], alt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const hasMultiple = images.length > 1;

  const goTo = (index) => {
    setActiveIndex((index + images.length) % images.length);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        {activeImage ? (
          <img src={activeImage} alt={alt} />
        ) : (
          <LuImage size={48} className={styles.placeholderIcon} />
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              className={`${styles.arrow} ${styles.prev}`}
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Imagen anterior"
            >
              <LuChevronLeft size={20} />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Imagen siguiente"
            >
              <LuChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={index === activeIndex ? `${styles.thumbnail} ${styles.active}` : styles.thumbnail}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image} alt={`${alt} ${index + 1}`} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
