import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MenuEllipsisIcon, TickIcon, ListIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

const VIDEO_MENU = [
    {
        icon: <ListIcon />,
        title: 'Add to queue',
    },
];

function VideoItem({ data }) {
    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <Link to={`/${data.ytb_link}`} className={cx('wrapper')}>
            <div className={cx('video-image')}>
                <img className={cx('image')} src={data.video_image} alt="" />
                <span className={cx('video-duration')}>{data.duration}</span>
            </div>
            <div className={cx('video-details')}>
                <h3 className={cx('video-title')}>{data.video_title}</h3>
                <div className={cx('channel')}>
                    <div className={cx('channel-info')}>
                        <h3 className={cx('channel-name')}>{data.account_name}</h3>
                        {JSON.parse(data.tick) && (
                            <span className={cx('tick')}>
                                <TickIcon width="1.4rem" height="1.4rem" />
                            </span>
                        )}
                    </div>
                    <div className={cx('views-time')}>
                        <span className={cx('views')}>{data.sub_views_count}</span>
                        <span className={cx('time')}>{data.release_time}</span>
                    </div>
                </div>
                <Menu items={VIDEO_MENU}>
                    <span className={cx('menu')} onClick={handleClick}>
                        {<MenuEllipsisIcon />}
                    </span>
                </Menu>
            </div>
        </Link>
    );
}

export default VideoItem;
