import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <a href="/home">FastBreak</a>
            </div>

            <div className={styles.navbarMenu}>
                <a className={styles.navbarLink} href="/matches">Matches</a>
                <a className={styles.navbarLink} href="/stats">Stats</a>
                <a className={styles.navbarLink} href="/sign-in">Sign in</a>
            </div>
        </div>
    );
};