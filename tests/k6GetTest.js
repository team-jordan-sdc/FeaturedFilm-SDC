import http from 'k6/http';
import { check, sleep } from 'k6';

const randomizePath = function () {
  return `http://localhost:3002/?id=${Math.floor(Math.random() * 10000000) + 1}`;
};

export const options = {
  stages: [
    { duration: '60s', target: 1 },
    { duration: '10s', target: 10 },
    { duration: '60s', target: 10 },
    { duration: '10s', target: 100 },
    { duration: '60s', target: 100 },
    { duration: '10s', target: 10 },
    { duration: '60s', target: 10 },
    { duration: '10s', target: 1 },
    { duration: '60s', target: 1 },
  ],
};

export default function () {
  const res = http.get(randomizePath());
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction under 200': r => r.timings.duration < 200,
    'transaction under 300': r => r.timings.duration < 300,
    'transaction under 500': r => r.timings.duration < 500,
    'transaction under 800': r => r.timings.duration < 800,
  });
  sleep(0.1);
}