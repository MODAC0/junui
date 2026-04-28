import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outDir: 'dist',
  onSuccess: async () => {
    const distDir = resolve(__dirname, 'dist');
    mkdirSync(distDir, { recursive: true });
    copyFileSync(
      resolve(__dirname, 'src/tokens.css'),
      resolve(distDir, 'tokens.css'),
    );
  },
});
