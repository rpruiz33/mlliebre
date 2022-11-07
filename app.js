const express=require('express');
const path=require('path');

const app = express();
const publicPath= path.resolve('./public');
 
app.use( express.static(publicPath));

let PORT=process.env.PORT || 3000

app.listen(PORT,() => {
console.log('servidor corriendo en el puerto'+ PORT);

});
app.get('/',(req,res) => {
res.sendFile(path.resolve(__dirname,'./views/home.html'));
})
app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
    })