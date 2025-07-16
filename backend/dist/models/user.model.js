"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 1000 },
    freeSpins: { type: Number, default: 0 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt_1.default.hash(this.password, 10);
    }
    next();
});
userSchema.methods.comparePassword = function (candidate) {
    return bcrypt_1.default.compare(candidate, this.password);
};
exports.User = (0, mongoose_1.model)('User', userSchema);
