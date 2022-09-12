import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { ListIcon, MenuEllipsisIcon, ShareIcon, TickIcon } from '~/components/Icons';
import config from '~/config';
import Menu from '~/components/Popper/Menu';
import styles from './ContentItem.module.scss';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

const VIDEO_MENU = [
    {
        icon: <ListIcon />,
        title: 'Add to queue',
    },
    {
        icon: <ShareIcon />,
        title: 'Share',
    },
];

function ContentItem({ data }) {
    let navigate = useNavigate();

    const handleLink = () => {
        navigate(`/${data.ytb_link}`, { replace: true });
    };

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className={cx('wrapper')} onClick={handleLink}>
            <div className={cx('video-img')}>
                <img className={cx('image')} src={data.video_image} alt="" />
                <span className={cx('duration')}>{data.duration}</span>
            </div>
            <div className={cx('details')}>
                <Link to={config.routes.home}>
                    <img
                        className={cx('avatar')}
                        src={`${data.account_avatar}`}
                        alt=""
                        onClick={handleClick}
                        title={data.account_name}
                    />
                </Link>
                <div className={cx('info')}>
                    <h3 className={cx('title')} title={data.video_title}>
                        {data.video_title}
                    </h3>
                    <div className={cx('sub-info')}>
                        <div className={cx('channel-info')} onClick={handleClick}>
                            <Link to={config.routes.home}>
                                <Tippy content={data.account_name} placement="top" arrow="none" offset={[0, 30]}>
                                    <span className={cx('account-name')}>{data.account_name}</span>
                                </Tippy>
                            </Link>
                            {JSON.parse(data.tick) && (
                                <span className={cx('tick-icon')}>{<TickIcon width="1.4rem" height="1.4rem" />}</span>
                            )}
                        </div>
                        <div className={cx('video-info')}>
                            <span className={cx('views')}>{data.sub_views_count}</span>
                            <span className={cx('time')}>{data.release_time}</span>
                        </div>
                    </div>
                </div>
                <Menu items={VIDEO_MENU}>
                    <span className={cx('menu')} onClick={handleClick}>
                        {<MenuEllipsisIcon />}
                    </span>
                </Menu>
            </div>
        </div>
    );
}

export default ContentItem;
