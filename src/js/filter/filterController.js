import * as view from './filterView'
import Filter from './filterModel';


export default async function (state) {


  if (!state.filter) state.filter = new Filter();

  await state.filter.getParams();
  view.render(state.filter.params);


  await state.filter.getResults();
  state.results = state.filter.resilt;

  view.changeButtonText(state.filter.resilt.length);


  const form = document.querySelector('#filter-form');

  form.addEventListener('change', async function (e) {
    e.preventDefault;
    state.filter.query = view.getInput();
    await state.filter.getResults();
    state.results = state.filter.resilt;
    view.changeButtonText(state.filter.resilt.length);
  });


  form.addEventListener('reset', async function () {
    state.filter.query = '';
    await state.filter.getResults();
    view.changeButtonText(state.filter.resilt.length);
    await state.filter.getResults();
    state.results = state.filter.resilt;
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('SUBMIT');
    state.emitter.emit('event:render-listing', {})
  });

}