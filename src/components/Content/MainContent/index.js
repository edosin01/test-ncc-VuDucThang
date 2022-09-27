import clsx from 'clsx';
import styles from './MainContent.module.css';
import img1 from '../../../assets/images/css-icon1.png';
import img2 from '../../../assets/images/html-icon1.png';
import img3 from '../../../assets/images/url-icon1.png';

function MainContent() {
    return (
        <div className={clsx(styles.mainContent, "container")}>
            <div className={clsx(styles.contentItem)}>
                <p className={clsx(styles.title)}>Lorem ipsum dolor sit amet</p>
                <div className={clsx(styles.content)}>
                    <img src={img1}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum congue.
                        Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies.
                        Donec feugiat velit nulla, vel sodales est ullamcorper id.
                        Aenean consequat condimentum velit ut tempor. Nam porta massa
                        in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
            </div>
            <div className={clsx(styles.contentItem, styles.centerItem)}>
                <p className={clsx(styles.title)}>Lorem ipsum dolor sit amet</p>
                <div className={clsx(styles.content)}>
                    <img src={img2}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum congue.
                        Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies.
                        Donec feugiat velit nulla, vel sodales est ullamcorper id.
                        Aenean consequat condimentum velit ut tempor. Nam porta massa
                        in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
            </div>
            <div className={clsx(styles.contentItem)}>
                <p className={clsx(styles.title)}>Lorem ipsum dolor sit amet</p>
                <div className={clsx(styles.content)}>
                    <img src={img3}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non dui sodales, faucibus libero ut, posuere felis.
                        Donec imperdiet suscipit accumsan. Aenean consequat condimentum
                        velit ut tempor. Nam porta massa in metus bibendum congue.
                        Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies.
                        Donec feugiat velit nulla, vel sodales est ullamcorper id.
                        Aenean consequat condimentum velit ut tempor. Nam porta massa
                        in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainContent;