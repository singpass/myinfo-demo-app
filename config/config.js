let APP_CONFIG = {
  'DEMO_APP_CLIENT_ID': 'STG2-MYINFO-DEMO-APP',
  'DEMO_APP_CLIENT_SECRET': 'outzuu7n3bxzcvdyrv98y3picshnkydf1r4ybwas',
  'DEMO_APP_CLIENT_SECURE_CERT': './cert/your-sample-app-certificate.p12',
  'DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE': 'DemoApp',
  'DEMO_APP_CALLBACK_URL': 'http://localhost:3001/callback',
  'DEMO_APP_PURPOSE': 'demonstrating MyInfo APIs',
  'DEMO_APP_SCOPES': 'uinfin,name,sex,race,nationality,dob,email,mobileno,regadd,housingtype,hdbtype,marital,edulevel,noa-basic,ownerprivate,cpfcontributions,cpfbalances',
  'MYINFO_API_AUTHORISE': {
    'SANDBOX': 'https://sandbox.api.myinfo.gov.sg/com/v3/authorise',
    'TEST': 'https://test.api.myinfo.gov.sg/com/v3/authorise'
  },
  'MYINFO_API_TOKEN': {
    'SANDBOX': 'https://sandbox.api.myinfo.gov.sg/com/v3/token',
    'TEST': 'https://test.api.myinfo.gov.sg/com/v3/token'
  },
  'MYINFO_API_PERSON': {
    'SANDBOX': 'https://sandbox.api.myinfo.gov.sg/com/v3/person',
    'TEST': 'https://test.api.myinfo.gov.sg/com/v3/person'
  }
}


//Set following configuration for MyInfo library to call token and person API
// IMPORTANT: DO NOT rename the JSON Keys
let MYINFO_CONNECTOR_CONFIG = {
  'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': './cert/staging-myinfo-public-cert.pem',

  'CLIENT_ID': APP_CONFIG.DEMO_APP_CLIENT_ID, //Client id provided during onboarding
  'CLIENT_SECRET': APP_CONFIG.DEMO_APP_CLIENT_SECRET, //Client secret provided during onboarding
  'CLIENT_SECURE_CERT': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT, //Alias of the application private key in P12 format.
  'CLIENT_SECURE_CERT_PASSPHRASE': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE, //Password of the private key.
  'REDIRECT_URL': APP_CONFIG.DEMO_APP_CALLBACK_URL, //Redirect URL for web application
  'ATTRIBUTES': APP_CONFIG.DEMO_APP_SCOPES,


  /* 
  Without Encryption and Signing 
  Note: The sandbox environment is used for your testing when developing your prototype
  */
  // 'ENVIRONMENT': 'SANDBOX',
  // 'TOKEN_URL': 'https://sandbox.api.myinfo.gov.sg/com/v3/token',
  // 'PERSON_URL': 'https://sandbox.api.myinfo.gov.sg/com/v3/person',


  /* 
  With Encryption and Signing 
  Note: The test environment is used for testing your application with the full security measures required in production
  */
  'ENVIRONMENT': 'TEST',
  'TOKEN_URL': 'https://test.api.myinfo.gov.sg/com/v3/token',
  'PERSON_URL': 'https://test.api.myinfo.gov.sg/com/v3/person',


  //Proxy parameters (OPTIONAL) 
  'USE_PROXY': 'N', //Indicate whether proxy url is used. i.e. Y or N
  'PROXY_TOKEN_URL': '', //Configure your proxy url here, if any.
  'PROXY_PERSON_URL': '', //Configure your proxy url here, if any.

  /*
  Debug level for library logging. i.e 'error, info, debug' leave empty to turn off logs (OPTIONAL)
   * error - Log out all the errors returned from the library
   * info - log urls called, authorization headers and errors from the library
   * debug - Full logs from the library, i.e (errors, urls, authorization headers, API response) 
  
  NOTE: debug mode should never be turned on in production
  */
  'DEBUG_LEVEL': 'info'
}

module.exports.APP_CONFIG = APP_CONFIG;
module.exports.MYINFO_CONNECTOR_CONFIG = MYINFO_CONNECTOR_CONFIG;