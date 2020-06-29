/*eslint-env node*/
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonJs = require('@rollup/plugin-commonjs');
const { resolve } = require('path');
const root = process.cwd();

const plugins = [ nodeResolve(), commonJs() ];

const input = resolve(root, 'src', 'index.js');

export default [
  {
    input,
    plugins,
    output: {
      file: resolve(root, 'index.js'),
      format: 'cjs'
    }
  },
  {
    input,
    plugins,
    output: {
      file: resolve(root, 'index.mjs'),
      format: 'es'
    }
  }
];
