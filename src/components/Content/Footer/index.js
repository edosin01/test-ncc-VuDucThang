import clsx from "clsx";
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={clsx(styles.footer)}>
            <p>Copyright © 2021</p>
        </div>
    );
}

export default Footer;