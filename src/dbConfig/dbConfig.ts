import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', ()=> {
                console.log('Conectado com sucesso!');
        });
                connection.on('error', (err)=>{
            console.log('Erro mongodb', err);
            process.exit();
        })

    }catch(error){
        console.log('Algo deu errado!')
        console.log(error)
    }
}