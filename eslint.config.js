import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/', 'node_modules/', 'public/', '.astro/'],
  },
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
