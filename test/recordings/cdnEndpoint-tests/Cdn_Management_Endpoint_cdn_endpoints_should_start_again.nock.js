// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987/start?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4987.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '545',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b/profileresults/cdnTestProfile6758/endpointresults/cdnTestEndpoint4987?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '85fc209a-7d4e-4ba7-9f37-0c54296a0deb',
  'x-ms-client-request-id': 'e8866ff7-7005-45db-8263-882ca0a37441',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b51ba31a-714a-41c3-af75-d9e9349f2587',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014526Z:b51ba31a-714a-41c3-af75-d9e9349f2587',
  date: 'Fri, 28 Oct 2016 01:45:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987/start?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4987.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    \r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '545',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b/profileresults/cdnTestProfile6758/endpointresults/cdnTestEndpoint4987?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '85fc209a-7d4e-4ba7-9f37-0c54296a0deb',
  'x-ms-client-request-id': 'e8866ff7-7005-45db-8263-882ca0a37441',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b51ba31a-714a-41c3-af75-d9e9349f2587',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014526Z:b51ba31a-714a-41c3-af75-d9e9349f2587',
  date: 'Fri, 28 Oct 2016 01:45:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a863a66a-0c9b-4aad-914b-95c5ae48612d',
  'x-ms-client-request-id': 'dc6cf482-244e-469d-a3d5-aa2e72b2316d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '6ff640d4-6f96-47e1-a4d1-0edf6fbe23df',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014557Z:6ff640d4-6f96-47e1-a4d1-0edf6fbe23df',
  date: 'Fri, 28 Oct 2016 01:45:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/operationresults/d14df493-815a-4239-b082-6774c506926b?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'a863a66a-0c9b-4aad-914b-95c5ae48612d',
  'x-ms-client-request-id': 'dc6cf482-244e-469d-a3d5-aa2e72b2316d',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '6ff640d4-6f96-47e1-a4d1-0edf6fbe23df',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014557Z:6ff640d4-6f96-47e1-a4d1-0edf6fbe23df',
  date: 'Fri, 28 Oct 2016 01:45:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4987\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4987.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '904',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '447ad816-5574-477e-94c0-ee64d6092c95',
  'x-ms-client-request-id': '8cffa898-558a-4e7d-b836-a0a9d1fc6de7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b7698cee-de0e-4a48-9b24-aabe08c8c457',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014557Z:b7698cee-de0e-4a48-9b24-aabe08c8c457',
  date: 'Fri, 28 Oct 2016 01:45:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint4987\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/cdnTestEndpoint4987\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val2\",\"tag2\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint4987.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '904',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '447ad816-5574-477e-94c0-ee64d6092c95',
  'x-ms-client-request-id': '8cffa898-558a-4e7d-b836-a0a9d1fc6de7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b7698cee-de0e-4a48-9b24-aabe08c8c457',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014557Z:b7698cee-de0e-4a48-9b24-aabe08c8c457',
  date: 'Fri, 28 Oct 2016 01:45:57 GMT',
  connection: 'close' });
 return result; }]];