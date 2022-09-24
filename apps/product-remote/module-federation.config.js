module.exports = {
  name: 'product-remote',
  exposes: {
    './Routes': 'apps/product-remote/src/app/remote-entry/routes.ts',
  },
};
