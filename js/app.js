// Event listener
document.getElementById('button').addEventListener('click', loadData);

// Load data
function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest(); // 1er

  // Open
  xhr.open('GET', '../data.txt', true); // 2ème

  // On load
  xhr.onload = function () { // 3ème
    if (this.status === 200) {
      console.log(this.responseText);
    }
  }

  // Send
  xhr.send(); // 4ème

  // HTTP Status
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}