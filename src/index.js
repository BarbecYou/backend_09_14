import {veletlen } from './matek.js';
import {NEV, LOREM} from './kulonleges.js';
// import { concat } from 'lodash';
import _ from 'lodash';
import bs from 'bootstrap';

console.log(veletlen(5, 10));
console.log(NEV + ' ' + LOREM);

let t1 = [1, 455, 6];
let t2 = [2, 800, 18];
let t3 = [2];

let osszefuzott = _.concat(t1, t2, t3);
console.log(osszefuzott);

function katt(){
    alert('katt');
}

document.getElementById('gomb').addEventListener('click', katt);
