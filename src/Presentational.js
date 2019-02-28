import React, { Component } from "react";
import VeniaProductDetail from "@magento/venia-concept/esm/components/ProductFullDetail";

export default class Presentational extends Component {

  state = {};

  componentDidMount() {
    this.getProduct(
      "/sampleCIFProduct.json"
    );
  }

  async getProduct(url) {
    const res = await fetch(url);
    const {
      data: {
        productDetail: {
          items: [product]
        }
      }
    } = await res.json();
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const productDetail = product ? (
      <VeniaProductDetail
        product={product}
        addToCart={(payload) => { console.log("Add to cart", payload); } }
      />
    ) : null;
    return productDetail;
  }

}