// Event listener
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      // console.log(response);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach((joke, index) => {
          output += `
              <ul>
                <li><strong>ID: </strong>${joke.id}</li>
                <li><strong>Joke: </strong>${joke.joke}</li>
              </ul>
            `;

          if (index !== (response.value.length - 1)) {
            output += '<hr>';
          }
        });
      } else {
        output = '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send()


  e.preventDefault();
}