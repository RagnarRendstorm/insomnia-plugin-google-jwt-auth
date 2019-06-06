const {
  google
} = require('googleapis');

module.exports = async function(context) {
  const googleJwtEnv = context.request.getEnvironmentVariable('google-jwt-auth');
  if (googleJwtEnv) {
    try {
      const jwt = new google.auth.JWT(
        googleJwtEnv.client_email,
        null,
        googleJwtEnv.private_key,
        googleJwtEnv.scopes)
      const {
        access_token
      } = await jwt.authorize();
      context.request.setHeader('Authorization', 'Bearer ' + access_token);
    } catch (err) {
      alert(err.message);
    }
  }
};