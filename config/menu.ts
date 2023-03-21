import { NavItemWithMeta } from '../docs/types/NavItems';

export const navItems: NavItemWithMeta[] = [
  {
    text: 'Home',
    link: '/',
    meta: {
      shouldShowInNavbar: true,
      shouldShowInSidebar: false,
    },
  },
  {
    text: '翻译规范',
    meta: {
      shouldShowInNavbar: true,
      shouldShowInSidebar: true,
    },
    collapsed: false,
    items: [
      {
        text: '资讯站人名、地名翻译规范',
        link: '/guidelines/translation/character-names-and-locations',
      },
      {
        text: '资讯站游戏内专有名词翻译规范',
        link: '/guidelines/translation/ingame-terms',
      },
    ],
  },
  // {
  //   text: '发布规范',
  //   meta: {
  //     shouldShowInNavbar: true,
  //     shouldShowInSidebar: true,
  //   },
  //   collapsed: false,
  //   items: [
  //     {
  //       text: 'PV技能标准模板',
  //       link: '/guidelines/publication/pv-skills',
  //     },
  //   ],
  // },
  {
    text: '已有名词表',
    meta: {
      shouldShowInNavbar: true,
      shouldShowInSidebar: true,
    },
    collapsed: false,
    items: [
      {
        text: '人物姓名、武器及技能一览',
        link: '/terms/characters',
      },
      {
        text: '地名、学校名及社团名一览',
        link: '/terms/places-and-circles',
      },
      {
        text: '游戏内其他名词一览',
        link: '/terms/others',
      },
      {
        text: '往期活动、卡池一览',
        link: '/terms/events-and-gacha',
      },
      {
        text: '剧情章节名一览',
        link: '/terms/chapters',
      },
    ],
  },
  {
    text: '词典',
    meta: {
      shouldShowInNavbar: false,
      shouldShowInSidebar: true,
    },
    collapsed: false,
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
  {
    text: '常用工具',
    meta: {
      shouldShowInNavbar: true,
      shouldShowInSidebar: true,
    },
    collapsed: false,
    items: [
      {
        text: 'WantWords 反向词典',
        link: 'https://wantwords.net/',
      },
      {
        text: '模板烤推机',
        link: '/tools/generate-from-template',
      },
    ],
  },
];
