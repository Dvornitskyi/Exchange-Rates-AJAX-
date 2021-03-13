const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
const elemUl = document.querySelector('#exchange__list');
const change = document.querySelector('#exchange__change');
console.dir(change);
fetch(url)
  .then(response => response.json())
  .then(function (myJson) { 
   const list = JSON.stringify(myJson);
   const obj = JSON.parse(list);
   change.onclick = function(event) {
     if (!event) {
      event= window.event;
      event.target= window.srcElement;
     }
     const list = this.getElementsByTagName("li");
     for (let i=0; i< list.length; i++) {
      if (list[i]==event.target) {
        elemUl.children[0].innerText=obj[i].ccy;
        elemUl.children[1].innerText="buy " + obj[i].buy;
        elemUl.children[2].innerText="sale " + obj[i].sale;
       return;
      }
     }
    }
  })
  .catch(function(error){
    console.log("ERROR!!!");
    console.error(error);
  })
