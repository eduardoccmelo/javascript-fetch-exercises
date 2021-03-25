const url = "https://.typicode.com/todos/x";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("broken");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`The Error is: ${error}`);
  });
