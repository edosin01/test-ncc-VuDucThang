import clsx from "clsx";
import styles from './Content.module.css';
import Heading from './Heading';
import Description from './Description';
import MainContent from './MainContent';
import Footer from './Footer';

function Content() {
    return (
        <div className={clsx(styles.content)}>
            <Heading />
            <Description />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Content;