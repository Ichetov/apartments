
import bids from './../bids/bids.Controller'

export default function (state) {

	document.querySelector('#app').innerHTML = '';
  bids(state);
}
