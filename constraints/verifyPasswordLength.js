
module.exports = password => {
    if(password.length < 6){
        return Promise.reject({
            message: 'El password es demaciado corto'
        })
    }
    return Promise.resolve('El password pasa la validación');
};