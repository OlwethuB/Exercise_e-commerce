
// let product1 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };
// let product2 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };
// let product3 = {
//     name: 'Book1',
//     image: 'https://i.postimg.cc/0NfXStwZ/Closed-Book-Clip-Art-Black-and-White.jpg',
//     author: 'An Author',
//     price: 'R926'
// };
// let product4 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };


// let product5 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };
// let product6 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };
// let product7 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };
// let product8 = {
//     name: 'Book1',
//     author: 'An Author',
//     price: 'R926'
// };

// let produce = document.getElementById("Produce");

// let products =[product1, product2, product3, product4, product5, product6, product7, product8];
// products.forEach(product => produce.innerHTML += "<br>" + Object.values(product).join(" "));


  
// Array of products
const products = [
    {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
    },
    // Add more product objects here
    {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
      {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
      {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
      {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
      {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
      {
        name: 'Book1',
        image: 'https://i.postimg.cc/3RSTXX65/Closed-Book-Clip-Art-Black-and-White.jpg',
        author: 'An Author',
        price: 'R 926'
      },
  ];
  // Function to create a product element
  function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.className = "col-md-3";
    const productHTML = `
      <div class="product">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <h3>${product.author}</h3>
          <p>Price: ${product.price}</p>
          <button class="buy-btn btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
    productDiv.innerHTML = productHTML;
    return productDiv;
  }
  // Get the container element to append the product elements
  const productsContainer = document.querySelector("#products .row");
  // Loop through the products array and create product elements
  products.forEach(product => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
  });