mkdir config
touch config/default.js
module.exports = {
  sapConfig: {
    host: 'your-sap-host',
    port: 'your-sap-port',
    // Add other SAP-specific configuration
  },
  rpa: {
    headless: true,
    // Add other RPA-specific configuration
  }
};
