import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
  external: ['hash.js', 'lodash'],
  input: 'src/entry/index.js',
  output: [
    {
      name: 'mksign',
      file: 'dist/mksign.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      name: 'mksign',
      file: 'dist/mksign.common.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      file: 'dist/mksign.esm.js',
      format: 'es',
      sourcemap: true,
      strict: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      configFile: path.resolve(__dirname, './src/entry/.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.common\.js$/],
    }),
  ],
};
