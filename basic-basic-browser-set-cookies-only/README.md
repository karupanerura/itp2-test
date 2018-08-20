# basic bacis browser set cookies only

* use something like dnsmasq to resolve main & thirdparty domains to localhost
  * I have resolved an entire TLD, e.g. ".au", so I can play around more easily
* update the main html with thirdparty iframe src
* serve this directory with some HTTP server. E.g.:
  * > npm install http-server -g
  * > http-server -p 3005
* fire up a Safari version with ITP (2.0)
  * open 4-5 main tabs, e.g. http://www.main-domain-001.au:3005, http://www.main-domain-002.au:3005, ...
  * reload and hit the action links to see behavior in different scenarios
  * reset ITP by clearing history (or simply switch to a new thirdparty domain)
