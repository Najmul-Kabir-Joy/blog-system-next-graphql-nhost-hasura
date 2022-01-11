import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/banner.module.css';
const Banner = () => {
    return (
        <section className='home_banner'>
            <div className={styles.bannerContiner}>
                <div className={styles.background_image}>
                    <Image
                        src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                        alt=""
                        className={styles.image}
                        layout='fill'
                    />
                </div>
                <div className={styles.banner_elements}>
                    <h1>WELCOME!</h1>
                    <p>
                        Reading Gives Us Some Place to Go When We Have to Stay Where We Are!
                    </p>
                    <Link href='/blogs'><button className='btn glass'>START EXPLORING</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;