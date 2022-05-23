module.exports = {
  ci: {
    collect: {
      url: ['https://lookiero.fr/'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'categories:performance': 'warn',
        'categories:accessibility': 'off',
        'categories:best-practices': 'off',
        'categories:seo': 'off',
        'categories:pwa': 'off',
        'categories:sensors': 'off',
        'categories:content-blocking': 'off',
        'button-name': 'off',
        'charset': 'off',
        'image-alt': 'off',
        'inspector-issues': 'off',
        'no-unload-listeners': 'off',
        'non-composited-animations': 'off',
        'offscreen-images': 'off',
        'unsized-images': 'off',
        'unused-javascript': 'off',
        'uses-optimized-images': 'off',
        'uses-rel-preconnect': 'off',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  },
};
