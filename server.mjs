import { resolve, join } from 'path';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import fastifyCompression from 'fastify-compress';
import fs from 'fs';

const app = fastify({ logger: true });
const port = process.env.PORT || 3000;

app.register(fastifyCompression, {
	global: true,
	encodings: ['gzip', 'deflate']
});

app.register(fastifyStatic, {
	root: join(resolve(), 'build')
});

app.get('/', (req, reply) => {
	return reply.sendFile('/index.html');
});

const files = fs.readdirSync('./src/routes/');
const routes = files
	.map((file) => (!file.includes('.') ? file : null))
	.filter((file) => file !== null);

routes.forEach((route) => {
	app.get(`/${route}`, (req, reply) => {
		return reply.sendFile(`${req.url}/index.html`);
	});

	app.get(`/${route}/:parts`, (req, reply) => {
		return reply.sendFile(`${req.url}/index.html`);
	});
});

app.listen(port, '0.0.0.0');
console.log(`Now serving on localhost: ${port}`);
