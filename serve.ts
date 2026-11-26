import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
const root = resolve('game');
createServer((req,res)=>{try{const path=resolve(root,'.'+decodeURIComponent((req.url??'/').split('?')[0]==='/'?'/index.html':(req.url??'/').split('?')[0]));if(!path.startsWith(root+'/')){res.writeHead(403).end();return;}res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript'} as Record<string,string>)[extname(path)]??'application/octet-stream');res.end(readFileSync(path));}catch{res.writeHead(404).end('Not found');}}).listen(8080,'127.0.0.1',()=>console.log('SKYBOUND http://127.0.0.1:8080'));
