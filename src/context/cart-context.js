import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  currentCart: [],
  itemCounter: 0,
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getCartTotal: () => {},
  saveCartToSessionStorage: () => {},
});

// Global cart state
var currentCart = [];

function CartProvider({ children }) {
  // Initial Cart Products state
  const [cartProducts, setCartProducts] = useState([]);
  const [allCartItems, setAllCartItems] = useState([]);
  const [productCountTracker, setProductCountTracker] = useState(0);

  // Cart: {id: 1, breeder?: "", name: "", weight: "", price: "", thcInfo: "", quantity: 2}
  // Get Product Quantity
  function getProductQuantity(id) {
    // Find existing item in current ( access to current element being looped )
    const existingItemQuantity = cartProducts.find(
      (item) => item.id === id
    )?.quantity;
    // If existing item quantity is undefined return 0 -> item does not exists
    if (existingItemQuantity === undefined) {
      return 0;
    }
    return existingItemQuantity;
  }

  // Add one to cart
  function addOneToCart(selectedItem) {
    // Get existing item quantity by item - id
    const quantity = getProductQuantity(selectedItem.id);

    if (quantity === 0) {
      // Add new product to cart
      setProductCountTracker((prevCount) => prevCount + 1);
      setCartProducts([selectedItem]);
    } else {
      // Find index of existing product
      const productIndex = cartProducts.findIndex(
        (product) =>
          product.id === selectedItem.id &&
          product.weight === selectedItem.weight
      );

      if (productIndex !== -1) {
        const existingItem = cartProducts[productIndex];

        // Updated cart item
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          price: selectedItem.price * (existingItem.quantity + 1),
        };

        // Replace existing cart item with updated cart item
        cartProducts[productIndex] = { ...updatedItem };
        setProductCountTracker((prevCount) => prevCount + 1);

        console.log("Quantity and price updated");
      } else {
        // Add new product to cart
        setCartProducts((prevProducts) => [...prevProducts, selectedItem]);
      }
    }
  }

  // Remove one from cart
  function removeOneFromCart(id) {
    // get matching product quantity
    const quantity = getProductQuantity(id);

    // if quantity is 1 result will be 0 == none
    if (quantity === 1) {
      // Delete from cart
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          // Create new updated product with quantity
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  // Delete From Cart
  function deleteFromCart(id) {
    // find Item
    setCartProducts((cartProducts) =>
      cartProducts.filter((product) => product.id !== id)
    );
  }

  // Get Total Cost of the cart
  function getCartTotal() {
    const cartTotal = allCartItems.reduce((acc, val) => acc + val.price, 0);
    return cartTotal;
  }

  // Save cart data to Session Storage
  function saveCartToSessionStorage(cart) {
    if (currentCart.length === 0) {
      cart.map((cartItem) => currentCart.push(cartItem));
      // Check if item is in cart
    } else if (currentCart.length >= 1) {
      // Find index of existing cart item
      cart.map((cartItem) => {
        const productIndex = currentCart.findIndex(
          (product) =>
            product.id === cartItem.id && product.weight === cartItem.weight
        );

        if (productIndex !== -1) {
          currentCart[productIndex] = { ...cartItem };
        } else {
          // push last item in cart to currentCart
          currentCart.push(cart[cart.length - 1]);
        }
      });
    }
    setAllCartItems(currentCart);
    setCart(currentCart);
    setCartCounter(productCountTracker);
  }

  function setCart(user_cart) {
    // Save CurrentCart to session
    const userCart = { cart: user_cart };
    sessionStorage.setItem("userCart", JSON.stringify(userCart));
  }

  function setCartCounter(counter) {
    sessionStorage.setItem("CartCounter", counter);
    setProductCountTracker(+sessionStorage.getItem("CartCounter"));
  }

  // function getCartCounter() {

  // }

  // Provider value state
  const itemValues = {
    items: cartProducts,
    itemCounter: productCountTracker,
    currentCart: allCartItems,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getCartTotal,
    saveCartToSessionStorage,
  };

  // return context.provider and initial state
  return (
    <CartContext.Provider value={itemValues}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
