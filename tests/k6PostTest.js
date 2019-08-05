import http from 'k6/http';
import { check, sleep } from 'k6';

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
  const headers = { 'Content-Type': 'application/json' };
  const postObj = JSON.stringify({
    film: ['test', 'category1', 'category2', 5, 'rating', 9, 5, 999, 2, 'description', 4, 4, 4, 4, 'movieshoturl', 'moviecoverurl'],
  });
  const res = http.post('http://localhost:3002/api/featured', postObj, { headers });
  check(res, {
    'status was 201': r => r.status === 201,
    'transaction time < 200': r => r.timings.duration < 200,
    'transaction time < 325': r => r.timings.duration < 350,
    'transaction time < 500': r => r.timings.duration < 500,
    'transaction time < 800': r => r.timings.duration < 800,
  });
  sleep(0.1);
}
