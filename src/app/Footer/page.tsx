import styles from '@/app/styles/Footer.module.css';
import Image from 'next/image';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h3>Data <span>Quests</span></h3>
                    <p>
                        We deliver top-notch digital marketing strategies and cutting-edge software solutions tailored to your business needs.
                    </p>
                    <div className={styles.payment}>
                        <Image src="/11.png" width={50} height={30} alt="Payment methods icon" />
                    </div>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <ul>
                        <li><a href="#" aria-label="Web Development Service">Web Development</a></li>
                        <li><a href="#" aria-label="Mobile App Development Service">Mobile App Development</a></li>
                        <li><a href="#" aria-label="Digital Marketing Service">Digital Marketing</a></li>
                        <li><a href="#" aria-label="SEO Optimization Service">SEO Optimization</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li><a href="mailto:contact@dataquests.com" aria-label="Contact Us">Contact Us</a></li>
                        <li><a href="#" aria-label="Payment Methods Information">Payment Methods</a></li>
                        <li><a href="#" aria-label="Delivery Information">Delivery</a></li>
                        <li><a href="#" aria-label="Return & Exchanges Policy">Return & Exchanges</a></li>
                    </ul>
                </div>
                <div>
                    <h3>NEWSLETTER</h3>
                    <p>Be the first to know about new software releases, marketing trends, and exclusive promotions!</p>
                    <div className={styles.newsletter}>
                        <input 
                            placeholder="Your email" 
                            type="email" 
                            aria-label="Email for newsletter subscription" 
                        />
                        <button type="submit" aria-label="Subscribe to Newsletter">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={styles['bottom-bar']}>
                <p>
                    Copyright © 2024 All rights reserved | This website is developed by <a href="https://github.com/ArmeenNadeem" target="_blank" rel="noopener noreferrer" aria-label="Visit ArmeenNadeem's GitHub">ArmeenNadeem</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
