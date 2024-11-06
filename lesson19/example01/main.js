// async function getTodos(){
//     // fetch("https://jsonplaceholder.typicode.com/todos")
// }
 const getTodos = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   console.log(response);
   const data = await response.json();
   console.log(data);
}

 getTodos();

