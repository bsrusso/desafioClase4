const fs = require("fs");

const Create = (path) => {
    let obj = [
        {
            title: "Television",
            price: 55000,
            thumbnail:
                "https://img.freepik.com/vector-gratis/pantalla-tv-panel-lcd-negro-moderno-hdtv-pantalla-panoramica_1441-1633.jpg?w=1380&t=st=1648589230~exp=1648589830~hmac=4ca7811f65dd62e50ad6905013ae6ce21703a6fec568dd5f0350f0cc96afceec",
            id: 1,
        },
        {
            title: "Notebook",
            price: 95000,
            thumbnail:
                "https://img.freepik.com/vector-gratis/ordenador-portatil-pantalla-blanca-teclado_107791-1185.jpg?t=st=1648589267~exp=1648589867~hmac=449aa6c032e1d153cd5fea11f056201b8eec901e82a840c818c2ceedb1769be1&w=1380",
            id: 2,
        },
        {
            title: "Impresora",
            price: 20000,
            thumbnail:
                "https://img.freepik.com/vector-gratis/impresora-inyeccion-tinta-realista-isoalted-sobre-fondo-blanco_208593-71.jpg?w=996",
            id: 3,
        },
        {
            title: "Smartphone",
            price: 60000,
            thumbnail:
                "https://firebasestorage.googleapis.com/v0/b/gamestore-e859c.appspot.com/o/re4Game.jpg?alt=media&token=7ehttps://img.freepik.com/psd-gratis/maqueta-chat-disposicion-dispositivos_23-2149112957.jpg?w=1060b3f08a-f79e-4223-ac38-79df6ec1800f",
            id: 4,
        },
    ];
    fs.writeFile(path, JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log("Archivo guardado correctamente.");
    });
};

module.exports = Create;