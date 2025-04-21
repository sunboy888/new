/******************************
脚本功能：关不掉的闹钟-解锁会员
脚本作者：Xyu
脚本频道：haa________
更新时间：2024-08-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/purchase-soda-api.snow.me\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/sunboy888/new/main/sd.js
[mitm] 
hostname = purchase-soda-api.snow.me
*******************************/
var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "result" : {
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1744109695000,
        "productId" : "com.snowcorp.soda.subscribe.onemonth",
        "isTrialPeriod" : false,
        "expireDate" : 17467016950000
      }
    ],
    "vipSegments" : [
      "SUBSCRIPTION_PAID_ACTIVE"
    ],
    "activated" : true
  }
};

$done({body : JSON.stringify(chxm1023)});
