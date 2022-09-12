import classNames from 'classnames/bind';
import { BackArrowIcon } from '~/components/Icons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header-menu')}>
            <button className={cx('header-icon')} onClick={onBack}>
                <BackArrowIcon />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
