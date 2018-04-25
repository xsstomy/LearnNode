const Koa = require("koa");
const static = require("koa-static-cache");
const path = require("path");

const app = new Koa();
const staticPath = path.join(__dirname, "./static"); // 设置静态资源根目录

app.use(async function (ctx, next) {
  console.log(new Date + "  request url: " + ctx.req.url + "\n");
  return (await static(staticPath, {
    maxage: 1000000000
  })).call(null, ctx, next)
});

app.use(async (ctx, next) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
// 访问 http://localhost:3000/1.jpg