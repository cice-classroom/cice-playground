import {customElement, LitElement} from "lit-element";
import {html} from "lit-html";

@customElement('hello-world')
export class HelloWorld extends LitElement {
  render() {
    return html`<h1>Hello worlx</h1>`
  }
}
