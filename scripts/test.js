import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // 10 usuários virtuais simultâneos
  duration: '30s',
};

export default function () {
  const res = http.get('http://127.0.0.1:60013/health'); // ou outro endpoint válido
  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta tem conteúdo': (r) => r.body.length > 0,
  });

  sleep(1); // simula o usuário “pensando”
}
