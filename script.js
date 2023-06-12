var form = document.getElementById("postForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let text = document.getElementById("text").value;
  let text_error = document.getElementById("text_error");
  let name_error = document.getElementById("name_error");

  if (name == "") {
    name_error.innerHTML = "Name is required";
    name_error.style.color = "red";
  }
  if (text == "") {
    text_error.innerHTML = "Text is required";
    text_error.style.color = "red";
  }

  if (name != "") {
    name_error.innerHTML = "";
  }
  if (text != "") {
    text_error.innerHTML = "";
  }
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: name,
      body: text,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let op = document.getElementById("test");
      let output = `The entered name is ${data.title} and text is ${data.body}`;
      if (name == "") {
        op.innerHTML = "";
      } else if (text == "") {
        op.innerHTML = "";
      } else {
        op.innerHTML = output;
      }
    });
  form.reset();
});
