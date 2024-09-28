"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gistInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string().trim().email(),
    password: zod_1.z.string().min(6),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string()
});
exports.signinInput = zod_1.z.object({
    username: zod_1.z.string().email().trim(),
    password: zod_1.z.string().min(6)
});
exports.gistInput = zod_1.z.object({
    content: zod_1.z.string().min(1)
});
