import filter from './../filter/filterController';
import listing from './../listing/listingController';


export default async function (state) {
  document.querySelector('#app').innerHTML = '';
  await filter(state);
  listing(state);
}



// function Mix(name) {
//   this.name = name;
// }

// Mix.prototype.hes = function () {
//   this.key = 6;
//   console.log(this.key);
  
// }

// const rex = new Mix('Alex');

// console.log(rex);
// console.log(rex.hes());
