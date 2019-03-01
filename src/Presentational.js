import React, { Component } from "react";
import { string } from 'prop-types';
import VeniaProductDetail from "@magento/venia-concept/esm/components/ProductFullDetail";

export default class Presentational extends Component {

  // TODO: Add some sample properties to expose via react-webcomponent

  static propTypes = {
    slug: string.isRequired
  };

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