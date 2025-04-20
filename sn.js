[rewrite_local]
^https:\/\/user-snow-api.snow.me\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/sunboy888/new/main/sn.js
[mitm] 
hostname = user-snow-api.snow.me
*******************************/

var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "result" : {
    "tickets" : [

    ],
    "vipType" : "VIP_SUBSCRIBER",
    "activated" : true,
    "products" : [
      {
        "status" : "ACTIVE",
        "originalTransactionId" : "90002415884112",
        "productId" : "com.campmobile.snow.subscribe.onemonth",
        "startDate" : 1744990894000,
        "storeType" : "APPLE",
        "expireDate" : 253392455349000,
        "managed" : false
      }
    ]
  }
};

$done({body : JSON.stringify(chxm1023)});
