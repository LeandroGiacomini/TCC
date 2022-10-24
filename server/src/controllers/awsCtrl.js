import { Aws } from "../models/awsmodel.js"

export class AwsCtrl{

    static async testeEnv(req, res){
        const file = req.file
        const teste = await new Aws(file).insert()
        return res.status(200).json(teste) 
    } 


}