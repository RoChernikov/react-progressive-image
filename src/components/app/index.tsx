import React, {FC} from 'react';
import styles from './app.module.css';
import ProgressiveImage from '../progressive-image';
import image from '../../assets/images/car.jpeg';
import imagePlaceholder from '../../assets/images/car_sm.jpeg';

const App: FC = () => {
  return (
    <main className={styles.main}>
      <h2>Progressive image</h2>
      <h2>Regular image</h2>
      <ProgressiveImage
        src={image}
        placeholderSrc={imagePlaceholder}
        width="500px"
        alt="Progressive Car"
      />
      <img src={image} alt="Car" style={{width: '100%', maxWidth: 500}} />
      <p className={styles.note}>Note: emulate 3G in DevTools</p>
    </main>
  );
};

export default App;
