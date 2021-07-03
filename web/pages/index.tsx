import Image from 'next/image';
import cafeHeroShot from '../public/cafeHeroImage.jpeg';
import styles from './index.module.scss';

export default function Landing() {
  console.log("render");
  return (<>
    <div className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className="main-headline">原來最棒的咖啡聽就在身邊！</h1> {/* I18N_CAFE_LANDING_HEADER */}
        <p className="sub-headline">
          悠閑的午後，靜謐的夜晚，無論是與自己獨處，還是三五好友相聚，沒什麼比來到一間舒適且充滿特色的咖啡廳更適合的了。讓我們一同來探索這些隱身於巷弄中的神秘空間，享受單純而愜意的美好時光。{/* I18N_CAFE_LANDING_DESCRIPTION */}
        </p>
      </div>
      <div className={styles.heroImageBlock}>
        <Image className={styles.heroImage} src={cafeHeroShot} />
      </div>
    </div>
  </>);
};
