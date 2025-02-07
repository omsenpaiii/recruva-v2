module.exports = {
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true
  },
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['app/global.module.css'],
    },
    'postcss-custom-media': {},
  },
};
