import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import miniprogram from 'rollup-plugin-miniprogram';

export default {
  input: 'src/entry/index.js',
  output: [
    {
      name: 'mksign',
      file: 'dist/mksign.dev.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      name: 'mksign',
      file: 'dist/mksign.min.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
    {
      name: 'mksign',
      file: 'dist/mksign.miniprogram.js',
      format: 'umd',
      sourcemap: true,
      strict: true,
      noConflict: true,
    },
  ],
  plugins: [
    miniprogram(),
    resolve(),
    commonjs(),
    babel({
      configFile: path.resolve(__dirname, './src/entry/.babelrc'),
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ],
};
