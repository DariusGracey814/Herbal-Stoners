class CartUtils {
  constructor() {}

  // Retrieve Flower information
  getFlowerInfo(evt) {
    // Order Information
    const id = evt.target.parentNode.parentNode.parentNode.childNodes[0].id;

    const orderBreeder =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1]
        .childNodes[0].innerText;
    const orderName =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1]
        .childNodes[1].innerText;
    const orderThcLevel =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].innerText.replace(
        "\n\n",
        ""
      );
    const orderWeight = evt.target.childNodes[0].innerText;
    const orderPrice = evt.target.childNodes[1].innerText.slice(1);

    // Customer chosen order
    const order = {
      id: +id,
      breeder: orderBreeder,
      name: orderName,
      thcLevel: orderThcLevel,
      weight: orderWeight,
      price: +orderPrice,
      quantity: 1,
    };

    return order;
  }
}

export default CartUtils;
