import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';

export default [
  {
    input: path.resolve(process.cwd(), 'src/index.tsx'),
    output: [
      {
        file: path.resolve(process.cwd(), 'lib/index.js'),
        format: 'cjs',
      },
      {
        file: path.resolve(process.cwd(), 'lib/index.es.js'),
        format: 'es',
      },
    ],
    external: ['react', '@eo-locale/core'],
    plugins: [
      clear({
        targets: [path.resolve(process.cwd(), 'lib')],
      }),
      typescript(),
      terser({
        toplevel: true,
        compress: {
          passes: 3,
          pure_getters: true,
          unsafe: true,
        },
        output: {
          comments: false,
        },
      }),
    ],
  },
];
