import Tenant from "../../models/Tenant.js";

export default async (req, res, next) => {
    try {
        let tenants = await Tenant.find()
        return res.status(200).json({
            success: true,
            message: 'Tenants encontrados',
            response: tenants
        })
    } catch (error) {
        next(error)
    }
}