import { cpSync, mkdirSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { buildDossier } from './vendor/makefun-game.ts';
const root = fileURLToPath(new URL('.', import.meta.url));
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (!existsSync(join(root, 'game/index.html'))) throw new Error('Missing flight game entrypoint');
const pictures = readdirSync(join(root, 'screenshots')).filter(name => /\.(png|jpe?g)$/i.test(name));
if (pictures.length < 3 || pictures.length > 4) throw new Error('SKYBOUND requires three or four real browser screenshots');
mkdirSync(destination, { recursive: true });
for (const folder of ['game', 'screenshots']) cpSync(join(root, folder), join(destination, folder), { recursive: true });
const limits = { text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 }, game_max_files: 993, game_max_bytes: 50331648, game_path_max_bytes: 1000 };
writeFileSync(join(destination, 'dossier.json'), buildDossier(destination, limits));
// Fail early if the submitted app loses its browser entrypoint or the required image count.
// buildDossier has already enforced image byte limits and game package caps above.
