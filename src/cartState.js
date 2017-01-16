export default {
  data: {
    carts: {
    }
  },
  addToCart: function(shopId, product) {
    var shopIndex = "shop" + shopId;
    var productIndex = "product" + product.id;
    if (this.data.carts[shopIndex] == undefined) {
      this.data.carts[shopIndex] = {};
    }

    if (this.data.carts[shopIndex][productIndex] != undefined) {
      return
    }

    this.data.carts[shopIndex][productIndex] = product;
  },
  getCart: function(shopId) {
    var shopIndex = "shop" + shopId;
    return this.data.carts[shopIndex];
  },
  incrementItemInCart: function(shopId, productId) {
    var shopIndex = "shop" + shopId;
    var productIndex = "product" + productId;
    this.data.carts[shopIndex][productIndex].quantity = this.data.carts[shopIndex][productIndex].quantity + 1;
  },
  decrementItemInCart: function(shopId, productId) {
    var shopIndex = "shop" + shopId;
    var productIndex = "product" + productId;
    this.data.carts[shopIndex][productIndex].quantity = this.data.carts[shopIndex][productIndex].quantity - 1;
  }
 }