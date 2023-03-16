import Hospital from "../../models/Hospital"
import connectDb from "../../middleware/mongoose"


const handler =  async (req, res)=> {
    let hospitals = await Hospital.find()
    
   
    
    res.status(200).json({hospitals})
}

export default connectDb(handler);