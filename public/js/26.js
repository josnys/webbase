(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/Pages/Admin/Security/CreateRole.js":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Admin/Security/CreateRole.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/josnys/Documents/WebDev/webbase/resources/js/Pages/Admin/Security/CreateRole.js: Unexpected token, expected \\\",\\\" (41:34)\\n\\n\\u001b[0m \\u001b[90m 39 |\\u001b[39m      \\u001b[36mfunction\\u001b[39m handleSubmit(e) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 |\\u001b[39m           e\\u001b[33m.\\u001b[39mpreventDefault()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 41 |\\u001b[39m           post(route(\\u001b[32m'role.store'\\u001b[39m){\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                   \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 |\\u001b[39m                onSuccess\\u001b[33m:\\u001b[39m () \\u001b[33m=>\\u001b[39m reset()\\u001b[0m\\n\\u001b[0m \\u001b[90m 43 |\\u001b[39m           })\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 |\\u001b[39m      }\\u001b[0m\\n    at Object._raise (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:806:17)\\n    at Object.raiseWithData (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:799:17)\\n    at Object.raise (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:760:17)\\n    at Object.unexpected (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:9908:16)\\n    at Object.expect (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:9882:28)\\n    at Object.parseCallExpressionArguments (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:11063:14)\\n    at Object.parseCoverCallAndAsyncArrowHead (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10989:29)\\n    at Object.parseSubscript (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10925:19)\\n    at Object.parseSubscripts (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10898:19)\\n    at Object.parseExprSubscripts (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10887:17)\\n    at Object.parseUpdate (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10861:21)\\n    at Object.parseMaybeUnary (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10839:23)\\n    at Object.parseExprOps (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10696:23)\\n    at Object.parseMaybeConditional (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10670:23)\\n    at Object.parseMaybeAssign (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10633:21)\\n    at Object.parseExpressionBase (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10578:23)\\n    at /Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10572:39\\n    at Object.allowInAnd (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12277:16)\\n    at Object.parseExpression (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:10572:17)\\n    at Object.parseStatementContent (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12569:23)\\n    at Object.parseStatement (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12438:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13022:25)\\n    at Object.parseBlockBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13013:10)\\n    at Object.parseBlock (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12997:10)\\n    at Object.parseFunctionBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:11956:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:11940:10)\\n    at /Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13155:12\\n    at Object.withTopicForbiddingContext (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12252:14)\\n    at Object.parseFunction (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13154:10)\\n    at Object.parseFunctionStatement (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12790:17)\\n    at Object.parseStatementContent (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12476:21)\\n    at Object.parseStatement (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12438:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13022:25)\\n    at Object.parseBlockBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:13013:10)\\n    at Object.parseBlock (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:12997:10)\\n    at Object.parseFunctionBody (/Users/josnys/Documents/WebDev/webbase/node_modules/@babel/parser/lib/index.js:11956:24)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9BZG1pbi9TZWN1cml0eS9DcmVhdGVSb2xlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Admin/Security/CreateRole.js\n");

/***/ })

}]);