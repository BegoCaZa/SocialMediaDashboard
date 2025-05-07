import styles from './socialsDashboard.module.css';
import SocialMediaStats from '../socialMediaStats/SocialMediaStats';
import { v4 } from 'uuid';
import { SOCIAL_MEDIA_INFO } from '../constants/socialmedia-info';

const SocialsDashboard = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Social Media Dashboard</h1>
        <p className={styles.subtitle}>Total Followers: 23,004</p>
      </div>
      <div>
        {SOCIAL_MEDIA_INFO.map(item => (
          <SocialMediaStats key={v4()} {...item} />
        ))}
      </div>
    </>
  );
};

export default SocialsDashboard;
