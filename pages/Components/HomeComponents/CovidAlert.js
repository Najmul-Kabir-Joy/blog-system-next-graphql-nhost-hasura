import Image from 'next/image';
import styles from '../../../styles/covid.module.css';
const CovidAlert = () => {
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10 py-5 justify-items-center'>
                <div className={styles.covidAlertGif}>
                    <Image src="https://ansarshome.files.wordpress.com/2021/09/d3464a4351fdf340ccb6bb37c281381a.gif" alt='covidalert' width='900' height='700' />
                </div>
                <div className={styles.covidAlertText}>
                    <div>
                        <h2 className='text-3xl font-bold'>COVID 19</h2>
                        <h5 className='text-xl font-semibold mb-2'>STAY HOME STAY SAFE</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo sunt expedita necessitatibus, atque ea eligendi iure error impedit voluptas deleniti vel obcaecati at dicta? Repellendus quis doloribus, quam quo enim dicta exercitationem est esse distinctio ut molestiae possimus autem maiores iusto architecto, reiciendis totam voluptatibus id reprehenderit velit. Sequi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CovidAlert;