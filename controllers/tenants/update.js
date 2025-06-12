import Tenant from "../../models/Tenant.js";

export default async(req, res, next) => {
    try {
        let updatedTenant = await Tenant.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        )
        return res.status(200).json({
            success: true,
            message: 'Tenant actualizado',
            response: updatedTenant
        })
    } catch (error) {
        next(error)
    }
}