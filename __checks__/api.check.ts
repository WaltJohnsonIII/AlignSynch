import { ApiCheck, AssertionBuilder } from "checkly/constructs";

const HTTP_OK = 200;

new ApiCheck("books-api-check-1", {
  name: "Books API",
  alertChannels: [],
  degradedResponseTime: 10_000,
  maxResponseTime: 20_000,
  request: {
    url: "https://danube-web.shop/api/books",
    method: "GET",
    followRedirects: true,
    skipSSL: false,
    assertions: [
      AssertionBuilder.statusCode().equals(HTTP_OK),
      AssertionBuilder.jsonBody("$[0].id").isNotNull(),
    ],
  },
  runParallel: true,
});
