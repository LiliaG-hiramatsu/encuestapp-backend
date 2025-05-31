import { model, Schema } from 'mongoose';

let collection = 'tenants'

let tenantSchema = new Schema({
  nombre: { type: String, required: true },
  emailContacto: { type: String, required: true },
  plan: { type: String, enum: ['free', 'basic', 'premium'], default: 'free' },
  activo: { type: Boolean, default: true },
  fechaAlta: { type: Date, default: Date.now }
});

let tenant = model(collection, tenantSchema)
export default tenant;