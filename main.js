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
  }
}

$.ajax(farmersMarketGet).done(function (farmersMarketAll) {
  farmersMarketLive = farmersMarketAll.results[0].value;
  console.log(farmersMarketLive);
  document.querySelector('#portalFarmersMarket').innerHTML = farmersMarketLive
});
}
