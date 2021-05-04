//CREAR ARRAY VACIO PARA LISTA DE PLATOS

let listaPlatos = [];


// CLASE PARA CONSTRUIR LOS PLATOS
class Plato {
    constructor (id, nombre, categoria, precio, img, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.img = img;
        this.descripcion = descripcion;
    }
}

// CREACION DE PLATOS
const plato1 = new Plato (1, 'Salmón gravlax', 'entrada', 690, './images/item-1.jpeg' , 'Salmón estilo gravlax, Zuchini marinado y queso de cabra');

const plato2 = new Plato (2, 'Provoleta ahumada', 'entrada', 620, './images/item-2.jpeg' , 'Provoleta ahumada, tomates cherrys, salsa criolla');
const plato3 = new Plato (3, 'Burratina artesanal', 'entrada', 650, './images/item-3.jpeg' , 'Burratina artesanal, tomate cherry, jamon crudo, reducción de aceto y miel');
const plato4 = new Plato (4, 'Sopa', 'entrada', 550, './images/item-4.jpeg' , 'Sopa crema de calabaza y jengibre');
const plato5 = new Plato (5, 'Ensalada del dia', 'entrada', 500, './images/item-5.jpeg' , 'Ensalada del dia');
const plato6 = new Plato (6, 'Bondiola de cerdo', 'principal', 1100, './images/item-6.jpeg' , 'Bondiola de cerdo laqueada aromatizada con romero y miel, camote asados');
const plato7 = new Plato (7, 'Ojo de bife', 'principal', 1200, './images/item-7.jpeg' , 'Ojo de bife, verduras al rescoldo con salsa criolla ahumada y papas rusticas en manteca de hierbas');
const plato8 = new Plato (8, 'Milanesa', 'principal', 950, './images/item-8.jpeg' , 'Milanesa de peceto gratinada con verdeo y panceta, papas rusticas y salsa criolla');
const plato9 = new Plato (9, 'Conejo', 'principal', 1100, './images/item-9.jpeg' , 'Conejo confit perfumado en rosse, calabacín asado pimientos y hongos portobello');
const plato10 = new Plato (10, 'Listón de salmón grillado', 'principal', 1250, './images/item-10.jpeg' , 'Listón de salmón grillado, calabacín asado y ­tomates confitados');
const plato11 = new Plato (11, 'Canelones', 'principal', 890, './images/item-11.jpeg' , 'Canelones de humita gratinados con crema parmesano y verdeo');
const plato12 = new Plato (12, 'Cintas Nero di seppia', 'principal', 990, './images/item-12.jpeg' , 'Cintas Nero di seppia langostinos, tomates Cherry y manteca de hierbas');
const plato13 = new Plato (13, 'Pasta corta', 'principal', 880, './images/item-13.jpeg' , 'Pasta corta a la siciliana con tomates, albahaca, aceitunas negras y parmesano');
const plato14 = new Plato (14, 'Risotto', 'principal', 990, './images/item-14.jpeg' , 'Cremoso risotto de camarones  y mejillones');
const plato15 = new Plato (15, 'Húmedo de chocolate', 'postre', 520, './images/item-15.jpeg' , 'Húmedo de chocolate con crema de chocolate Bariloche y salsa de frambuesas');
const plato16 = new Plato (16, 'Tiramisu', 'postre', 520, './images/item-16.jpeg' , 'Clasico tiramisu');
const plato17 = new Plato (17, 'Flan de coco', 'postre', 480, './images/item-17.jpeg' , 'Flan de coco, confirutas de frambuesas, ganache de chocolate blanco');
const plato18 = new Plato (18, 'Cremas heladas', 'postre', 400, './images/item-18.jpeg' , 'Cremas heladas');

// AGREGAR PLATOS AL ARRAY LISTA DE PLATOS
listaPlatos.push(plato1, plato2, plato3, plato4, plato5,plato6, plato7, plato8, plato9, plato10, plato11, plato12, plato13, plato14, plato15, plato16, plato17, plato18);

//console.log(listaPlatos)

//CREAR CONTENIDO PARA LA WEB

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");



// CARGA DE CONTENIDO 
window.addEventListener('DOMContentLoaded', function()  {
    displayMenuItems(listaPlatos);
    displayMenuBtns();
});

// CARGA DE FILTROS



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt="${item.nombre}">
        <div class="item-info">
            <header>
                <h4>${item.nombre}</h4>
                <h4>$ ${item.precio}</h4>
            </header>
            <p class="item-text">${item.descripcion}</p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
    const categories = listaPlatos.reduce(function(values, item) {
        if (!values.includes(item.categoria)) {
            values.push(item.categoria);
        }
        return values;
    },['todos']
    ); 
    const categoriesBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>` 
    }).join("");
btnContainer.innerHTML = categoriesBtns;
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;

const menuCategory = listaPlatos.filter(function(menuItem){
    // console.log(menuItem.categoria)
    if (menuItem.categoria === category) {
        return menuItem;
    }
})
// console.log(menuCategory);
    if (category === "todos"){
        displayMenuItems(listaPlatos);
    }
    else displayMenuItems(menuCategory);
    })
})
};


// investigar sobre ajax