import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';  // Necesitas instalar react-icons: npm install react-icons

function CartWidget() {
  return (
    <div>
      <FaShoppingCart />
      <Badge pill variant="success">
        5  {/* Número hardcodeado */}
      </Badge>
    </div>
  );
}

export default CartWidget;
