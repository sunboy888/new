/******************************
脚本功能：关不掉的闹钟-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/user-snow-api.snow.me\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/sunboy888/new/main/sn.js
[mitm] 
hostname = nao.beijingmorning.cn
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
