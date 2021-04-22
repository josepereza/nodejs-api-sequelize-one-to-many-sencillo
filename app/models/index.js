const dbConfig=require('../config/db.config');
const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.tutoriales=require("./tutorial.models")(sequelize,Sequelize);
db.users=require("./user.models")(sequelize,Sequelize);
db.users.hasMany(db.tutoriales,
  {
    foreignKey: 'userId',
  as:'tutoriales'}
  );
   db.tutoriales.belongsTo(db.users, {
    foreignKey: 'userId',
  as:'user'});
module.exports=db;
