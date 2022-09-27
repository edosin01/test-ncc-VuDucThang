import styles from './Navbar.module.css'
import clsx from 'clsx'

function Navbar() {
    const classLi = clsx(styles.liItem);
    return (
        <div className={clsx(styles.navbar)}>
            <ul className={clsx(styles.ulItem)}>
                <li className={clsx(styles.liItem, styles.homeItem)}><a href="#">Home</a></li>
                <li className={classLi}><a href="#">Services</a></li>
                <li className={classLi}><a href="#">News</a></li>
                <li className={classLi}><a href="#">Block</a></li>
                <li className={classLi}><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;