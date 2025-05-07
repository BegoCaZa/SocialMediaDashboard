import styles from './socialsDashboard.module.css';

const SocialMediaStats = (
  socialIcon,
  user,
  followers,
  subtitle,
  performanceIcon,
  performanceNumber
) => {
  return (
    <div className={containerClass}>
      <div className={styles.socials}>
        <img src={socialIcon} />
        <span className={styles.userName}>{user}</span>
      </div>
      <div className={styles.followersContainer}>
        <span className={styles.followers}>{followers}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <div className={styles.performanceContainer}>
        <img src={performanceIcon} />
        <span className={styles.performanceNumber}>{performanceNumber}</span>
        <span className={styles.performanceSubtitle}>Today</span>
      </div>
    </div>
  );
};

export default SocialMediaStats;
