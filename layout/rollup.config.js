import babel from '@rollup/plugin-babel';
import path from 'path';

function rel(p) {
  return path.relative(process.cwd(), path.join(__dirname, p));
}

const pkg = require('./package.json');

export default {
  input: rel('./src/index.js'),
  output: {
    file: rel(pkg.module),
    format: 'es',
    sourcemap: true,
  },
  external(id) {
    return id === 'react' || id.startsWith('@material-ui') || id.startsWith('@babel');
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      configFile: require.resolve('../.babelrc.js'),
    }),
  ],
};
