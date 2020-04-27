'use strict';
//destructuramos el llamdo
const {
  verifyPasswordLength,verifyPasswordStrength
} = require('./constraints')

module.exports.password = async event => {
  try{
    //Recojemos los parametros
    const {password} = event.pathParameters;
    //Probamos la longitud del password
    await verifyPasswordLength(password);
    //probemos la fortaleza del password
    const {score} = await verifyPasswordStrength(password);
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: `Password score: ${score}`
      })
    }
  }catch(e){
    return{
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${e.message}`,
        score: e.score
      })
    }
  }

};
