# free-http-client<!-- omit in toc -->



> The [http client](https://www.npmjs.com/package/free-http-client) package based on curl for Node.js.

[free-http-client](https://www.npmjs.com/package/free-http-client) : support methods DELETE | GET | PUT | POST

- [Quick Start](#)
    - [Install](#)
    - [Sample Request  using free-http-client](#)

## Started 

### Install
```shell
npm i free-http-client --save
```
or
```shell
yarn add free-http-client
```

### Sample request with GET
> This API is at version 1. You can contribute to its evolution.

```javascript
const freeHttpclient = require('free-http-client');
let url = "https://xxx.com"
let res = await  freeHttpclient.get(url,{
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Basic xxxxxxxxxxx',
  }
})
console.log('res data in json',res.data)
console.log('http status code',res.status)
console.log('response headers',res.headers)

```

### Sample request with DELETE
> This API is at version 1. You can contribute to its evolution.

```javascript
const freeHttpclient = require('free-http-client');
let url = "https://xxx.com"
let res = await  freeHttpclient.delete(url,{
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Basic xxxxxxxxxxx',
  }
})
console.log('res data in json',res.data)
console.log('http status code',res.status)
console.log('response headers',res.headers)

```

### Sample request with POST
> This API is at version 1. You can contribute to its evolution.

```javascript
const freeHttpclient = require('free-http-client');

let res = await  freeHttpclient.post(url,{
  json:{
    field:"value"
  },
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Basic xxxxxxxxxxx',
  }
})
console.log('res data in json',res.data)
console.log('http status code',res.status)
console.log('response headers',res.headers)

```

### Sample request with PUT
> This API is at version 1. You can contribute to its evolution.

```javascript
const freeHttpclient = require('free-http-client');

let res = await  freeHttpclient.put(url,{
  json:{
    field:"value"
  },
  headers:{
    'Content-Type':'application/json',
    'Authorization':'Basic xxxxxxxxxxx',
  }
})
console.log('res data in json',res.data)
console.log('http status code',res.status)
console.log('response headers',res.headers)

```
