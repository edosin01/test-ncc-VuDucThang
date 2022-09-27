import clsx from "clsx";
import styles from './Heading.module.css';
import logo from '../../../assets/images/logoNCC1.png'

function Heading() {
    return (
        <div className={clsx(styles.heading, "container")}>
            <img src={logo} className={clsx(styles.logo)} />
        </div>
    );
}

export default Heading;