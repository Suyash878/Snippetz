import { verify } from 'hono/jwt'
import hono from 'hono'


const auth = async (c:any,next: any) => 
{
    const token = c.req.header('Authorization');

    if(!token)
    {
        return c.text('No token assigned');
    }

    try 
    {
        const payload = await verify(token, c.env.JWT_SECRET);
        c.set('user',payload);
        await next();
    }

    catch 
    {
        return c.status(401).text('Invalid token');
    }
}

export default auth;