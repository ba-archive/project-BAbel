import { DefaultTheme, defineConfig } from 'vitepress';
import { navItems } from '../../config/menu';
import { withPwa } from '@vite-pwa/vitepress';

function getMenuItems(
  itemType: 'navbar' | 'sidebar' = 'navbar'
): DefaultTheme.NavItem[] | DefaultTheme.Sidebar {
  return navItems.filter(
    item =>
      item.meta[`shouldShowIn${itemType[0].toUpperCase()}${itemType.slice(1)}`]
  );
}

export default withPwa(
  defineConfig({
    lang: 'en-US',
    title: '碧蓝档案资讯站',
    description: '翻译规范',

    lastUpdated: true,
    cleanUrls: true,

    head: [['meta', { name: 'theme-color', content: '#3f88f2' }]],

    markdown: {
      headers: {
        level: [0, 0],
      },
    },

    themeConfig: {
      nav: getMenuItems('navbar') as DefaultTheme.NavItem[],
      sidebar: getMenuItems('sidebar') as DefaultTheme.Sidebar,
      footer: {
        message:
          '本站与 <a href="https://www.yostar.co.jp/" target="_blank">Yostar</a>、<a href="https://www.nexon.com/" target="_blank">Nexon</a> 以及 <a href="https://www.nexon.com/" target="_blank">Nexon Games</a> 没有关联。<br>本数据库中使用的所有游戏作品、信息和素材均为各自作者的财产和版权。',
        copyright:
          'This site is not affiliated with <a href="https://www.yostar.co.jp/" target="_blank">Yostar</a>, <a href="https://www.nexon.com/" target="_blank">Nexon</a> and <a href="https://www.nexon.com/" target="_blank">Nexon Games</a>.<br>All game artwork, information and assets used in this database are the property and copyright of the respective authors.',
      },
    },

    pwa: {
      selfDestroying: true,
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: /(.*?)\.(js|css|json|md)$/i,
      //       handler: 'StaleWhileRevalidate',
      //       options: {
      //         cacheName: 'asset-cache',
      //       },
      //     },
      //   ],
      // },
    },
  })
);
