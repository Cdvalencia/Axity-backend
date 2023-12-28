  const Inventario = require('../models/inventario');

  let arrayPruebas= [  
    {"cantidadVendida":2,"NombreProducto":"Té Dharamsala","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"18"},
    {"cantidadVendida":20,"NombreProducto":"Cerveza tibetana Barley","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"19"},
    {"cantidadVendida":12,"NombreProducto":"Sirope de regaliz","Proveedor":"Exotic Liquids","Categoria":"Condimentos","PrecioUnidad":"10"},
    {"cantidadVendida":21,"NombreProducto":"Especias Cajun del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"22"},
    {"cantidadVendida":2,"NombreProducto":"Mezcla Gumbo del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"21,35"},
    {"cantidadVendida":32,"NombreProducto":"Mermelada de grosellas de la abuela","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"25"},
    {"cantidadVendida":4,"NombreProducto":"Peras secas orgánicas del tío Bob","Proveedor":"Grandma Kelly's Homestead","Categoria":"Frutas/Verduras","PrecioUnidad":"30"},
    {"cantidadVendida":32,"NombreProducto":"Salsa de arándanos Northwoods","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"40"},
    {"cantidadVendida":5,"NombreProducto":"Buey Mishi Kobe","Proveedor":"Tokyo Traders","Categoria":"Carnes","PrecioUnidad":"97"},
    {"cantidadVendida":4,"NombreProducto":"Pez espada","Proveedor":"Tokyo Traders","Categoria":"Pescado/Marisco","PrecioUnidad":"31"},
    {"cantidadVendida":7,"NombreProducto":"Queso Cabrales","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"21"},
    {"cantidadVendida":65,"NombreProducto":"Queso Manchego La Pastora","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"38"},
    {"cantidadVendida":8,"NombreProducto":"Algas Konbu","Proveedor":"Mayumi's","Categoria":"Pescado/Marisco","PrecioUnidad":"6"},
    {"cantidadVendida":6,"NombreProducto":"Cuajada de judías","Proveedor":"Mayumi's","Categoria":"Frutas/Verduras","PrecioUnidad":"23,25"},
    {"cantidadVendida":7,"NombreProducto":"Salsa de soja baja en sodio","Proveedor":"Mayumi's","Categoria":"Condimentos","PrecioUnidad":"15,5"},
    {"cantidadVendida":0,"NombreProducto":"Postre de merengue Pavlova","Proveedor":"Pavlova, Ltd.","Categoria":"Repostería","PrecioUnidad":"17,45"},
    {"cantidadVendida":7,"NombreProducto":"Cordero Alice Springs","Proveedor":"Pavlova, Ltd.","Categoria":"Carnes","PrecioUnidad":"39"},
    {"cantidadVendida":9,"NombreProducto":"Langostinos tigre Carnarvon","Proveedor":"Pavlova, Ltd.","Categoria":"Pescado/Marisco","PrecioUnidad":"62,5"},
    {"cantidadVendida":8,"NombreProducto":"Pastas de té de chocolate","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"9,2"},
    {"cantidadVendida":6,"NombreProducto":"Mermelada de Sir Rodney's","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"81"}
  ];

module.exports = class inventario {

  static all(data, callback) {    
    Inventario.findAll()
    .then(inventario => {      
      callback(inventario);      
    })
    .catch(error => {
      console.error('Error al buscar inventario por ID:', error);
    });
  }
  
  static item(data, callback) {
    console.log(data);    
    Inventario.findByPk(1)
    .then(inventario => {
      if (inventario) {
        callback(inventario.toJSON());
      } else {
        callback('Inventario no encontrado');
      }
    })
    .catch(error => {
      console.error('Error al buscar inventario por ID:', error);
    });
  }

  static async create(data, callback) {   
    console.log("data",data);    
    const nuevoInventario = await Inventario.create(data);
    console.log(nuevoInventario);
    
    callback(nuevoInventario.toJSON());
  }

  static async edit(data, callback) {
    const [numFilasActualizadas, usuariosActualizados] = await Inventario.update(data, {
      where: {
        id: data.id
      },
      returning: true,
    });
    callback(data);
  }  
  
  static n1(data, callback) {    
    let palabra = "Computador";    
    let arregloOriginal = palabra.split('');        
    let arregloReverso = arregloOriginal.slice().reverse();    
    callback(arregloReverso);
  }
  static n2(data, callback) {
    let longitud = 8;
    let caracteres = "qwertyuiopasdfghjklzxcvbnm0987654321QWERTYUIOPASDFGHJKLZXCVBNM";
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    callback(contrasena);
  }

  
  static n3(data, callback) {
    let productoMasVendido = null;
    let cantidadMasVendida = 0;
    for (let i = 0; i < arrayPruebas.length; i++) {
      if (arrayPruebas[i].cantidadVendida > cantidadMasVendida) {
          cantidadMasVendida = arrayPruebas[i].cantidadVendida;
          productoMasVendido = arrayPruebas[i];
      }
    }
    callback(productoMasVendido);
  }
  static n4(data, callback) {
    let ventasPorProveedor = {};
    for (let i = 0; i < arrayPruebas.length; i++) {
        let proveedor = arrayPruebas[i].Proveedor;
        let cantidadVendida = arrayPruebas[i].cantidadVendida;
        if (!ventasPorProveedor[proveedor]) {
            ventasPorProveedor[proveedor] = 0;
        }
        ventasPorProveedor[proveedor] += cantidadVendida;
    }    
    let arrayVentasPorProveedor = Object.entries(ventasPorProveedor).map(([proveedor, cantidad]) => ({ proveedor, cantidad }));    
    arrayVentasPorProveedor.sort((a, b) => b.cantidad - a.cantidad);    
    callback(arrayVentasPorProveedor);
  }

  static n5(data, callback) {
    let productoMayorGanancia = null;
    let mayorGanancia = 0;
    for (let i = 0; i < arrayPruebas.length; i++) {
        let cantidadVendida = arrayPruebas[i].cantidadVendida;
        let precioUnidad = parseFloat(arrayPruebas[i].PrecioUnidad.replace(',', '.')); 
        let ganancia = cantidadVendida * precioUnidad;
        if (ganancia > mayorGanancia) {
            mayorGanancia = ganancia;
            productoMayorGanancia = arrayPruebas[i];
        }
    }
    callback(productoMayorGanancia);
  }

  static n6(data, callback) {
    let gananciasPorCategoria = {};
    for (let i = 0; i < arrayPruebas.length; i++) {
        let categoria = arrayPruebas[i].Categoria;
        let cantidadVendida = arrayPruebas[i].cantidadVendida;
        let precioUnidad = parseFloat(arrayPruebas[i].PrecioUnidad.replace(',', '.')); 
        let ganancia = cantidadVendida * precioUnidad;
        if (!gananciasPorCategoria[categoria]) {
            gananciasPorCategoria[categoria] = 0;
        }
        gananciasPorCategoria[categoria] += ganancia;
    }
    callback(gananciasPorCategoria);
  }

};
