import { Component, XeitoComponent, html } from '@xeito/core';

@Component({
  selector: 'app-root',
})
export class AppComponent extends XeitoComponent {

  render() {
    return html`
      <router-slot/>
    `;
  }

}
