import { execSync } from "child_process"
const globby = require("globby");
import { copyFileSync } from "node:fs"
import 'chalk'

console.log('Build dist')
console.log('yarn clean')
execSync('yarn clean')
console.log('yarn re:clean')
execSync('yarn re:clean')
console.log('yarn re:build')
execSync('yarn re:build')
console.log('yarn transform all')
execSync('yarn transform all')
console.log('yarn generate docs')
execSync('yarn generate docs')
console.log('yarn rollup -c rollup.config.js --bundleConfigAsCjs')
execSync('yarn rollup -c rollup.config.js --bundleConfigAsCjs')
const files = await globby('dist/*.js')
const js = files.join(' ')
console.log(`jscodeshift`)
execSync(`node node_modules/.bin/jscodeshift --run-in-band -t tools/javascript-codemods/post/index.ts ${js}`)
console.log('yarn generate tsc')
execSync('yarn generate tsc')
copyFileSync('./src/global.d.ts', './dist/types/global.d.ts')
copyFileSync('./src/types.ts', './dist/types/types.d.ts')
execSync('yarn test run -c')

