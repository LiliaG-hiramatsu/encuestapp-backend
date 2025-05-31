import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        let token = jwt.sign(
            { email: req.usuario.email }, // objeto a convertir en token
            process.env.SECRET_KEY, // palabra que sirve de llave para tokenizar
            { expiresIn: 60*60*24*7 } // expiracion en segundos
        )
        req.token = token
        return next()
    } catch (error) {
        return next(error)
    }
}