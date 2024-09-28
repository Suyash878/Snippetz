import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { sign } from "hono/jwt";
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupInput } from "@suyash_dev/snippetz";
import { signinInput } from "@suyash_dev/snippetz";

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
    
    const body: unknown = await c.req.json();  // Parse the JSON body

    // Validate the body using Zod schema (sigupInput)
    const result = signupInput.safeParse(body);  
  
    if (!result.success) {
      // Log validation errors for debugging
      console.log(result.error.errors);
      return c.json({ message: 'Invalid inputs', errors: result.error.errors }, 411);  // Send back validation errors
    }

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
    
})

user.post('/signin', async (c:any) => 
{   
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  
          },
        },
      }).$extends(withAccelerate());

    const {username, password} = await c.req.json();
    const {success} = signinInput.safeParse(c.req.body);

    if(!success)
    {
        return c.text("Invalid inputs",411);
    }
    
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