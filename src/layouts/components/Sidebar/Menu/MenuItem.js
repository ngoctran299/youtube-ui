import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, activeIcon, image }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} title={title}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <Image src={image}></Image>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
