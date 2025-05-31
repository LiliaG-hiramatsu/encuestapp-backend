import { model, Schema, Types } from 'mongoose';

let collection = 'usuarios'

let usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'moderador'], required: true },
    tenantId: { type: Types.ObjectId, ref: 'tenants', required: function () {
        return this.rol === 'moderador';
    } },
    activo: { type: Boolean, default: true }
})

let usuario = model(collection, usuarioSchema)
export default usuario;