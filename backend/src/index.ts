import { Hono } from 'hono'
import user from './components/user';
import gist from './components/gist';

const app = new Hono()

app.get('/api/v1', (c):any => 
{
	return c.text('Server is working!');
})

app.route('/api/v1/user', user);
app.route('/api/v1/gist', gist);

export default app;

