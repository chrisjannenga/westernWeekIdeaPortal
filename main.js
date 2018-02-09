getSouthBridgeData();
getMuseumData();
getIndianFestData();
getFarmersMarketData();


function getSouthBridgeData(){

var southBridgeGet = {
  "async": true,
  "crossDomain": true,
  "url": "http://things.ubidots.com/api/v1.6/variables/5a7b37df76254201400ba661/values?token=A1E-jZjOk8ZGYPOX0xttdjp91C6U0mkpof",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "e0be80f1-c867-d5a8-e6de-c3a7b9c19a39",
    "Access-Control-Allow-Origin": "*"
  }
}

$.ajax(southBridgeGet).done(function (southBridgeAll) {
  southBridgeLive = southBridgeAll.results[0].value;
  console.log(southBridgeLive);
  document.querySelector('#portalSouthBridge').innerHTML = southBridgeLive
});
}

function getMuseumData(){

var museumGet = {
  "async": true,
  "crossDomain": true,
  "url": "http://things.ubidots.com/api/v1.6/variables/5a7b37df76254201400ba662/values?token=A1E-jZjOk8ZGYPOX0xttdjp91C6U0mkpof",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "e0be80f1-c867-d5a8-e6de-c3a7b9c19a39"
  }
}

$.ajax(museumGet).done(function (museumAll) {
  museumLive = museumAll.results[0].value;
  console.log(museumLive);
  document.querySelector('#portalMuseum').innerHTML = museumLive
});
}

function getIndianFestData(){

var indianFestGet = {
  "async": true,
  "crossDomain": true,
  "url": "http://things.ubidots.com/api/v1.6/variables/5a7b37df76254201400ba664/values?token=A1E-jZjOk8ZGYPOX0xttdjp91C6U0mkpof",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "e0be80f1-c867-d5a8-e6de-c3a7b9c19a39"
  }
}

$.ajax(indianFestGet).done(function (indianFestAll) {
  indianFestLive = indianFestAll.results[0].value;
  console.log(indianFestLive);
  document.querySelector('#portalIndianFest').innerHTML = indianFestLive
});
}

function getFarmersMarketData(){

var farmersMarketGet = {
  "async": true,
  "crossDomain": true,
  "url": "http://things.ubidots.com/api/v1.6/variables/5a7b37df76254201400ba660/values?token=A1E-jZjOk8ZGYPOX0xttdjp91C6U0mkpof",
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "e0be80f1-c867-d5a8-e6de-c3a7b9c19a39"
  }
}

$.ajax(farmersMarketGet).done(function (farmersMarketAll) {
  farmersMarketLive = farmersMarketAll.results[0].value;
  console.log(farmersMarketLive);
  document.querySelector('#portalFarmersMarket').innerHTML = farmersMarketLive
});
}
