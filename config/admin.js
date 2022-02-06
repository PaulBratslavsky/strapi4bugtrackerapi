module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b8ab8e54eaeed86359dfe9427e867b64'),
  },
});
