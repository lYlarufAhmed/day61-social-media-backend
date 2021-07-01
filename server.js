const mg = require('mongoose')
const app = require('./index')


const connectDB = async () => {
    await mg.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

const disconnect = async ()=> await mg.disconnect()

app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log('Server is listening to', process.env.PORT)
})

module.exports = {
    connectDB, disconnect
}