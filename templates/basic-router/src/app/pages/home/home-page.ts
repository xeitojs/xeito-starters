import styles from './home-page.module.scss';
import { Component, XeitoComponent, html, State } from "@xeito/core";

@Component({
  selector: 'app-home'
})
export class HomePage extends XeitoComponent {

  @State() count: number = 0;

  render() {
    return html`
      <div>
        <div class=${styles.wrapper}>
          <div class=${styles.container}>

            <img src="https://xeito.dev/images/logo_gradient.svg" class=${styles.logo} />
            <h1>Xeito Framework</h1>

            <button 
              class=${styles.button}
              @click=${()=> this.count++}
            >
              Count is: ${this.count}
            </button>

            <p>Edit <span class=${styles.mono}>/app/pages/home/home-component.ts</span> to test livereload</p>
            
            <div class=${styles.links}>
              <a href="https://github.com/aerotoad/xeito/" target="_blank" class=${styles.link}>Xeito Github</a>
              <span class="divider">|</span>
              <a href="https://xeito.dev/" target="_blank" class=${styles.link}>Documentation</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}
