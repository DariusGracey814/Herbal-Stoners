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

    const img =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        .src;

    // Customer chosen order
    const order = {
      id: +id,
      img: img,
      breeder: orderBreeder,
      name: orderName,
      thcLevel: orderThcLevel,
      weight: orderWeight,
      price: +orderPrice,
      quantity: 1,
    };

    return order;
  }

  // Retrieve Single Price items (edibles / Extracts / Vaporizers)
  getSingleItems(evt) {
    const target = evt.currentTarget;

    const id = target.parentNode.childNodes[0].id;
    const weight =
      target.parentNode.childNodes[1].childNodes[0].innerText.replace(" -", "");
    const price =
      target.parentNode.childNodes[1].childNodes[1].innerText.replace("$", "");

    const breeder =
      target.parentNode.childNodes[0].childNodes[1].childNodes[0].innerText;
    const name =
      target.parentNode.childNodes[0].childNodes[1].childNodes[1].innerText;
    let thcLevel =
      target.parentNode.childNodes[0].childNodes[1].childNodes[2].innerText
        .split("T")
        .join(" T")
        .split("CBD")
        .join(" CDB");

    const item = {
      id: +id,
      weight: weight,
      price: +price,
      breeder: breeder,
      name: name,
      thcLevel: thcLevel,
      quantity: 1,
    };

    return item;
  }

  deleteItemInfo(evt) {
    const id =
      evt.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.id;

    const itemName =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].innerText.split(
        " |"
      )[0];

    const breeder =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].innerText;

    const weight =
      evt.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0]
        .innerText;

    const price =
      evt.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[4].innerText.replace(
        "$",
        ""
      );

    const selectedItem = {
      id: +id,
      name: itemName,
      breeder: breeder,
      weight: weight,
      price: +price,
    };

    return selectedItem;
  }
}

export default CartUtils;
