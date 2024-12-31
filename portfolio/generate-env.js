const fs = require('fs');

// Retrieve the environment variables from Netlify
const environment = {
  production: true,
  EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID || 'default_service',
  EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || 'template_id',
  PUBLIC_KEY:process.env.PUBLIC_KEY || 'public_key',
  AUTOREPLY_SERVICE_ID:process.env.AUTOREPLY_SERVICE_ID || 'default_service',
  AUTOREPLY_TEMPLATE_ID:process.env.AUTOREPLY_TEMPLATE_ID || 'template_id',
};

// Write the environment file for production or development
const targetPath = './src/environments/environment.prod.ts';  // Change to `environment.ts` if needed
fs.writeFileSync(
  targetPath,
  `export const environment = ${JSON.stringify(environment, null, 2)};`
);
