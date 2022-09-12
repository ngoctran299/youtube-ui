import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { ClearIcon, SearchIcon, VoiceSearchIcon } from '~/components/Icons';
import SearchRecommendItem from '~/components/SearchRecommendItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchRecommend, setSearchRecommend] = useState([]);
    const [showSearchRecommend, setShowSearchRecommend] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchRecommend([1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideSearchRecommend = () => {
        setShowSearchRecommend(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-wrapper')}>
                {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */}
                <div className={cx('tippy-wrapper')}>
                    <HeadlessTippy
                        visible={showSearchRecommend && searchRecommend.length > 0}
                        interactive="true"
                        render={(attrs) => (
                            <div className={cx('search-recommend')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <SearchRecommendItem />
                                    <SearchRecommendItem />
                                    <SearchRecommendItem />
                                </PopperWrapper>
                            </div>
                        )}
                        placement="bottom-start"
                        onClickOutside={handleHideSearchRecommend}
                    >
                        <div className={cx('input-wrapper')}>
                            <input
                                ref={inputRef}
                                value={searchValue}
                                className={cx('search-input')}
                                placeholder="Search"
                                spellCheck={false}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setShowSearchRecommend(true)}
                            />
                            {!!searchValue && (
                                <button className={cx('clear-btn')} onClick={handleClear}>
                                    <ClearIcon />
                                </button>
                            )}
                        </div>
                    </HeadlessTippy>
                </div>
                <Tippy content="Search" arrow="false">
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </Tippy>
            </div>
            <Tippy content="Search with your voice" arrow="false">
                <button className={cx('voice-search-btn')}>
                    <VoiceSearchIcon />
                </button>
            </Tippy>
        </div>
    );
}

export default Search;
