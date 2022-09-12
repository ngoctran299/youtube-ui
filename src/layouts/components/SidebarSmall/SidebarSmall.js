import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import {
    ExploreActiveIcon,
    ExploreIcon,
    HistoryActiveIcon,
    HistoryIcon,
    HomeActiveIcon,
    HomeIcon,
    LibraryActiveIcon,
    LibraryIcon,
    ShortsActiveIcon,
    ShortsIcon,
    SubscriptionsActiveIcon,
    SubscriptionsIcon,
} from '~/components/Icons';
import config from '~/config';
import styles from './SidebarSmall.module.scss';

const cx = classNames.bind(styles);

const SIDEBAR_SMALL_ITEMS = [
    {
        icon: <HomeIcon />,
        title: 'Home',
        route: config.routes.home,
        activeIcon: <HomeActiveIcon />,
    },
    {
        icon: <ExploreIcon />,
        title: 'Explore',
        route: config.routes.explore,
        activeIcon: <ExploreActiveIcon />,
    },
    {
        icon: <ShortsIcon />,
        title: 'Shorts',
        route: config.routes.shorts,
        activeIcon: <ShortsActiveIcon />,
    },
    {
        icon: <SubscriptionsIcon />,
        title: 'Subscriptions',
        route: config.routes.subscriptions,
        activeIcon: <SubscriptionsActiveIcon />,
    },
    {
        icon: <LibraryIcon />,
        title: 'Library',
        route: config.routes.library,
        activeIcon: <LibraryActiveIcon />,
    },
    {
        icon: <HistoryIcon />,
        title: 'History',
        route: config.routes.history,
        activeIcon: <HistoryActiveIcon />,
    },
];

function SidebarSmall() {
    return (
        <div className={cx('wrapper')}>
            {SIDEBAR_SMALL_ITEMS.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.route}
                    className={(nav) => cx('item', { active: nav.isActive })}
                    title={item.title}
                >
                    <span className={cx('icons')}>
                        <span className={cx('unactive')}>{item.icon}</span>
                        <span className={cx('active')}>{item.activeIcon}</span>
                    </span>
                    <span className={cx('title')}>{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default SidebarSmall;
