import React from 'react';
import styles from './page.module.css';

const FirstExample = () => {
	return (
		<div className='space-y-6'>
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
			<div className='flex space-x-4 rounded-xl shadow-lg p-6'>
				<img
					className='h-16 w-16'
					src='/assets/img/warning.svg'
					alt='alert'
				/>

				<div>
					<div className='text-xl font-medium text-black'>Are you Sure?</div>
					<p className='text-slate-500'>You are about to delete a post</p>
				</div>
			</div>
		</div>
	);
};

export default FirstExample;
