import {z} from "zod"

export const signupInput = z.object({
    username: z.string().trim().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})

export const signinInput = z.object({
    username: z.string().email().trim(),
    password: z.string().min(6) 
})

export const gistInput = z.object({
    content: z.string().min(1)
}) 

export type GistInput = z.infer<typeof gistInput>
export type SignupInput = z.infer<typeof signupInput >
export type SigninInput = z.infer<typeof signinInput>