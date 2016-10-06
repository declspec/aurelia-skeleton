import { Aurelia } from 'aurelia-framework';
// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();
    aurelia.start().then(() => aurelia.setRoot('app/app', document.body));
}