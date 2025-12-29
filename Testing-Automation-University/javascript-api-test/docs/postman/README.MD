# I have used the ASDF to install nodejs on my env.

# How API workds ?
- APIs are contracts that enable communication !
- Piece of code conversation with another piece o code

Struture:
- Endpoint
- Methods
- Headers
- Body
- Response
- Status Code

Developers will use the API more than Products owners.
They need to be:
- Correct (Contract must be ok), 
- Provides value, 
- Intuitive.

APIs are (in the most of case) PUBLIC !

To see the traffic in your mobile device you must use a proxy tool
Example: Fiddlers and Charles

# Postman 
- Best rest application to test API.

Observation:
- When we use GET method, some optional information are linked by using query parameter

# POISED heuristic to test API
- To run your exercise localy: https://github.com/mwinteringham/restful-booker
- All the explanation: https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/chapter3.0.html

- Parameters: Input in the body json ou query parameters
- Output: the reponse status, body and hearders must to be clear to the developer
- Interoperability: post body example (date on other format than your country). Think about is how your parameters are actually formatted and how picky are they about the format.
- Security: There are many attack to API. This course talk about the authorization for some endpoints and crossscriptattack (insert javascript script in the request in json)
- Errors: Get clear in all erros (status). Avoid to have erro 500 internal server error [no idea of what is happening].
- Data: CRUD. make sure that data is returning in another API. checking the speed.

# Data driven test
You can create a CSV file to run inside a post method.
https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/chapter4.2.html

# Advanced Test: Using the pre-request test
https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/chapter4.3.html


# Links
- https://testautomationu.applitools.com/exploring-service-apis-through-test-automation/chapter1.html
- Useful app to training: https://restful-booker.herokuapp.com/
- https://github.com/ambertests/explore-with-postman
- http://worldtimeapi.org/api/timezone/America