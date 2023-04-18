const productos = [
    {
        id: "1",
        nombre: "Barbijo",
        precio: 80,
        img: "../img/barbijo.webp",
        idCat: "2",
    },
    {
        id: "2",
        nombre: "Perfume",
        precio: 120,
        img: "../img/perfume.webp",
        idCat: "2",
    },
    {
        id: "3",
        nombre: "Guante",
        precio: 60,
        img: "../img/guante.webp",
        idCat: "3",
    },
    {
        id: "4",
        nombre: "Cepillo",
        precio: 140,
        img: "../img/cepillo.webp",
        idCat: "3",
    },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100);
    });
};

//Creamos una nueva función similar pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id === id);
            resolve(producto);
        }, 100);
    });
};

//Creamos una nueva función que retorna toda la categoría.

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter(
                (prod) => prod.idCat === idCategoria
            );
            resolve(productosCategoria);
        }, 100);
    });
};
