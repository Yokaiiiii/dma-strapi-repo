export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://2lqsmd5t-3000.inc1.devtunnels.ms',
        'http://localhost:3000',
        'http://192.168.1.92:3000',
        'https://appreciate-hourly-challenging-bathroom.trycloudflare.com',
      ],
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];