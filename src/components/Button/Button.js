import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    signInBtn = false,
    subscribeBtn = false,
    subscribedBtn = false,
    selectorBtn = false,
    disableBtn = false,
    textBtn = false,
    rounded,
    leftIcon,
    rightIcon,
    leftIconImage,
    title,
    children,
    className,
    onClick,
    passProps,
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        signInBtn,
        subscribeBtn,
        subscribedBtn,
        selectorBtn,
        disableBtn,
        textBtn,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {leftIconImage && <Image className={cx('icon-image')} src={leftIconImage} title={title} />}
            <span className={cx('text')} title={title}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
