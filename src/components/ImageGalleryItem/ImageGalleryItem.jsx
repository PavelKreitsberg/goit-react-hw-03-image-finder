import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onImageClick }, { key }) => {
  return (
    <li key={key} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
        onClick={onImageClick}
      />
    </li>
  );
};
