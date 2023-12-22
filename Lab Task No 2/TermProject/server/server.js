import app from './app.js'
import { connectdb } from './data/database.js'

connectdb()

app.listen(process.env.PORT,()=>{
    console.log("Listening At 4000")
})