const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  
  switch(ctx.url){
    case '/hello': ctx.body = "哈囉"
    break
    case '/name': ctx.body = "劉鳳安"
    break
    case '/id': ctx.body = "110510502"
    break
    default : ctx.status = 404
  }
});

if (!module.parent) app.listen(3000);