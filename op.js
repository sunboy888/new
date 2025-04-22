if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  $done({ headers: $request.headers });
} else {
  let _0x1f23=['subscribers','com.withopal.opal.premiumtier2yearlyalt','premium','entitlements','subscribers','subscriptions','app_store','PURCHASED','2099-09-09T09:09:09Z','2023-02-23T02:33:33Z'];let body=JSON.parse($response.body);body[_0x1f23[0]]=body[_0x1f23[0]]||{};body[_0x1f23[0]][_0x1f23[5]]=body[_0x1f23[0]][_0x1f23[5]]||{};body[_0x1f23[0]][_0x1f23[3]]=body[_0x1f23[0]][_0x1f23[3]]||{};let fakeData={"expires_date":_0x1f23[8],"original_purchase_date":_0x1f23[9],"purchase_date":_0x1f23[9],"ownership_type":_0x1f23[7],"store":_0x1f23[6]};body[_0x1f23[0]][_0x1f23[5]][_0x1f23[1]]=fakeData;body[_0x1f23[0]][_0x1f23[3]][_0x1f23[2]]={...fakeData,"product_identifier":_0x1f23[1]};$done({body:JSON.stringify(body)});
}
