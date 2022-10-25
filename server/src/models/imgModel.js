import { poolConnect } from "../../poolConnect.js"

const con = await poolConnect()

// location, key

export class ImgModel{
    constructor(file){
        this.file = file
    }

    async insert(){
        try {
            console.log(this.file)
            /*const { rowsAffected } = con.query(`insert into img values('${this.file.filename}', '${this.file.originalname}', 
            '${this.file.size}', '${this.file.url}', 1, '', '')`)*/
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
}