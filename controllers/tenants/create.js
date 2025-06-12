import Tenant from "../../models/Tenant.js";

// solo un administrador puede crear tenants
export default async (req, res, next) => {
    try {
        let nuevoTenant = await Tenant.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Tenant creado',
            response: nuevoTenant
        })
    } catch (error) {
        next(error)
    }
}