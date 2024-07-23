import React from 'react';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white border-2 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      style={{ width: '600px' }}
    >
      <div className="flex justify-between p-6">
        <div className="flex justify-center items-center gap-4">
          <img src={`remove.svg`} alt="close" className="cursor-pointer" onClick={onClose} />
          <p className="font-semibold py-2">My Cart</p>
        </div>
      </div>
      <div className="bg-gray-100 p-6 flex gap-4">
        <img src={`i-circle.png`} alt="info" />
        By proceeding you won't be charged yet
      </div>
      <div className="p-6 flex flex-col gap-6">
        {/* Cart Items */}
        <div className="border-2 flex justify-between rounded-lg p-6 gap-8">
          <div className="flex gap-2">
            <p className="flex justify-center items-center text-bold text-xl">1</p>
            <div className="flex justify-center items-center gap-4 text-xs">
              <img src={`bg-image.svg`} alt="product" />
              <div>
                <p className="font-semibold py-2">Product 1</p>
                <p className="text-gray-500">9,000 Rwf</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-6 border-2 rounded-lg">-</button>
            <button className="px-10 bg-gray-100 rounded-lg">1</button>
            <button className="px-6 border-2 rounded-lg">+</button>
          </div>
          <button className="p-6 border-2 rounded-lg">
            <img src={`delete-01.png`} alt="delete" />
          </button>
        </div>
        {/* Additional items here */}
      </div>
      <div className="absolute bottom-0 w-full border-t-2">
        <div className="flex justify-between p-6">
          <div>
            <p>Total:</p>
            <p className="font-bold text-xl">36,000 Rwf</p>
          </div>
          <button
            className="flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8"
            style={{ backgroundColor: "#c1cf16" }}
          >
            <img src={`/dollar-02.png`} alt="dollar" />
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
