const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then(renderUser)
  .catch((error) => {
    console.log("Veri çekereken hata oluştu" + error);
  });

function renderUser(data) {
  data.forEach((user) => document.write(user.name + "<br>"));
}

const arac = {
  type: "electric",
  wheel: 4,
};

const tesla = {
  ...arac,
  wheel: 2,
  marka: "tesla",
};
