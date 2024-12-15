const baseEnvUrl = {
    local: { home: 'http://localhost:3000' }, // Replace with your local environment URL
    ci: { 
      prefix: 'https://ci-myapp-', 
      suffix: '.example.com', 
    },
    staging: { home: 'https://staging.example.com' }, // Replace with your staging environment URL
  };
  
  export default baseEnvUrl;
  