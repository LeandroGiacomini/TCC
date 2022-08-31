
/*Serve apenas para guardar as informações do banco. 
Lembre-se de estar com o wamp ativo na hora de utilizar e que o nome do banco dentro do
phpmyadmin precisa ser 'testes'

Host = servidor - nesse caso o 'local', dentro da máquina - onde o banco está sendo hospedado
user = usuário do servidor, que, por padrão, está como 'root'
password = senha para acessar o servidor
database = nome do banco dentro do phpmyadmin
*/

export const dbConfig = {
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"testes",
    options: {
        enableArithAbort: true,
        encrypt: false,
        trustServerCertificate:true,
    },
    connectionTimeout: 15000,
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
}