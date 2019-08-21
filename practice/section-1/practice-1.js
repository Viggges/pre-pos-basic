'use strict';

function find(collection, element) {
  if(collection.indexOf(element)!==-1){
    return collection[collection.indexOf(element)];
  }else{
    return '找不到';
  }
  
}
