import favouritesCards from '../favoiritesCard/favoiritesCardsController';

export default function (state) {
  document.querySelector('#app').innerHTML = '';
favouritesCards(state);

}
