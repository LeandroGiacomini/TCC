import { ImgModel } from "../models/imgModel.js"

export class ImgCtrl{

    static async Env(req, res){
        const file = req.file

        const teste = await new ImgModel(file).insert()
        return res.status(200).json(teste) 
    } 


}