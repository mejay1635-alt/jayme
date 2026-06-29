import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const frontendRoot = resolve(root, 'frontend');
const distRoot = resolve(frontendRoot, 'dist');
const templateTarget = resolve(root, 'app', 'templates', 'frontend', 'index.html');
const staticTarget = resolve(root, 'app', 'static', 'frontend');

await mkdir(dirname(templateTarget), { recursive: true });
await mkdir(staticTarget, { recursive: true });
await cp(resolve(distRoot, 'index.html'), templateTarget);
await rm(resolve(staticTarget, 'assets'), { recursive: true, force: true });
await cp(resolve(distRoot, 'assets'), resolve(staticTarget, 'assets'), { recursive: true });

console.log('Copied React build into Django templates and static files.');
