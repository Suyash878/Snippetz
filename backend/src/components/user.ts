import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())
const user = new Hono();

user.post('/signup', async (c):any => 
{
    const {username,password} = await body.username;
})

user.post('/signin', (c):any => 
{
    return c.text('This is the signin route');
})

export default user;