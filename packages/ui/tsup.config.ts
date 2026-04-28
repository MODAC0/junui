import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { defineConfig } from 'tsup';

const USE_CLIENT = '"use client";\n';

const walk = (dir: string, files: string[] = []): string[] => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (/\.(c?js)$/.test(name)) files.push(full);
  }
  return files;
};

const prependUseClient = (file: string) => {
  const src = readFileSync(file, 'utf8');
  if (src.startsWith(USE_CLIENT) || src.startsWith("'use client'")) return;
  writeFileSync(file, USE_CLIENT + src);
};

/**
 * Per-component entry points으로 분리해서 빌드.
 *
 * 이유: Next.js App Router 의 'use client' 디렉티브를 컴포넌트 단위로 보존해야 함.
 * tsup/esbuild/Rollup 이 번들링 과정에서 module-level directive 를 strip 하므로,
 * onSuccess 훅에서 모든 .js / .cjs 산출물에 직접 prepend.
 */
export default defineConfig({
  entry: ['src/index.ts', 'src/components/*/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  outDir: 'dist',
  external: ['react', 'react-dom', '@junui/tokens', '@junui/utils'],
  splitting: false,
  onSuccess: async () => {
    const dist = resolve(__dirname, 'dist');
    for (const f of walk(dist)) prependUseClient(f);
  },
});
