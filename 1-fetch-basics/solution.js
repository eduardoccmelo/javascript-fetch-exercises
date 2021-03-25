fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  });
