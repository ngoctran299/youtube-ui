import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './NoTablistLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import SidebarSmall from '~/layouts/components/SidebarSmall';

const cx = classNames.bind(styles);

function NoTablistLayout({ children }) {
    const [showSidebarLarge, setShowSidebarLarge] = useState(true);

    const changeWhenClick = () => {
        if (!showSidebarLarge) {
            return true;
        } else {
            return false;
        }
    };
    const handleChangeSidebar = () => {
        setShowSidebarLarge(changeWhenClick);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header
                    tabListDisplayNone={true}
                    onChangeSidebar={handleChangeSidebar}
                    onChangeTablist={!showSidebarLarge}
                />
            </div>
            {showSidebarLarge ? (
                <div className={cx('sidebar-large')}>
                    <Sidebar />
                </div>
            ) : (
                <div className={cx('sidebar-small')}>
                    <SidebarSmall />
                </div>
            )}
            <div className={cx('content-wrapper', { large: !showSidebarLarge })}>{children}</div>
        </div>
    );
}

export default NoTablistLayout;
