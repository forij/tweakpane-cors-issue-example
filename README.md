Demo repo to show issue with cors in [tweakpane](https://github.com/cocopon/tweakpane) lib 

Tweakpane lib doesn't work with cors config like this:

`Content-Security-Policy: script-src 'self' 'unsafe-inline'`,

Start demo server:

Run: 
1. npm start


GOTO file: './scr/static/index.html' here you can choose original of fixed version of tweakpane.js

```
<head>
    <script src="./tweakpane.js"></script>
    <!-- <script src="./tweakpane-fix.js"></script> -->
</head>
```

EXAMPLE ERROR IN CONSOLE:

```
Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' 'unsafe-inline'".
```