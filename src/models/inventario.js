const { DataTypes } = require('sequelize');

const sequelize = require('../config/sequelize'); 

const Inventario = sequelize.define('Inventario', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]+$/, 
      len: [7, 7], 
    },
  },
  telefonoMovil: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]+$/, 
      len: [10, 10], 
      startsWith3: function (value) {
        if (value.charAt(0) !== '3') {
          throw new Error('El teléfono móvil debe iniciar con 3.');
        }
      },
    },
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, 
    },
  },
  bodega: {
    type: DataTypes.ENUM('Medellín', 'Cali'),
    allowNull: false,
  },
  oficina: {
    type: DataTypes.ENUM('M3390', 'M1425', 'C4490', 'C1222'),
    allowNull: false,
  },
}, {
  
  indexes: [
    {
      unique: true,
      fields: ['correo'],
    },
  ],
});

module.exports = Inventario;