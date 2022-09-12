import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    BrowseChannelIcon,
    ExploreActiveIcon,
    ExploreIcon,
    FeedbackIcon,
    FlagActiveIcon,
    FlagIcon,
    HelpIcon,
    HistoryActiveIcon,
    HistoryIcon,
    HomeActiveIcon,
    HomeIcon,
    LibraryActiveIcon,
    LibraryIcon,
    SettingIcon,
    ShortsActiveIcon,
    ShortsIcon,
    SubscriptionsActiveIcon,
    SubscriptionsIcon,
    UserIcon,
    YouTubeKidsIcon,
    YouTubeMusicIcon,
    YouTubeTvIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const EXPLORE_ITEMS = [
    {
        image: images.musicIconImage,
        title: 'Music',
        to: '/',
    },
    {
        image: images.sportIconImage,
        title: 'Sports',
        to: '/',
    },
    {
        image: images.gamingIconImage,
        title: 'Gaming',
        to: '/',
    },
    {
        image: images.newsIconImage,
        title: 'News',
        to: '/',
    },
    {
        image: images.liveIconImage,
        title: 'Live',
        to: '/',
    },
    {
        image: images._360videoIconImage,
        title: '360\u00B0 Video',
        to: '/',
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <div className={cx('section')}>
                    <MenuItem
                        to={config.routes.home}
                        title="Home"
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.explore}
                        title="Explore"
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.shorts}
                        title="Shorts"
                        icon={<ShortsIcon />}
                        activeIcon={<ShortsActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.subscriptions}
                        title="Subscriptions"
                        icon={<SubscriptionsIcon />}
                        activeIcon={<SubscriptionsActiveIcon />}
                    />
                </div>
                <div className={cx('section')}>
                    <MenuItem
                        to={config.routes.library}
                        title="Library"
                        icon={<LibraryIcon />}
                        activeIcon={<LibraryActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.history}
                        title="History"
                        icon={<HistoryIcon />}
                        activeIcon={<HistoryActiveIcon />}
                    />
                </div>
                <div className={cx('section')}>
                    <div className={cx('guide-section')}>
                        <p className={cx('text')}>Sign in to like videos, comment, and subscribe.</p>
                        <Button leftIcon={<UserIcon />} signInBtn>
                            SIGN IN
                        </Button>
                    </div>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('section-title')}>EXPLORE</h4>
                    {EXPLORE_ITEMS.map((item, index) => (
                        <div key={index} className={cx('section-item')} title={item.title}>
                            <Button leftIconImage={item.image} to={item.to} title={item.title}>
                                <span className={cx('section-item-title')}>{item.title}</span>
                            </Button>
                        </div>
                    ))}
                </div>
                <div className={cx('section')}>
                    <MenuItem
                        to={config.routes.browseChannels}
                        title="Browse channels"
                        icon={<BrowseChannelIcon />}
                        activeIcon={<BrowseChannelIcon />}
                    />
                </div>
                <div className={cx('section')}>
                    <h3 className={cx('section-title')}>MORE FROM YOUTUBE</h3>
                    <MenuItem
                        to={config.routes.ytbMusic}
                        title="YouTube Music"
                        icon={<YouTubeMusicIcon />}
                        activeIcon={<YouTubeMusicIcon />}
                    />
                    <MenuItem
                        to={config.routes.ytbKids}
                        title="YouTube Kids"
                        icon={<YouTubeKidsIcon />}
                        activeIcon={<YouTubeKidsIcon />}
                    />
                    <MenuItem
                        to={config.routes.ytbTv}
                        title="YouTube TV"
                        icon={<YouTubeTvIcon />}
                        activeIcon={<YouTubeTvIcon />}
                    />
                </div>
                <div className={cx('section')}>
                    <MenuItem
                        to={config.routes.settings}
                        title="Settings"
                        icon={<SettingIcon />}
                        activeIcon={<SettingIcon />}
                    />
                    <MenuItem
                        to={config.routes.report}
                        title="Report history"
                        icon={<FlagIcon />}
                        activeIcon={<FlagActiveIcon />}
                    />
                    <MenuItem to={config.routes.help} title="Help" icon={<HelpIcon />} activeIcon={<HelpIcon />} />
                    <MenuItem
                        to={config.routes.feedback}
                        title="Send feedback"
                        icon={<FeedbackIcon />}
                        activeIcon={<FeedbackIcon />}
                    />
                </div>
                <div className={cx('section')}>
                    <div className={cx('footer-section')}>
                        <div className={cx('guide-links-primary')}>
                            <Link to="/about/" className={cx('footer-link')}>
                                About
                            </Link>
                            <Link to="/about/press/" className={cx('footer-link')}>
                                Press
                            </Link>
                            <Link to="/about/copyright" className={cx('footer-link')}>
                                Copyright
                            </Link>
                            <Link to="/contact_us" className={cx('footer-link')}>
                                Contact us
                            </Link>
                            <Link to="/creators" className={cx('footer-link')}>
                                Creators
                            </Link>
                            <Link to="/ads" className={cx('footer-link')}>
                                Advertise
                            </Link>
                            <Link to="/developers" className={cx('footer-link')}>
                                Developers
                            </Link>
                        </div>
                        <div className={cx('guide-links-secondary')}>
                            <Link to="/terms" className={cx('footer-link')}>
                                Terms
                            </Link>
                            <Link to="/privacy" className={cx('footer-link')}>
                                Privacy
                            </Link>
                            <Link to="/policies" className={cx('footer-link')}>
                                Policy & Safety
                            </Link>
                            <Link to="/how_youtube_works" className={cx('footer-link')}>
                                How YouTube works
                            </Link>
                            <Link to="/new" className={cx('footer-link')}>
                                Test new features
                            </Link>
                        </div>
                        <span className={cx('copyright')}>© 2022 Google LLC</span>
                    </div>
                </div>
            </Menu>
        </div>
    );
}

export default Sidebar;
