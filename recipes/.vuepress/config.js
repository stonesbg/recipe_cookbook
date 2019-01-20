var getSidebar = require('./sidebar');

module.exports = {
  title: 'Recipe Cookbook',
  description: 'List of all my favorite recipes',
  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }],
    sidebar: {
      '/breakfast/': getSidebar('./recipes/breakfast/'),
      '/lunch/': getSidebar('./recipes/lunch/'),
      '/dinner/beef/': getSidebar('./recipes/dinner/beef/'),
      '/dinner/chicken/': getSidebar('./recipes/dinner/chicken/'),
      '/dinner/pasta/': getSidebar('./recipes/dinner/pasta/'),
      '/dinner/pork/': getSidebar('./recipes/dinner/pork/'), 
      '/desert/': getSidebar('./recipes/desert/'),
      '/sauces_dips_rubs/dips/': getSidebar('./recipes/sauces_dips_rubs/dips/'),
      '/sauces_dips_rubs/rubs/': getSidebar('./recipes/sauces_dips_rubs/rubs/'),
      '/sauces_dips_rubs/sauces/': getSidebar('./recipes/sauces_dips_rubs/sauces/'),
      '/sides/': getSidebar('./recipes/sides/'),

      '/dinner/': [
        '',
        '/dinner/beef/',
        '/dinner/chicken/',
        '/dinner/pasta/',
        '/dinner/pork/'
      ],

      '/sauces_dips_rubs/': [
        '',
        '/sauces_dips_rubs/dips/',
        '/sauces_dips_rubs/rubs/',
        '/sauces_dips_rubs/sauces/'
      ],

      // fallback
      '/':[
        '',
        '/breakfast/',
        '/lunch/',
        '/dinner/',
        '/sides/',
        '/desert/',
        '/sauces_dips_rubs/'
      ],
    },
  }
}