console.log('my name is nisha yadav');
//let element = document.getElementById('myfirst');
//element = element.className;
//element = element.childNodes;
//element=element.parentNode;
//element.style.color='red';
//element.innerText = 'Nisha is a good girl';
//element.innerHTML = '<b>Nisha is a good girl</b>';
//console.log(element);
// let element = document.createElement('li');
// let text = document.createTextNode('i am a text node');
// element.appendChild(text);
// //Add a class name to the li element
// element.className = 'childul';
// element.id ='createdLi';
// element.setAttribute('title','mytitle');
// //element.innerText = 'Hello this is created by Nisha';

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);
document.getElementById('heading').addEventListener('click',function(e){
    let variable;
    console.log('you have clicked the heading');
    variable =e.target;
    //location.href = '//codewithharry.com';
    console.log(variable);
});