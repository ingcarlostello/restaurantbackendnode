module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '89a6f47af35df44711911e0db60f709f'),
    },
  },
});
