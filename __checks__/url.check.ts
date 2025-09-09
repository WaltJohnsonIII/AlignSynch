import { UrlAssertionBuilder, UrlMonitor } from "checkly/constructs";

const HTTP_OK = 200;

new UrlMonitor("books-url-check", {
  name: "Books URL",
  activated: true,
  maxResponseTime: 10_000,
  degradedResponseTime: 5000,
  request: {
    url: "https://www.danube-web.shop/",
    followRedirects: true,
    assertions: [UrlAssertionBuilder.statusCode().equals(HTTP_OK)],
  },
});
