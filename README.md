My first test project
=============================

It's my the education project. I write automation tests for am.ru website.

INSTALLATION
------------

**You must have installed node.js > v4 and npm**

Before run project you need install Selenium:

    npm install selenium-standalone@latest -g
    selenium-standalone install
    selenium-standalone start

Next you must update dependencies:

    npm install

Finally you can run all project or only one test:

    npm run test:name - run one test suite (npm run test:login,npm run test:new Offers,...)
    npm run test       - all tests of project
