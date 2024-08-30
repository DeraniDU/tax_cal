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
    <div className="tax-calculator bg-white shadow-md rounded-lg p-8 mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tax Calculator</h2>
      <div className="mb-4">
        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
          Product Price
        </label>
        <input
          id="productPrice"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter product price"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="taxPercentage" className="block text-sm  text-gray-700">
          Tax Percentage
        </label>
        <input
          id="taxPercentage"
          type="number"
          value={taxPercentage}
          onChange={(e) => setTaxPercentage(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter tax percentage"
        />
      </div>
      <div className="mt-6">
        <p className="text-lg font-medium text-gray-800">Tax Amount: <span className="font-bold">Rs. {taxAmount.toFixed(2)}</span></p>
        <p className="text-lg font-medium text-gray-800">Total Price: <span className="font-bold">Rs. {totalPrice.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default TaxCalculator;
