// const card = document.getElementById('Container');

// // Add a custom data attribute
// card.setAttribute('data-product-id', 'xyz-123');
// card.classList.add("Mohit","Rohit")

// // Get the value of an attribute
// const productId = card.getAttribute('data-product-id');
// const productClass = card.getAttribute('Class');
// console.log(productId); // "xyz-123"
// console.log(productClass)

// // Remove an attribute
// card.removeAttribute('class');

const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')

li1.textContent = "Hello1"
li2.textContent = "Hello2"
li3.textContent = "Hello3"
li4.textContent = "Hello4"

// ul.append(li1,li2,li3,li4)
// const body = document.querySelector('body')
// body.append(ul)

// ul.append(li1,li2,li3)
// li2.before(li4)
// const body = document.querySelector('body')
// body.append(ul)


// ul.append(li1,li2,li3)
// li2.after(li4)
// const body = document.querySelector('body')
// body.append(ul)


ul.append(li1,li2,li3)
ul.prepend(li4)
const body = document.querySelector('body')
body.append(ul)



const grandparent = document.getElementById('Container');

grandparent.addEventListener('click', (event) => {
  console.log("--- Event Listener on GRANDPARENT was triggered ---");

  // The element the listener is attached to
  console.log("event.currentTarget:", event.currentTarget.id);

  // The element where the click originated
  console.log("event.target:", event.target.id);
});
