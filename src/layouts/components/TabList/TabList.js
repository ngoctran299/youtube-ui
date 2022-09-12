import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import Button from '~/components/Button';
import { BackIcon, NextIcon } from '~/components/Icons';
import styles from './TabList.module.scss';

const cx = classNames.bind(styles);

const TAB_ITEMS = [
    'All',
    'Music',
    'Youth music',
    'Lo-fi',
    'Gaming',
    'Eurodance',
    'Live',
    'Rhythm & Blues',
    'Golden music',
    'Eating',
    'Martial Arts Movies',
    'Arena of Valor',
    'Humans',
    'Game shows',
    'Indie music',
    'League of Legends',
    'Manga',
    'Tourist destinations',
    'Asian music',
    'Action-adventure games',
    'Recently uploaded',
];

function TabList({ tabListDisplayNone = false }) {
    const tabListRef = useRef();
    const handleNextScroll = () => {
        // tabListRef.current.scrollTo({
        //     right: tabListRef.current.clientWidth,
        //     behavior: 'smooth',
        // });
    };
    return (
        <nav className={cx('wrapper', { tabListDisplayNone: tabListDisplayNone })}>
            <Button className={cx('back-icon')}>
                <Tippy content="Previous" placement="bottom" arrow="false">
                    <span>{<BackIcon />}</span>
                </Tippy>
            </Button>

            <div className={cx('scroll-content')}>
                <div className={cx('tab-list')} ref={tabListRef}>
                    {TAB_ITEMS.map((item, index) => (
                        <Button key={index} className={cx('tab-item')} selectorBtn rounded title={item}>
                            {item}
                        </Button>
                    ))}
                </div>
            </div>

            <Button className={cx('next-icon')} onClick={handleNextScroll()}>
                <Tippy content="Next" placement="bottom" arrow="false">
                    <span>{<NextIcon />}</span>
                </Tippy>
            </Button>
        </nav>
    );
}

export default TabList;
