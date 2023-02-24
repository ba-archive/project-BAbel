import { DefaultTheme, defineConfig } from 'vitepress';
import { algoliaConfig } from '../../config/secrets';
import { navItems } from '../../config/menu';

function getMenuItems(
  itemType: 'navbar' | 'sidebar' = 'navbar'
): DefaultTheme.NavItem[] | DefaultTheme.Sidebar {
  return navItems.filter(
    item =>
      item.meta[`shouldShowIn${itemType[0].toUpperCase()}${itemType.slice(1)}`]
  );
}
export default defineConfig({
  lang: 'en-US',
  title: '碧蓝档案资讯站',
  description: '翻译规范',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3f88f2' }]],
  // @ts-ignore
  plugins: ['@vuepress/active-header-links'],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: getMenuItems('navbar') as DefaultTheme.NavItem[],

    sidebar: getMenuItems('sidebar') as DefaultTheme.Sidebar,

    algolia: algoliaConfig,
  },
});
