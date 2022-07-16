const fs = require("fs");

class Container {
    constructor(path) {
        this.path = path;
    }

    async getAll() { //Devuelve un array con los objetos presentes en el archivo.
        const data = await fs.promises.readFile(this.path, "utf8", function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            return json;
        });
        return JSON.parse(data);
    }

    async saveItem(obj) { //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
        const json = await this.getAll();
        const id = json.length + 1;
        obj.id = id;
        json.push(obj);
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
        });
        console.log(id);
    }

    getItemById(id) { //Recibe un id y devuelve el objeto con ese id, o null si no está.
        fs.readFile(this.path, "utf8", function (err, data) {
            if (err) throw err;
            const json = JSON.parse(data);
            const item = json.find((item) => item.id === id);
            if (typeof item === "undefined") {
                console.log(null);
            } else {
                console.log(item);
            }
        });
    }

    async deleteItemById(id) { //Elimina del archivo el objeto con el id buscado.
        const json = await this.getAll();
        const newArray = json.filter((item) => item.id !== id);
        fs.writeFileSync(this.path, JSON.stringify(newArray), function (err) {
            if (err) throw err;
            console.log("Archivo guardado correctamente.");
        });
        ;
    }

    async deleteAllItems() {  //Elimina todos los objetos presentes en el archivo.
        const json = await this.getAll();
        for (let i = json.length; i > 0; i--) {
            json.pop();
        }
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log("Archivo guardado correctamente.");
        });
    }
}

module.exports = Container;