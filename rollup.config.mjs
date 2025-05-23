import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

export default [
  // Main build (ESM + CJS)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      visualizer({ filename: 'dist/bundle-analysis.html', open: true }),
    ],
    external: [],
  },
  // Type declarations
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
