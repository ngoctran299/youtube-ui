import classNames from 'classnames/bind';

import styles from './HeaderOnly.module.scss';
import Header from '~/layouts/components/Header';
import VideoPlayer from '~/layouts/components/VideoPlayer';
import Sidebar from '~/layouts/components/Sidebar';
import HeaderLogo from '~/layouts/components/Header/HeaderLogo';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        if (showSidebar === false) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header tabListDisplayNone={true} onChangeSidebar={handleShowSidebar} />
            </div>
            <div className={cx('sidebar-group', { showSidebar: showSidebar })}>
                <span className={cx('overlay')} onClick={handleShowSidebar}></span>
                <div className={cx('sidebar')}>
                    <span className={cx('sidebar-header')}>
                        <HeaderLogo onChangeSidebar={handleShowSidebar} />
                    </span>
                    <Sidebar />
                </div>
            </div>
            <VideoPlayer>{children}</VideoPlayer>
        </div>
    );
}

export default HeaderOnly;
