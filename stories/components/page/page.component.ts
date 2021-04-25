import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sage-page',
  template: `<article>
    <sage-navbar></sage-navbar>
    <section>
      <h2>Page with Sage Angular</h2>
    </section>
    <sage-footer [version]="version"></sage-footer>
  </article>`,
  styleUrls: ['./page.scss'],
})
export default class PageComponent {
  // @Input()
  // version = '2.0.0';

  // @Output()
  // onLogin = new EventEmitter<Event>();

  // @Output()
  // onLogout = new EventEmitter<Event>();

  // @Output()
  // onCreateAccount = new EventEmitter<Event>();
}

// export const Page = ({ version }) => (
//   // <article>
//   //   <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

// );
// Page.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Page.defaultProps = {
//   user: null,
// };
