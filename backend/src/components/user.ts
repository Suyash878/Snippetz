import { Hono } from "hono";

const user = new Hono();

user.post('/signup', (c):any => 
{
    return c.text('this is the signup route');
})

user.post('/signin', (c):any => 
{
    return c.text('This is the signin route');
})

export default user;