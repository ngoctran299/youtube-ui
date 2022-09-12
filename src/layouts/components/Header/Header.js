import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import {
    FeedbackIcon,
    HelpIcon,
    KeyboardIcon,
    LanguageIcon,
    LocationIcon,
    MenuEllipsisIcon,
    MenuGridIcon,
    NextIcon,
    SettingIcon,
    ThemeIcon,
    UserDataIcon,
    UserIcon,
    YouTubeIcon,
    YouTubeKidsIcon,
    YouTubeMusicIcon,
    YouTubeTvIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';
import TabList from '~/layouts/components/TabList';
import HeaderLogo from './HeaderLogo';

const cx = classNames.bind(styles);

const APP_ITEMS = [
    {
        icon: <YouTubeTvIcon />,
        title: 'YouTube TV',
        to: '/',
    },
    {
        icon: <YouTubeMusicIcon />,
        title: 'YouTube Music',
        to: '/',
        separate: true,
    },
    {
        icon: <YouTubeKidsIcon />,
        title: 'YouTube Kids',
        to: '/',
    },
    {
        icon: <YouTubeIcon />,
        title: 'YouTube for Artists',
        to: '/',
        separate: true,
    },
];

const MENU_ITEMS = [
    {
        icon: <UserDataIcon />,
        title: 'Your data in YouTube',
        to: '/',
    },
    {
        icon: <ThemeIcon />,
        title: 'Appearance: Device theme',
        nextIcon: <NextIcon />,
        separate: true,
        children: {
            title: 'Appearance',
            data: [
                {
                    code: 'device',
                    title: 'Use device theme',
                },
                {
                    code: 'dark',
                    title: 'Dark theme',
                },
                {
                    code: 'light',
                    title: 'Light theme',
                },
            ],
        },
    },
    {
        icon: <LanguageIcon />,
        title: 'Language: English',
        nextIcon: <NextIcon />,
        children: {
            title: 'Choose your language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'ko',
                    title: '한국어',
                },
            ],
        },
    },
    {
        icon: <UserDataIcon />,
        title: 'Restricted mode: Off',
        nextIcon: <NextIcon />,
    },
    {
        icon: <LocationIcon />,
        title: 'Location: Vietnam',
        nextIcon: <NextIcon />,
        children: {
            title: 'Choose your location',
            data: [
                {
                    code: 'us',
                    title: 'United States',
                },
                {
                    code: 'vi',
                    title: 'Vietnam',
                },
                {
                    code: 'ko',
                    title: 'South Korea',
                },
            ],
        },
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/',
        separate: true,
    },
    {
        icon: <HelpIcon />,
        title: 'Help',
        to: '/',
        separate: true,
    },
    {
        icon: <FeedbackIcon />,
        title: 'Send feedback',
    },
];

function Header({ tabListDisplayNone, onChangeSidebar, onChangeTablist }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <HeaderLogo onChangeSidebar={onChangeSidebar} />
                </div>
                <div className={cx('header-center')}>
                    <Search />
                </div>
                <div className={cx('header-right')}>
                    <button className={cx('apps')}>
                        <Menu items={APP_ITEMS}>
                            <Tippy content="YouTube apps" arrow="false">
                                <span className={cx('menu-grid-icon')}>
                                    <MenuGridIcon />
                                </span>
                            </Tippy>
                        </Menu>
                    </button>
                    <button className={cx('settings')}>
                        <Menu items={MENU_ITEMS}>
                            <Tippy content="Settings" arrow="false">
                                <span className={cx('menu-icon')}>
                                    <MenuEllipsisIcon />
                                </span>
                            </Tippy>
                        </Menu>
                    </button>
                    <Button signInBtn leftIcon={<UserIcon />}>
                        SIGN IN
                    </Button>
                </div>
            </header>

            <div className={cx('header-tablist', { long: onChangeTablist })}>
                <TabList tabListDisplayNone={tabListDisplayNone} />
            </div>
        </div>
    );
}

export default Header;
