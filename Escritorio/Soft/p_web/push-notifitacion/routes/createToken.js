const { google } = require("googleapis");
const MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];
const key = require("../service-account.json");

export function getAccessToken() {
  return new Promise(function(resolve, reject) {
    var jwtClient = new google.auth.JWT(
      key.client_email,
      key.private_key,
      SCOPES
    );
    jwtClient.authorize(function(err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}
