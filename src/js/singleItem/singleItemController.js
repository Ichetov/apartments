import SingleItem from "./singleItemModel";
import * as view from './singleItemView';


export default async function (state) {


  state.singleItem = new SingleItem(state.routeParams);

  await state.singleItem.getItem();
  state.test = state.singleItem.result;
 
  
  view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id));

  document.querySelector('.button-order').addEventListener('click', view.showModal);
  document.querySelector('.modal__close').addEventListener('click', view.hideModal);


  document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.modal')) {
      return null;   
    } else {
      view.hideModal();
    }

  });


  document.querySelector('.modal__form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = view.getInput();
    await state.singleItem.submitForm(formData);

    const response = state.singleItem.response;

    if (response.message === 'Bid Created') {
      alert('Ваша заявка успешно отправлена')
      view.hideModal();
      view.clearInput();
    } else if (response.message === 'Bid Not Created') {
      response.errors.forEach(item => {
        alert(item);
      })
    }
  })


  document.querySelector('.button-favourite').addEventListener('click', function () {
    state.favourites.toggleFav(state.singleItem.id);
   view.toggleFavouriteButton(state.favourites.isFav(state.singleItem.id));
  })

}