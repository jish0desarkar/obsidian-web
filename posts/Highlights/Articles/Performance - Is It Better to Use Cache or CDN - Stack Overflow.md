# Performance - Is It Better to Use Cache or CDN? - Stack Overflow

## Metadata
- Author: [[Cookie Policy]]
- Full Title: Performance - Is It Better to Use Cache or CDN? - Stack Overflow
- Category: #articles
- URL: https://stackoverflow.com/questions/12916430/is-it-better-to-use-cache-or-cdn

## Highlights
- A CDN can, in some rarer cases, cause a negative impact on performance if the latency of the CDN ends up being slower then your server. Also if you over optimize and employ too much parallelization of resources (using multi subdomains like cdn1, cdn2, cdn3, etc) it is possible to end up slowing down the user experience and cause overhead with extra DNS lookups. A good balance is needed here
