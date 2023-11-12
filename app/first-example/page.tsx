import React from 'react';
import styles from './page.module.css';

const FirstExample = () => {
	return (
		<div className={styles.alert}>
			<div className={styles.alertLogoWrap}>
				<img
					className={styles.alertLogo}
					src='/assets/img/warning.svg'
					alt='alert'
				/>
			</div>
			<div className={styles.alertBody}>
				<h4 className={styles.alertTitle}>Are You Sure?</h4>
				<p className={styles.alertMessage}>You are about to delete a post</p>
			</div>
		</div>
	);
};

export default FirstExample;
