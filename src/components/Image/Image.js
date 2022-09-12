import { forwardRef } from 'react';

const Image = forwardRef(({ alt, className, ...props }, ref) => {
    return <img ref={ref} alt={alt} className={className} {...props} />;
});

export default Image;
