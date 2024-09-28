import { Hono } from "hono";
import auth from "../middleware/authenticate";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { gistInput } from "@suyash_dev/snippetz"; 

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

      const body = await c.req.json();
      const {success} = gistInput.safeParse(body);      

      if(!success)
      {
        return c.text("Gist cannot be empty",411);
      }

      const {content} = body;

      try 
      {
         const createdGist = await prisma.gist.create({
            //@ts-ignore
            data: 
            {
                content: content
            }
         })  
         
         return c.json({
            content: createdGist.content,
            id: createdGist.id
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

gist.get('/getgist/bulk', async (c:any) => 
  {
      const prisma = new PrismaClient({
          datasources: {
            db: {
              url: c.env.DATABASE_URL,  // Ensure DATABASE_URL contains the correct prisma:// URL
            },
          },
        }).$extends(withAccelerate());
        
        const gists = await prisma.gist.findMany();
        try 
        {
          return c.json(gists);
        }
        catch(err) 
        { 
          console.error(err);
          return c.text("Some error occurred",411);
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
    const id = parseInt(c.req.param('id'));

    try 
    {
        const finalgist = await prisma.gist.update({
            where: 
            {
                id: id
            }, 
            data: 
            {
                content: updatedContent.content
            }
        });
        return c.json({
          message: "Updated successfully",
          id: finalgist.id,
          content: finalgist.content
        })
    }
    catch(err)
    { 
        console.log("Error occurred:" + err);
        return c.text('Some error occurred', 411);
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

    const id = parseInt(c.req.param('id'));
    
    try 
    { 
      await prisma.gist.delete({
        where:
        {
          id: id
        }
      })
      return c.text("Deleted Successfully");
    }
    catch 
    {
      return c.text('Some error occurred');
    }
})

export default gist;