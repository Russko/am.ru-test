My first test project
=============================

It's my the education project. I write automation tests for am.ru website.

INSTALLATION
------------

**You must have installed node.js > v4, recommended v6.9.2 - v7.2.1 and npm**

Before run project you need install Selenium:

    npm install selenium-standalone@latest -g
    selenium-standalone install
    selenium-standalone start

Next you must update dependencies:

    npm install

Finally you can run all project or only one test:

    npm run test:name - run one test suite (npm run test:authPage,npm run test:createAuth,...)
    npm run test       - all tests of project
