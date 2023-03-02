import React, { useState, useEffect } from 'react';
import './ProductPage.scss'
import Button from './Button/Button'

const ProductPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Виконуємо запит до сервера для отримання даних про продукти
        fetch('/productBase.json')
            .then(response => response.json())
            .then(data => {
                // Зберігаємо масив продуктів у стані компонента
                setProducts(data);
                // Встановлюємо перший елемент масиву як вибраний товар за замовчуванням
                setSelectedProduct(data[0]);
            })
            .catch(error => console.log(error));
    }, []);

    function handleProductClick(index) {
        // Обробник натискання на продукт змінює стан, встановлюючи вибраний продукт
        setSelectedProduct(products[index]);
    }



    return (
        <div className="product_container">
            <div className="container">
                {selectedProduct && (
                    <div className="product_info">
                        <img
                            src={selectedProduct.imgURL}
                            alt={selectedProduct.productName}
                            className="product_img"
                        />
                        <div className="info">
                            <h2>{selectedProduct.productName}</h2>
                            <p>Ціна: {selectedProduct.price}</p>
                            <p>Артикул: {selectedProduct.productArticle}</p>
                            <p>Колір: {selectedProduct.productColor}</p>
                            <Button/>
                        </div>
                    </div>
                )}
                <div className="product_select">
                    <h2>Оберіть продукт:</h2>
                    <select
                        onChange={(e) => handleProductClick(e.target.value)}
                        className="select_product"
                    >
                        {products.map((product, index) => (
                            <option key={index} value={index}>
                                {product.productName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
