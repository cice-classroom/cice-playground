import { customElement, html, LitElement } from 'lit-element'

@customElement("app-button")
export class Button extends LitElement {
  render(){
    return html`<button><slot></slot></button>`
  }
}
