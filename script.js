const productsData = {
    men: [
        { image: 'images/img1.jpeg', badge: 'New', title: 'Men Kurta', vendor: 'Manywar', price: 1199.00, compareAtPrice: 2000.00 },
        { image: 'images/img2.jpg', badge: 'New', title: 'RCB T-shirt', vendor: 'Addidas', price: 2199.00, compareAtPrice: 4300.00 },
        { image: 'images/img3.jpeg', badge: 'New', title: 'Green Charm', vendor: 'Myntra', price: 1399.00, compareAtPrice: 1599.00 },
        { image: 'images/img4.jpeg', badge: 'New', title: 'T-shirt', vendor: 'Puma', price: 599.00, compareAtPrice: 799.00 },
        
    ],
    women: [
        { image: 'images/img5.jpeg', badge: 'Sale', title: 'Women Kurti', vendor: 'ZARA', price: 4999, compareAtPrice: 6999 },
        { image: 'images/img6.jpeg', badge: 'Sale', title: 'Women Suit', vendor: 'Myntra', price: 1999, compareAtPrice: 5999 },
        { image: 'images/img7.jpeg', badge: 'Sale', title: 'Anarkali', vendor: 'Biba', price: 5999, compareAtPrice: 9999 },
        { image: 'images/img8.jpeg', badge: 'Sale', title: 'Long Kurti', vendor: 'Ritu Kumar', price: 499, compareAtPrice: 699 },
        
    ],
    kids: [
        { image: 'images/img9.jpeg', badge: 'Hot', title: 'Skirt', vendor: 'First Cry', price: 299, compareAtPrice: 3999 },
        { image: 'images/img10.jpeg', badge: 'Hot', title: 'Mittens', vendor: '123 Kids Wear', price: 399, compareAtPrice: 999 },
        { image: 'images/img11.jpeg', badge: 'Hot', title: 'Kids Product 1', vendor: 'Kids Area', price: 2999, compareAtPrice: 3999 },
        { image: 'images/img12.jpeg', badge: 'Hot', title: 'Kids Suit', vendor: 'Trends', price: 999, compareAtPrice: 3999 },

    ]
};
async function fetchProductImages(category) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing${category}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showProducts('men');
});

function showProducts(category) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    productsData[category].forEach(product => {
        const discount = ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" style="width: 100%;">
            <div>${product.badge}</div>
            <h3>${product.title}</h3>
            <p>Vendor: ${product.vendor}</p>
            <p>Price: Rs${product.price}</p>
            <p>Compare at Price: Rs${product.compareAtPrice}</p>
            <p>${discount.toFixed(2)}% off</p>
            <button onclick="addToCart(${product.title})">Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

function addToCart(productTitle) {
    
    alert(`Product "${productTitle}" added to cart.`);
}