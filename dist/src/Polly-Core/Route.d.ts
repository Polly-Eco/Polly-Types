import { FastifyReply, FastifyRequest } from 'fastify';
export interface Route {
    request: FastifyRequest;
    reply: FastifyReply;
}
