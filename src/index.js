const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');

var cors = require('cors')
// app.use(cors())
app.use(express.json());
const corsOrigin ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(morgan('dev'));


//Routes
app.use(require('./routes/routes'));

//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});
