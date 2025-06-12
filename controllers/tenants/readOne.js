import Tenant from '../../models/Tenant.js'

export default async (req, res, next) => {
    try {
        let tenant = await Tenant.findOne({ _id:req.params.id })
        if (tenant) {
            return res.status(200).json({
                success: true,
                message: 'Tenant encontrado',
                response: tenant
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Tenant no encontrado',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}