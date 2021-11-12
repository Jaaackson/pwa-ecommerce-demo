/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Product from 'product';

//   constructor (sku, title, price, image, description='') {

// Normally you would get these from a server
export const products = [
  new Product('apple', 'Honeycrisp Apples', 1.44, 'apple.jpg',
    'Aisle 4'),
  new Product('banana', 'Organic Banana', 0.26, 'banana.jpg',
    'Aisle 4'),
    new Product('peanutbutter', 'Jif Creamy Peanut Butter', 7.17, 'jif.jpg',
    'Aisle 4'),
    new Product('banana', 'Red Seedless Grapes, 2 lb', 3.50, 'grape.jpg',
    'Aisle 4'),
];

export function findProduct(sku, searchRange = products) {
  return searchRange.find(product => product.sku === sku);
}
