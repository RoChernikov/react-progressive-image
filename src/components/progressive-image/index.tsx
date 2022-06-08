import React, {
  FC,
  useState,
  useEffect,
  DetailedHTMLProps,
  ImgHTMLAttributes
} from 'react';
import Loader from './components/loader';
import styles from './progressive-image.module.css';

interface IProgressiveImage {
  src: string;
  placeholderSrc: string;
  width: string;
}

type TImgProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ProgressiveImage: FC<IProgressiveImage & TImgProps> = ({
  src,
  placeholderSrc,
  width,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholderSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImgSrc(src);
  }, [src]);

  return (
    <div className={styles.imgWrapper} style={{maxWidth: width}}>
      {imgSrc === placeholderSrc && <Loader />}
      <img
        className={`${styles.img} ${
          imgSrc === placeholderSrc ? styles.onLoad : styles.loaded
        }`}
        src={imgSrc}
        alt={props.alt || ''}
        {...props}
      />
    </div>
  );
};

export default ProgressiveImage;
