import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper } from '~/components/Popper';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [historyMenu, setHistoryMenu] = useState([{ data: items }]);
    const currentMenu = historyMenu[historyMenu.length - 1];
    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistoryMenu((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            trigger="click"
            render={(attrs) => (
                <Wrapper className={cx('content')} tabIndex="-1" {...attrs}>
                    {historyMenu.length > 1 && (
                        <Header
                            title={currentMenu.title}
                            onBack={() => {
                                setHistoryMenu((prev) => prev.slice(0, prev.length - 1));
                            }}
                        />
                    )}
                    {renderItem()}
                </Wrapper>
            )}
            placement="bottom-end"
            onHide={() => setHistoryMenu((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
