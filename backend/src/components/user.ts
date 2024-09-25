import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { sign } from "hono/jwt";
import { withAccelerate } from '@prisma/extension-accelerate'

const user = new Hono<{
    Bindings:
    {
        DATABASE_URL: string;
    }
}>();

user.post('/signup', async (c:any) => 
{   
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
          },
        },
      }).$extends(withAccelerate());

    const {username,password} = await c.req.json();
    
    // Need to add schema validation (USING ZOD) and password hashing.
    try 
    {
        await prisma.user.create({
            //@ts-ignore
            data: 
            {
                username: username,
                password: password,
            }
        })

        return c.text('Signed Up!');
    }    
    catch(err)
    {
        console.log(err);
        c.status(411);
        return c.text('User already exists');
    }
    // also assign a JWT.

})

user.post('/signin', async (c:any) => 
{
    const {username, password} = await c.req.json();
    
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  
          },
        },
      }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
        where:
        {
            username: username
        }
    })

    if(!user || user.password !== password )
    {
        return c.text('Invalid credentials',401);
    }

    try 
    {
        const token = await sign({ id: user.id, username:username, password: password }, c.env.JWT_SECRET);
        return c.json({token});
    }

    catch(err) 
    {   
        c.text('Some error occurred',500);
    }
})

export default user;