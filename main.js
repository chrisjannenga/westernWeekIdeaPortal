var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://things.ubidots.com/api/v1.6/variables/5a7b37df76254201400ba661/values?token=A1E-jZjOk8ZGYPOX0xttdjp91C6U0mkpof",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "e0be80f1-c867-d5a8-e6de-c3a7b9c19a39"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
