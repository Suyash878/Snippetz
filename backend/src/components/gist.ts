import { Hono } from "hono";
import auth from "../middleware/authenticate";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const gist = new Hono<{
    Bindings:
    {
        DATABASE_URL: string
    }
}>();

gist.post('/creategist',auth,async (c:any) => 
{
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
          },
        },
      }).$extends(withAccelerate());

      const {content,id} = await c.req.json();

      try 
      {
         await prisma.gist.create({
            //@ts-ignore
            data: 
            {
                content: content
            }
         })  
         
         return c.json({
            content: `${content}`,
            id: `${id}`
         });
      }
      catch(err) 
      {
        return c.text('Some error occurred',411);
      }
})

gist.get('/getgist/:id', async (c:any) => 
{
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
          },
        },
      }).$extends(withAccelerate());

    const id = parseInt(c.req.param('id'));

    try 
    {
    const gist = await prisma.gist.findUnique({
        where: 
            {
                id : id
            }
        })
    
        return c.json(gist);
    }
    catch 
    {
        return c.text('Some error occurred', 411);
    }  
})

gist.put('/updategist/:id',auth, async (c:any) => 
{
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
          },
        },
      }).$extends(withAccelerate());

    const updatedContent = await c.req.json();
    const id = parseInt(c.req.params('id'));

    try 
    {
        await prisma.gist.update({
            where: 
            {
                id: id
            }, 
            data: 
            {
                content: updatedContent
            }
        })
    }
    catch 
    {
        c.text('Some error occurred', 411);
    }
})

gist.delete('/delete/:id',auth,async (c:any) => 
{
    const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
          },
        },
      }).$extends(withAccelerate());

    const id = parseInt(c.req.params('id'));
    
    try 
    { 
        

    }
    catch 
    {

    }
})

export default gist;