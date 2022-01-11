import Image from 'next/image';
import styles from '../../../styles/Motivation.module.css';
import img from '../../../public/Images/qutoes.png';
import gif from '../../../public/Images/gif1.gif';
const Motivation = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center'>
                <div className={styles.quoteContainer}>
                    <div className={styles.quoteContent}>
                        <Image src={img} alt="" width='800' height='500' className={styles.image} />
                        <p>Thats  the thing about reading. They let you travel without moving your feet. <span> - Jhumpa Laheri</span></p>
                    </div>
                </div>
                <div>
                    <Image src="https://institute.careerguide.com/wp-content/uploads/2020/09/1576518436-1576518436_goodreads_misc.gif" alt="" width='800' height='500' />
                </div>

            </div>
        </section>
    );
};

export default Motivation;