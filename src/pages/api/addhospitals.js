import Hospital from "../../models/Hospital"
import connectDb from "../../middleware/mongoose"


const handler =  async (req, res)=> {
    if (req.method == 'POST'){
        for (let i=0; i<req.body.length; i++){
        let h = new Hospital({
             title: req.body[i].title ,
             slug: req.body[i].slug ,
             desc: req.body[i].desc ,
             img: req.body[i].img ,
             profile: req.body[i].profile ,
             service1: req.body[i].service1 ,
             service2: req.body[i].service2,
             service3: req.body[i].service3 ,
             service4: req.body[i].service4 ,
             service5: req.body[i].service5 ,
             company: req.body[i].company,
             locationimg: req.body[i].locationimg,
             place: req.body[i].place ,
             location: req.body[i].location ,
             category: req.body[i].category ,
             date: req.body[i].date ,
             slot: req.body[i].slot ,
             price: req.body[i].price ,
             availableQty: req.body[i].availableQty ,
        })
        await h.save()
    }
    res.status(200).json({ success:"sucess"})
        
    }
    else{
        res.status(400).json({ error: "This method is not allowed"})
    }
    
}

export default connectDb(handler);