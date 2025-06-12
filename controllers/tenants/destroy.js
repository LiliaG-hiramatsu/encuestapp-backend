import Tenant from '../../models/Tenant.js'

export default async(req, res, next) => {
    try {
        let deletedTenant = Tenant.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Tenant eliminado',
            response: deletedTenant._id
        })
    } catch (error) {
        next(error)
    }
}