# Ajax Sandbox

## Using XMLHttpRequest Object

### readyState values

- 0: request not initialized
- 1: server connection established
- 2: request received
- 3: processing request
- 4: request finished and response is ready

### HTTP Status

- 200: "OK"
- 403: "Forbidden"
- 404: "Not Found"

## Sequences to Ajax

1. Instantiate XMLHttpRequest

```Javascript
  const xhr = new XMLHttpRequest();
```

2. Server connection

```Javascript
  xhr.open('GET', 'urlAddress', true);
```

3. Request received, Processing and Finished request

```Javascript
  xhr.onload = function() {
    // display some thing
  }
```

4. Receive response

```Javascript
  xhr.send();
```
