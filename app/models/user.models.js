
module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
      nombre: {
        type: Sequelize.STRING
      },
      poblacion: {
        type: Sequelize.STRING
      }
    });
    
    
    return User;
  };