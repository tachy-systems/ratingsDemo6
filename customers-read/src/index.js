exports.handler = async event => {
  console.log(event);
  let {
    requestContext
  } = event;
  let response = {
    id: 1,
    method: requestContext.http.method,
    baseUrl: requestContext.domainName,
    path: event.routeKey.split(" ")[1],
    pathParam: event.pathParameters,
    queryParam: event.queryStringParameters
  };
  return response;
};