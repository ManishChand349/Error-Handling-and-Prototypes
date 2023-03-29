function filterProductsByCategory(products) {
  return function(category) {
    return products.filter(product => product.category === category);
  }
}
const products = [
  { name: 'Product 1', category: 'electronics' },
  { name: 'Product 2', category: 'clothing' },
  { name: 'Product 3', category: 'electronics' },
  { name: 'Product 4', category: 'home' }
];

const filterByCategory = filterProductsByCategory(products);

const electronicsProducts = filterByCategory('electronics');
console.log(electronicsProducts); 

const clothingProducts = filterByCategory('clothing');
console.log(clothingProducts); 

const homeProducts = filterByCategory('home');
console.log(homeProducts); 
