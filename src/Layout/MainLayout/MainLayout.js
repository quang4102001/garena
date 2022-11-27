import ClassNames from 'classnames/bind';

import Header from './Header';
import Footer from './Footer';
import styles from './MainLayout.module.scss';

const cx = ClassNames.bind(styles);

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </>
    );
}

export default MainLayout;
