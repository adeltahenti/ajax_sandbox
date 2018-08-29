// Events Listener
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load one customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // Get an Object
      const customer = JSON.parse(this.responseText);

      // Display in ul
      const output = `
        <ul>
          <li><strong>ID: </strong>${customer.id}</li>
          <li><strong>Name: </strong>${customer.name}</li>
          <li><strong>Company: </strong>${customer.company}</li>
          <li><strong>Phone: </strong>${customer.phone}</li>
        </ul>
      `;

      // Add to div customer
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // Get an Object
      const customers = JSON.parse(this.responseText);

      // Display customers in ul
      let output = '';

      customers.forEach((customer, index) => {
        output += `
          <ul>
            <li><strong>ID: </strong>${customer.id}</li>
            <li><strong>Name: </strong>${customer.name}</li>
            <li><strong>Company: </strong>${customer.company}</li>
            <li><strong>Phone: </strong>${customer.phone}</li>
          </ul>
        `;

        if (index !== (customers.length - 1)) {
          output += '<hr>';
        }
      });

      // Add to div customer
      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}