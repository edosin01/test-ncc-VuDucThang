import clsx from "clsx";
import styles from './Description.module.css';

function Description() {
    return (
        <div className={clsx(styles.description, "container")}>
            <h3 className={clsx(styles.title , "text-center")}>Lorem ipsum dolor sit asmet?</h3>
            <p className={clsx(styles.des , "text-center")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique 
                consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat 
                hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in 
                mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. 
                Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent 
                et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. 
                Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec 
                vulputate odio neque, sed semper turpis pellentesque a.
            </p>
        </div>
    );
}

export default Description;