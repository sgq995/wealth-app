import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import cors from '@fastify/cors';
// import formbody from 'fastify-formbody';

import SuperTokens from 'supertokens-node';

import { SuperTokensPlugin } from './supertokens';
import { PrismaPlugin } from './prisma';

const services: FastifyPluginAsync = fp(async (fastify, options) => {
  await fastify.register(cors, {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', ...SuperTokens.getAllCORSHeaders()],
    credentials: true,
  });
  // await fastify.register(formbody);
  await fastify.register(SuperTokensPlugin);
  await fastify.register(PrismaPlugin);
  fastify.log.info(__filename);
});

export default services;
