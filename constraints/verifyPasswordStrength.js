//Activamos el medidor de fortaleza del password
const zxcvbn = require('zxcvbn');


module.exports = password => {
    //Utilizamos el medidor antes cargado 
    //de esta manera sacamos el score del pasword
    const score = zxcvbn(password).score;
    if(score < 2){
        //Es un passwor debil
        return Promise.reject({
            message: 'El password es muy debil',
            score
        })
    }
    return Promise.resolve({
        message: 'El password tiene una fortaleza aceptable',
        score
    });
};