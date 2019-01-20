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
      '/chicken/': getSidebar('./recipes/chicken/'),
      '/pork/': getSidebar('./recipes/pork/'),    
      '/sauces_dips_rubs/dips/': getSidebar('./recipes/sauces_dips_rubs/dips/'),
      '/sauces_dips_rubs/rubs/': getSidebar('./recipes/sauces_dips_rubs/rubs/'),
      '/sauces_dips_rubs/sauces/': getSidebar('./recipes/sauces_dips_rubs/sauces/'),
      '/desert/': getSidebar('./recipes/desert/'),
      '/dinner/pasta/': getSidebar('./recipes/dinner/pasta/'),
      '/sides/': getSidebar('./recipes/sides/'),

      '/dinner/': [
        '',
        '/dinner/pasta/'
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
        '/chicken/',
        '/pork/',
        '/sauces_dips_rubs/'
      ],
    },
  }
}