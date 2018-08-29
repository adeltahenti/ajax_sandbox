const posts = [{
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  },
  {
    title: 'Post Three',
    body: 'This is post three'
  }
];


/**** Synchronous way ****/

/* function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `
        <ul>
          <li><strong>Title: </strong>${post.title}</li>
          <li><strong>Title: </strong>${post.body}</li>
        </ul>
      `;
      if (index !== (posts.length - 1)) {
        output += '<hr>';
      }
    });

    document.getElementById('result').innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post Four',
  body: 'This is post four'
});

getPosts(); */

/**** Asynchronous way ****/

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `
        <ul>
          <li><strong>Title: </strong>${post.title}</li>
          <li><strong>Title: </strong>${post.body}</li>
        </ul>
      `;
      if (index !== (posts.length - 1)) {
        output += '<hr>';
      }
    });

    document.getElementById('result').innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post Four',
  body: 'This is post four'
}, getPosts);