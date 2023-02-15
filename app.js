const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const cors = require('cors')

app.set('view engine', 'ejs');
app.set('views','views');

const sequelize=require('./util/database');

const adminRoutes=require('./routes/admin');

const adminController=require('./controller/admin');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.use(adminRoutes);

sequelize.sync().then(result=>{
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
})

