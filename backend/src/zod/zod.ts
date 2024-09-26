import z from "zod"

export const sigupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})

export const gistInput = z.object({
    content: z.string().min(1)
}) 

