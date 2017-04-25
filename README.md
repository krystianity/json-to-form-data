# json-to-form-data
JSON to FormData

```
npm install --save json-to-form-data
```

```es6
const jtfd = require("json-to-form-data");

const jsonData = {
    bla: "123",
    list: ["456", "789"]
};

const formDataString = jtfd(jsonData);
console.log(formDataString); //logs: bla=123&list=456&list=789
```