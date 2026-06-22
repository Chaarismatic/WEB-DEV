import products from "./Data.js";

// {
//     title: "Pen",
//     price: 50,
//     image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd",
//     category: "Stationery",
//     brand: "Cello",
//     rating: 4.2,
//     discount: 2,
//     inStock: true
//   }

const Container = document.getElementById('Container')
const frag = document.createDocumentFragment()

products.forEach((product)=>{
  const div = document.createElement('div')
  const Title = document.createElement('h2')
  Title.textContent = product.title

  const Price = document.createElement('h2')
  Price.textContent = product.price

  const image = document.createElement('img')
  image.src = product.image


  const Brand = document.createElement('h3')
  Brand.textContent = product.brand

  const Rating = document.createElement('h3')
  Rating.textContent = product.rating

  const Discount = document.createElement('h3')
  Discount.textContent = product.discount

  div.classList.add("product-card");

const content = document.createElement("div");
content.classList.add("product-content");

Title.classList.add("product-title");
Price.classList.add("product-price");

Brand.classList.add("meta");

const bottom = document.createElement("div");
bottom.classList.add("bottom");

Rating.classList.add("rating");
Discount.classList.add("discount");

bottom.append(Rating, Discount);

content.append(Title, Price, Brand, bottom);

div.append(image, content);

  
  frag.append(div)

})

Container.append(frag)

