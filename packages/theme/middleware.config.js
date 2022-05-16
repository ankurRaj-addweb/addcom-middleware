module.exports = {
  integrations: {
    addcom: {
      location: '@vue-storefront/addcom-api/server',
      configuration: {
        api: {
          url: 'https://rest.binshops.com' // URL of your e-commerce platform
        }
      }
    }
  }
};
