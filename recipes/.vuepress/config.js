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
      //'/chicken/': getSidebar('./recipes/chicken/'),
      '/chicken/': getSidebar('./recipes/chicken/'),
      '/pork/': getSidebar('./recipes/pork/'),    
      '/sauces_dips_rubs/dips/': getSidebar('./recipes/sauces_dips_rubs/dips/'),
      '/sauces_dips_rubs/rubs/': getSidebar('./recipes/sauces_dips_rubs/rubs/'),

      
      '/sauces_dips_rubs/': [
        '',
        '/sauces_dips_rubs/dips/',
        '/sauces_dips_rubs/rubs/'
      ],

      // fallback
      '/':[
        '',
        '/chicken/',
        '/pork/',
        '/sauces_dips_rubs/'
      ],

    },
  }
}