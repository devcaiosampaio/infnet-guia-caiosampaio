import { NextResponse } from 'next/server';
import client from 'prom-client';

// Cria um registro padrão para Prometheus
const register = new client.Registry();
client.collectDefaultMetrics({ register });

export async function GET() {
  const metrics = await register.metrics();
  return new Response(metrics, {
    status: 200,
    headers: { 'Content-Type': register.contentType },
  });
}