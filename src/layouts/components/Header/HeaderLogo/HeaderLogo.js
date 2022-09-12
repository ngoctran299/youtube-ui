import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import styles from './HeaderLogo.module.scss';
import images from '~/assets/images';
import { MenuBarsIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function HeaderLogo({ onChangeSidebar }) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('menu-btn')} onClick={onChangeSidebar}>
                <MenuBarsIcon />
            </button>
            <div className={cx('logo-group')} title="Youtube Home">
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Youtube" />
                    </Link>
                </div>
                <span className={cx('country-code')}>VN</span>
            </div>
        </div>
    );
}

export default HeaderLogo;
