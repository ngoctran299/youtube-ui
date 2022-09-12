import config from '~/config';
import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Shorts from '~/pages/Shorts';
import Subscriptions from '~/pages/Subscriptions';
import History from '~/pages/History';
import Library from '~/pages/Library';
import BrowseChannels from '~/pages/BrowseChannels';
import ReportHistory from '~/pages/ReportHistory';
import WatchVideo from '~/pages/WatchVideo';
import HeaderOnly from '~/layouts/HeaderOnly';
import NoTablistLayout from '~/layouts/NoTablistLayout';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore, layout: NoTablistLayout },
    { path: config.routes.shorts, component: Shorts, layout: NoTablistLayout },
    { path: config.routes.subscriptions, component: Subscriptions, layout: NoTablistLayout },
    { path: config.routes.library, component: Library, layout: NoTablistLayout },
    { path: config.routes.history, component: History, layout: NoTablistLayout },
    { path: config.routes.browseChannels, component: BrowseChannels, layout: NoTablistLayout },
    { path: config.routes.report, component: ReportHistory, layout: NoTablistLayout },
    { path: config.routes.video, component: WatchVideo, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
