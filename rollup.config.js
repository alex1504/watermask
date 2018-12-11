import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import {
    uglify
} from "rollup-plugin-uglify";

export default [{
    input: 'src/watermask.js',
    output: {
        // 输出变量名
        name: 'WaterMask',
        // 输出文件名
        file: pkg.browser,
        format: 'umd'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}];