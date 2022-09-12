import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={classes} onClick={onClick}>
            <Button leftIcon={data.icon}>
                <span className={cx('menu-title')}>{data.title}</span>
            </Button>
            <span>{data.nextIcon}</span>
        </div>
    );
}

export default MenuItem;
