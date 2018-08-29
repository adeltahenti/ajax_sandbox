// Event listener
document.getElementById('button').addEventListener('click', loadData);

// Load data
function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest(); // 1er
  // console.log(`READYSTATE: ${xhr.readyState}`);

  // Open
  xhr.open('GET', '../data.txt', true); // 2ème

  // console.log(`READYSTATE: ${xhr.readyState}`);

  // Optionnal - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log(`READYSTATE: ${xhr.readyState}`);
  }

  // On load
  xhr.onload = function () { // 3ème latest
    console.log(`READYSTATE: ${xhr.readyState}`);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `
        <h3>${this.responseText}</h3>
      `;
    }
  }
  // same thing with 3ème
  // xhr.onreadystatechange = function () {
  //   // console.log(`READYSTATE: ${xhr.readyState}`);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // Error
  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Send
  xhr.send(); // 4ème

  // readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Status
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}