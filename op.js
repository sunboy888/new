if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  $done({ headers: $request.headers });
} else {
  let body = JSON.parse($response.body);

  const entitlementName = "premium";
  const productId ="com.withopal.opal.premiumtier2yearlyalt";

  const fakeData = {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  body.subscriber = body.subscriber || {};
  body.subscriber.subscriptions = body.subscriber.subscriptions || {};
  body.subscriber.entitlements = body.subscriber.entitlements || {};

  body.subscriber.subscriptions[productId] = fakeData;
  body.subscriber.entitlements[entitlementName] = {
    ...fakeData,
    product_identifier: productId
  };

  $done({ body: JSON.stringify(body) });
}
