import { useEffect, useState } from 'react';
import Content from '~/layouts/components/Content';
import { ContentItem } from '~/components/ContentItem';

// const cx = classNames.bind(styles);

function Home() {
    const [contentItem, setContentItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then((res) => res.json())
            .then((res) => setContentItem(res));
    }, []);

    return (
        <Content>
            {contentItem.map((item) => (
                <ContentItem data={item} key={item.id} />
            ))}
        </Content>
    );
}

export default Home;
