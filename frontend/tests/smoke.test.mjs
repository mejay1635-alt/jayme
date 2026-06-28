import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');

const appSource = await readFile(resolve(root, 'src', 'main.jsx'), 'utf8');
const styleSource = await readFile(resolve(root, 'src', 'styles.css'), 'utf8');
const imageTrailSource = await readFile(resolve(root, 'src', 'components', 'ImageTrail.jsx'), 'utf8');
const ballpitSource = await readFile(resolve(root, 'src', 'components', 'Ballpit.jsx'), 'utf8');
const packageJson = await readFile(resolve(root, 'package.json'), 'utf8');
const viteConfig = await readFile(resolve(root, 'vite.config.js'), 'utf8');

for (const label of ['首页', '成员', '照片', '树洞', '联系']) {
  assert.match(appSource, new RegExp(label));
}

assert.match(appSource, /fetch\('\/api\/members\/'\)/);
assert.match(appSource, /fetch\('\/api\/photos\/'\)/);
assert.match(appSource, /fetch\('\/api\/tree-hole\/'/);
assert.match(appSource, /Ballpit/);
assert.match(appSource, /topbar-ballpit/);
assert.match(appSource, /后台上传，前台用照片轨迹展览/);
assert.match(styleSource, /\.topbar-ballpit/);
assert.match(styleSource, /@keyframes pageIn/);
assert.match(styleSource, /tree-form/);
assert.match(imageTrailSource, /from 'gsap'/);
assert.match(ballpitSource, /from 'three'/);
assert.match(packageJson, /"three"/);
assert.match(viteConfig, /base:\s*'\/static\/frontend\/'/);
