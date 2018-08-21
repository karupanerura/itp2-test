# basic bacis browser set cookies only

## public

* serve main at some domain & thirdparty at some other and point main to thirdparty
* add thirdparty as prevalent as per ITP debugging
* carry on as per local testing

## locally

* use something like dnsmasq to resolve main & thirdparty domains to localhost
  * I have resolved an entire TLD, e.g. ".au", so I can play around more easily
* serve this directory with some HTTP server. E.g.:
  * > npm install http-server -g
  * > http-server -p 3005
* fire up a Safari version with ITP (2.0)
  * open up a main, e.g. http://www.main-domain-001.au:3005/main/
  * add thirdparty, e.g. http://sub.thirdparty-domain-001.au:3005/thirdparty/, in form
  * copy full URL or do the same to have 4-5 different main domains in open tabs, e.g. http://www.main-domain-001.au:3005, http://www.main-domain-002.au:3005, ...
  * reload and hit the action links to see behavior in different scenarios
  * the popup link in the thirdparty iframe opens up a page where you can write a cookie on the 3rd party domain
  * reset ITP by clearing history (or simply switch to a new thirdparty domain)
