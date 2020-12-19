import { css, customElement, html, LitElement } from 'lit-element'
import { general } from './general'

@customElement('app-button')
export class AppButton extends LitElement {
  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<button type="${this.submit ? 'submit' : 'button'}"><slot></slot></button>`
  }
}
