const json1 = '{"name":"person1","age":5}';

const json2 = '{"name":"peerson1","age":5}';


function compareJSON(json1, json2) {
  
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);
  
  
  if(Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }
  
 
  for(let key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  
  return true;
  
}

const result = compareJSON(json1, json2);
console.log(result);
