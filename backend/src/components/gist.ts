import { Hono } from "hono";

const gist = new Hono();

gist.post('/',(c):any => 
{
    return c.text('posting a gist!');
})

gist.get('/getgist/:id',(c):any => 
{
    return c.text('posting a gist!');
})

gist.put('/:id',(c):any => 
{
    return c.text('posting a gist!');
})

gist.delete('/:id',(c):any => 
{
    return c.text('posting a gist!');
})

export default gist;