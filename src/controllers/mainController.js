const platos = require('../data/platosdb')


module.exports = {
    index : (req, res) => {
       return res.render('index', {
           platos : platos
       });
    },

    detail : (req, res) => {
        let plato = platos.find(plato => plato.id === +req.params.id)

        return res.render('detalleMenu', {
            plato,
        });
     }
}