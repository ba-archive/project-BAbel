import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
// https://vitejs.dev/config/
import path from 'path';
const pathSrc = path.resolve(__dirname, 'docs');
import { SearchPlugin } from 'vitepress-plugin-search';
import flexSearchIndexOptions from 'flexsearch';

export default defineConfig({
  ssr: { noExternal: ['element-plus'] },
  resolve: {
    alias: {
      '@': pathSrc,
      '@image': path.resolve(__dirname, 'docs/public/image'),
      '@components': path.resolve(__dirname, 'docs/components'),
    },
  },
  plugins: [
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
