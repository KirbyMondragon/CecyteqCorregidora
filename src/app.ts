import { join } from 'path'
import { createBot, createProvider, createFlow, addKeyword, utils } from '@builderbot/bot'
import { MongoAdapter as Database } from '@builderbot/database-mongo'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import InformacionInstitucional from './flows/InformacionInstitucional'
import DesarrolloProfesional from './flows/DesarrolloProfesional'
import ServiciosAdicionales from './flows/ServiciosAdicionales'
import EstudiosTalleres from './flows/EstudiosTalleres'



const PORT = process.env.PORT ?? 3008



 const welcomeFlow = addKeyword<Provider, Database>(['hi', 'hello', 'hola'])
    .addAnswer(`🎓 ¡Hola! Bienvenid@ a tu guía virtual en el Cecyteq 6 Corregidora.`)
    .addAnswer(
        [
            '> 📋 Menú Principal: ',
            '1️⃣ Dirección / Subdirección (Información Institucional 🏛️)',
            '2️⃣ Estudios y Talleres 📚',
            '3️⃣ Desarrollo Profesional 🚀',
            '4️⃣ Servicios Adicionales 🛠️',
            '5️⃣ Salir 🚪'

        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack , endFlow}) => {
            const validOptions = ["1","2","3","4"];
            if (!validOptions.includes(ctx.body)) {
                return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
            }
            if(ctx.body === "5"){
                return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
            }
    
        },
        [InformacionInstitucional , EstudiosTalleres, ServiciosAdicionales, DesarrolloProfesional]
    )




const main = async () => {
    const adapterFlow = createFlow([welcomeFlow])
    
    const adapterProvider = createProvider(Provider)
        const adapterDB = new Database({
        dbUri: 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5',
        dbName: 'Preparatoria',
    })

    const { httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })


    httpServer(+PORT)
}

main()


export default welcomeFlow;