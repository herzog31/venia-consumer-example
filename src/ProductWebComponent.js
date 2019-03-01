import { createCustomElement, DOMModel, byAttrVal } from "@adobe/react-webcomponent";
import Presentational from "./Presentational";

class ProductModel extends DOMModel {
    @byAttrVal slug;
}

const ProductElement = createCustomElement(Presentational, ProductModel, "container");

if (!window.customElements.get("cif-product")) {
    window.customElements.define("cif-product", ProductElement);
}