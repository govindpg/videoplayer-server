//cretae json-server library on index.json
const jsonServer=require('json-server') //used to import the json-server ibrary

//create a server using this library
const mediaPlayerServer = jsonServer.create()

//create a path to db.json - (router to link)
const router = jsonServer.router('db.json')

//middleware to convert js to json
const middleware=jsonServer.defaults()

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//by deault json server will also be run on 3000 port so its same as react so it will clash so
//setup port for 
const port= 5000 || process.env.PORT // if we host in the webiste we should have to use the secon one so it will work

//Monitor 4000 to check the data if its coming or not
mediaPlayerServer.listen(port ,()=>{
       console.log(`media player server is listening to ${port}`)
})
