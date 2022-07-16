const fs = require("fs");
const path = "./products.json";
const Container = require("./container");
const Create = require('./createJson');

try {
    if (!fs.existsSync(path)) {
        fs.open(path, "w", function (err, file) {
            if (err) throw err;
            console.log("El archivo se abre en modo de escritura.");
        });
    }
} catch (error) {
    console.log(error);
}


//Create(path); //Descomentar para crear el archivo .json

const container = new Container(path);

/* container.getAll().then((data) => { 
  console.log(data);
}
); */ //Descomentar para metodo getAll()

/* container.saveItem({
  title: "Aire Acondicionado",
  price: 45000,
  thumbnail:
    "https://img.freepik.com/foto-gratis/aire-acondicionado-decoracion-interior_74190-6226.jpg?t=st=1648589133~exp=1648589733~hmac=ee74cbc97a1414e2b41aa8c57f5a722271ef5dd39052b2cc17f2a96f339025e6&w=1380",
}) */ //Descomentar para guardar item

/* container.getItemById(1); */ //Descomentar para metodo getById()

/* container.deleteItemById(1).then(() => { 
  container.getAll().then((data) => {
    console.log(data);
  });
}); */ //Descomentar para metodo deleteById()

/* container.deleteAllItems().then(() => { 
  container.getAll().then((data) => {
    console.log(data);
  });
}); */ //Descomentar para metodo deleteAll()