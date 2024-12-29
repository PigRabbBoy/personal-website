import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';
import type { IconifyJSON } from '@iconify/types';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: async () => {
          const data = await import('@iconify-json/logos/icons.json');
          return data.default as IconifyJSON;
        },
        uil: async () => {
          const data = await import('@iconify-json/uil/icons.json');
          return data.default as IconifyJSON;
        },
      },
    }),
    presetTypography(),
  ],
});
