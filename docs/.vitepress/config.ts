import { defineConfig } from 'vitepress';
import { algoliaConfig } from './secrets';

function getMenuItems(shouldIncludeHome = false) {
  const navItems = [
    {
      text: '翻译规范',
      items: [
        {
          text: '人名、地名翻译规范',
          link: '/guidelines/translation/character-names-and-locations',
        },
        {
          text: '游戏内专有名词翻译规范',
          link: '/guidelines/translation/ingame-terms',
        },
      ],
    },
    {
      text: '发布规范',
      items: [
        {
          text: 'PV技能标准模板',
          link: '/guidelines/publication/pv-skills',
        },
      ],
    },
    {
      text: '已有名词表',
      items: [
        {
          text: '人物姓名、武器及技能翻译一览',
          link: '/terms/characters',
        },
        {
          text: '往期活动、卡池翻译一览',
          link: '/terms/events-and-gacha',
        },
        {
          text: '地名、学校名及社团名一览',
          link: '/terms/places-and-circles',
        },
        {
          text: '游戏内其他名词一览',
          link: '/terms/others',
        },
      ],
    },
    {
      text: '词典',
      items: [
        {
          text: '常见错翻一览',
          link: '/dict/common-mistakes',
        },
        {
          text: '拟声词、拟态词一览',
          link: '/dict/onomatopoeia',
        },
      ],
    },
  ];

  const menuItems = [];

  if (shouldIncludeHome) {
    menuItems.push({
      text: 'Home',
      link: '/',
    });
  }
  menuItems.push(...navItems);

  return menuItems;
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
    nav: getMenuItems(true),

    sidebar: getMenuItems(),

    algolia: algoliaConfig,
  },
});
