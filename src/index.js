import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputEl.addEventListener('input', (event) => {
   const inputTerm = event.targer.value.trim();

if( inputTerm === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
}

});








