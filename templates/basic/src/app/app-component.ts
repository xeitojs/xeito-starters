import { Component, XeitoComponent, html, State } from "@xeito/core";

@Component({
  selector: 'app-root'
})
export class AppComponent extends XeitoComponent {

  @State() count: number = 0;

  render() {
    return html`
      <div>
        <div class="wrapper">
          <div class="container">

            <img src="https://xeito.dev/images/logo_gradient.svg" class="logo" />
            <h1>Xeito Framework</h1>

            <button 
              class="button"
              @click=${()=> this.count++}
            >
              Count is: ${this.count}
            </button>

            <p>Edit <span class="mono">/app/pages/home/home-component.ts</span> to test livereload</p>
            
            <div class="links">
              <a href="https://github.com/aerotoad/xeito/" target="_blank" class="link">Xeito Github</a>
              <span class="divider">|</span>
              <a href="https://xeito.dev/" target="_blank" class="link">Documentation</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}
