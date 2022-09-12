import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import images from '~/assets/images';

import Button from '~/components/Button';
import {
    AddListIcon,
    DislikeIcon,
    EmojiIcon,
    FlagIcon,
    LikedIcon,
    LikeIcon,
    LyricsIcon,
    MenuHorizontalEllipsisIcon,
    ShareIcon,
    SortIcon,
    TickIcon,
} from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import VideoItem from '~/components/VideoItem';
import styles from './VideoPlayer.module.scss';

const cx = classNames.bind(styles);

const SORT_ITEMS = [{ title: 'Top comments' }, { title: 'Newest first' }];
const VIDEO_MORE_ACTIONS_ITEMS = [
    {
        icon: <FlagIcon />,
        title: 'Report',
    },
    {
        icon: <LyricsIcon />,
        title: 'Show transcript',
    },
];

function VideoPlayer() {
    const [data, setData] = useState([]);
    const [videoRender, setVideoRender] = useState({});
    const [listVideo, setListVideo] = useState([]);
    const [likeVideo, setLikeVideo] = useState(false);
    const location = useLocation();

    const currentLocation = location.pathname.slice(1);
    document.addEventListener('touchstart', { passive: true });

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    useEffect(() => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].ytb_link === currentLocation) {
                setVideoRender(data[i]);
                data.splice(i, 1);
                setListVideo(data);
            }
        }
    }, [currentLocation, data]);

    const handleLikeVideo = () => {
        if (likeVideo === false) {
            setLikeVideo(true);
        } else {
            setLikeVideo(false);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('video-play-column')}>
                    <iframe
                        width="100%"
                        height="410px"
                        src={`https://www.youtube.com/embed${location.pathname}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="YouTube Video Player"
                    ></iframe>
                    <div className={cx('video-details')}>
                        <div className={cx('first-section')}>
                            <h1 className={cx('video-title')}>{videoRender.video_title}</h1>
                            <div className={cx('video-time-actions')}>
                                <div className={cx('video-time')}>
                                    <span className={cx('video-views')}>{videoRender.views_count} views</span>
                                    <span className={cx('video-date')}>{videoRender.release_date}</span>
                                </div>
                                <div className={cx('actions')}>
                                    <span className={cx('action-item')}>
                                        <span className={cx('action-icon')} onClick={handleLikeVideo}>
                                            {likeVideo ? <LikeIcon /> : <LikedIcon />}
                                        </span>
                                        <span className={cx('action-text')}>
                                            {videoRender.like_video_count || 'Like'}
                                        </span>
                                    </span>
                                    <Tippy content="I dislike this" placement="bottom" arrow="none">
                                        <span className={cx('action-item')}>
                                            <span className={cx('action-icon')}>
                                                <DislikeIcon />
                                            </span>
                                            <span className={cx('action-text')}>Dislike</span>
                                        </span>
                                    </Tippy>
                                    <Tippy content="Share" placement="bottom" arrow="none">
                                        <span className={cx('action-item')}>
                                            <span className={cx('action-icon')}>
                                                <ShareIcon />
                                            </span>
                                            <span className={cx('action-text')}>Share</span>
                                        </span>
                                    </Tippy>
                                    <Tippy content="Save" placement="bottom" arrow="none">
                                        <span className={cx('action-item')}>
                                            <span className={cx('action-icon')}>
                                                <AddListIcon />
                                            </span>
                                            <span className={cx('action-text')}>Save</span>
                                        </span>
                                    </Tippy>
                                    <span className={cx('action-item')}>
                                        <Menu items={VIDEO_MORE_ACTIONS_ITEMS}>
                                            <span className={cx('action-icon')}>
                                                <MenuHorizontalEllipsisIcon />
                                            </span>
                                        </Menu>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('second-section')}>
                            <div className={cx('video-channel')}>
                                <div className={cx('channel')}>
                                    <img className={cx('channel-avatar')} src={videoRender.account_avatar} alt="" />
                                    <span className={cx('channel-name')}>{videoRender.account_name}</span>
                                    {videoRender.tick && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.4rem" height="1.4rem" />
                                        </span>
                                    )}
                                </div>
                                <Button subscribeBtn>SUBSCRIBE</Button>
                            </div>
                            <span className={cx('video-description')}>{videoRender.video_description}</span>
                        </div>
                    </div>
                    <div className={cx('comment-group')}>
                        <div className={cx('comment-group-title')}>
                            <span className={cx('comment-group-text')}>Comments</span>
                            <Menu items={SORT_ITEMS}>
                                <span className={cx('comment-group-text')}>
                                    <span className={cx('comment-group-icon')}>
                                        <SortIcon />
                                    </span>
                                    SORT BY
                                </span>
                            </Menu>
                        </div>
                        <div className={cx('user-comment-input')}>
                            <img className={cx('user-avatar')} src={images.userDefaultAvatar} alt="" />
                            <div className={cx('input-group')}>
                                <input className={cx('input')} type="text" placeholder="Add a comment..." />
                                <div className={cx('border-when-focus')}></div>
                                <div className={cx('input-actions')}>
                                    <span className={cx('emoji')}>
                                        <EmojiIcon width="2rem" height="2rem" />
                                    </span>
                                    <div className={cx('input-actions-btns')}>
                                        <Button textBtn>CANCEL</Button>
                                        <Button disableBtn>COMMENT</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('video-list-column')}>
                    {listVideo.map((videoItem) => (
                        <VideoItem key={videoItem.id} data={videoItem} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
