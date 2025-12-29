# Introduction

```bash
# creating a file
name_test.js

# Function calls (pre-bundled)
describe('nameOfScenario', callback()=>{it..}) : Group of scenarios 
it()                                           : Specif scenarios

# Mocha hooks
before()     : This hooks will execute the code clock before the test executes from it() function.
after()      : This hooks will execute the code block after all the tests executes.
beforeEach() : This hook will run the code block before every test execution.
afterEach()  : This hook will be running the code block after every text execution.

This Hooks needs to be inside a describe() functions to work !

# Unique Test Feature
Excluise Test  - .only() run only this  from it() and describe();
Inclusive Test - .skip() ignore theses suites from it() and describe();
Peding Test    - peding ( This is not a failed test ). Just remove the callback function from it() and describe();

# Retry & Timeouts
This is configurable and can be used in case if you use End-to-End tests, like Selenium Scripts

*Important*
Please note that retry will not work with before() and after() hooks. 
But it can be used in beforeEach() and afterEach() hooks. 
It is not recommended to use the retry in unit test.

# Timeouts
3 levels: 
    Suite-level (inside a describe) 
    test-level 
    hook-level

*Important*: this. only work inside a function(){}, thas means you will have trouble if use arrowFunctions
https://github.com/mochajs/mocha/issues/2018
https://mochajs.org/#timeouts

# Reporters
spec: mocha test/ --reporter spec
dot matrix: mocha test/ --reporter dot
You can pass dot. nyan, json and others
```

# To run the test
You have to run 
```bash
npm install --save-dev
```

# Documetation
https://mochajs.org/
https://testautomationu.applitools.com/mocha-javascript-tests/chapter2.html