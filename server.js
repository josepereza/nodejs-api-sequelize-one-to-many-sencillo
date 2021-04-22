const express= require('express');
const bodyParser=require("body-parser");
const cors=require("cors");
const db = require("./app/models");
  const Routes = require('./app/routes/routes');
const app=express();
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
  app.get('/',(req,res)=>{
      res.json({message:"welcome to Jose app"});
  });
  
  Routes(app);

  //introducir registros

  (async () => {
    await db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
    const usuario = await db.users.create({
      nombre: 'jose',
      poblacion:'ceuti'
     
    });
    const usuario2 = await db.users.create({
      nombre: 'santi',
      poblacion:'alguazas'
    });
    const registro = await db.tutoriales.create({
      title: 'tiempo 1',
      description:'es el tiempo de comer',
      published: true,
      userId:1
    });
    const registro2 = await db.tutoriales.create({
      title: 'tiempo 1',
      description:'es el tiempo de comer',
      published: true,
      userId:2
    });
    const registro3 = await db.tutoriales.create({
      title: 'tiempo 1',
      description:'es el tiempo de comer',
      published: true,
      userId:1
    });
  
    
  })();
  //
 

  
  const PORT=process.env.PORT || 8080;
  app.listen(PORT, ()=>{
      console.log('server is running on port ',PORT)
  })