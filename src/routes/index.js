import Home from '~/Pages/Home';
import PC from '~/Pages/PC';
import Mobile from '~/Pages/Mobile';
import LOL from '~/Pages/LOL';
import FO4 from '~/Pages/FO4';
import { OtherLayout } from '~/Layout';

export const publicRoutes = [
    { path: '/', components: Home },
    { path: '/pc', components: PC },
    { path: '/mobile', components: Mobile },
    { path: '/lol', components: LOL, layout: OtherLayout },
    { path: '/fo4', components: FO4, layout: OtherLayout },
];

export const privateRoutes = [];
