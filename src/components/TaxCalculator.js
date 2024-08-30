import React, { useState } from 'react';

const TaxCalculator = () => {
  const [productPrice, setProductPrice] = useState('');
  const [taxPercentage, setTaxPercentage] = useState('');

  const calculateTax = () => {
    const price = parseFloat(productPrice);
    const taxRate = parseFloat(taxPercentage);

    if (isNaN(price) || isNaN(taxRate)) {
      return { taxAmount: 0, totalPrice: 0 };
    }

    const taxAmount = (price * taxRate) / 100;
    const totalPrice = price + taxAmount;

    return { taxAmount, totalPrice };
  };

  const { taxAmount, totalPrice } = calculateTax();

  return (
    <div>
      <div>
        <label htmlFor="productPrice">Product Price</label>
        <input
          id="productPrice"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Enter product price"
        />
      </div>
      <div>
        <label htmlFor="taxPercentage">Tax Percentage</label>
        <input
          id="taxPercentage"
          type="number"
          value={taxPercentage}
          onChange={(e) => setTaxPercentage(e.target.value)}
          placeholder="Enter tax percentage"
        />
      </div>
      <div>
        <p>Tax Amount: ${taxAmount.toFixed(2)}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TaxCalculator;
