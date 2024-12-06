import DefaultTheme from 'vitepress/theme';
import yuan from '../../components/yuan.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    app.component('yuan', yuan);
  },
};
