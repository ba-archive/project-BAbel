import Theme from 'vitepress/theme';
import './custom_style.css';
import { h } from 'vue';

// @ts-ignore
import RegisterSW from './components/RegisterSW.vue';

export default {
  ...Theme,
  Layout() {
    try {
      if ('development' === import.meta.env.MODE) {
        return h(Theme.Layout);
      }
    } catch (e) {
      console.log(e);
    }
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(RegisterSW),
    });
  },
};
