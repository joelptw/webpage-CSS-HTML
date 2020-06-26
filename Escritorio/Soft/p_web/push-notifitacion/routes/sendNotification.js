var PROJECT_ID = "notification-test-93489";
var HOST = "fcm.googleapis.com";
var PATH = `/v1/projects/${PROJECT_ID}/messages:send`;

function sendFcmMessage(fcmMessage) {
  getAccessToken().then(function(accessToken) {
    var options = {
      hostname: HOST,
      path: PATH,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
      // … plus the body of your notification or data message
    };
    var request = https.request(options, function(resp) {
      resp.setEncoding("utf8");
      resp.on("data", function(data) {
        console.log("Message sent to Firebase for delivery, response:");
        console.log(data);
      });
    });
    request.on("error", function(err) {
      console.log("Unable to send message to Firebase");
      console.log(err);
    });
    request.write(JSON.stringify(fcmMessage));
    request.end();
  });
}
