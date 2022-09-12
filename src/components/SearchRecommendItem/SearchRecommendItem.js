import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './SearchRecommendItem.module.scss';

const cx = classNames.bind(styles);

function SearchRecommendItem() {
    return (
        <div className={cx('wrapper')}>
            <SearchIcon className={cx('search-icon')} />
            <span className={cx('title')}>Thời sự hôm nay</span>
        </div>
    );
}

export default SearchRecommendItem;
