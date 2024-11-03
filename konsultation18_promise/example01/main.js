// fetch('url', {
//     headers: {
// "Content-Type": "application/json",
// "Autorisation": "Basic" + btoa(globalUsername + ":" + globalPassword),

//     },
//     metod: "Post",
//     body: moveBody
// })
// .then(response => console.log(response.status) || response)
// .then(response => console.log())
// .then(body => console.log(body))

fetch("https://api.github.com/users/alex770307/repos")
.then((response) => {
    return response.json();

})
.then((data) =>{
   
    doSomethingWidhData(data)
})

function doSomethingWidhData(repos){
console.log(repos);
console.log(repos[0]);
const bodyElement = document.querySelector('body');

const elementFromRepos = repos.map(
    (element) => {
    //return element.name
//bodyElement.append(element.name)
const liElement = document.createElement('li'); //.textContent = element.name;
liElement.textContent = element.name;
return liElement;
})

console.log(elementFromRepos);
const liParentElement = document.createElement('ul');
liParentElement.append(...elementFromRepos);
document.body.append(liParentElement);
}