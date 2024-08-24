import { addKeyword } from "@builderbot/bot";
import welcomeFlow from "~/app";
import { join } from 'path'

const Vinculacion = addKeyword(['4'])
.addAnswer(`> 🤝 Vinculación`)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1RsUGttQd7TbuYTauYqmeZe4BinivYhOF?usp=sharing 🔗 ',
        ' ',
        '1️⃣ Regresar ↩️ ',
        '2️⃣ Salir 🚪',

    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack,gotoFlow,endFlow }) => {
        const validOptions = ["1","2"];
        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
        }
        if(ctx.body === "1"){
            return gotoFlow(ServiciosAdicionales);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const SeguroFacultativo = addKeyword(['3'])
.addAnswer(`> 🛡️ Seguro Facultativo`)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: 🔗 https://drive.google.com/drive/folders/1qeZIcP_lGk0TlbOU5KHi_GG7I2BlUn2t?usp=sharing',
        ' ',
        '1️⃣ Regresar ↩️ ',
        '2️⃣ Salir 🚪',

    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack,gotoFlow,endFlow }) => {
        const validOptions = ["1","2"];
        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
        }
        if(ctx.body === "1"){
            return gotoFlow(ServiciosAdicionales);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ServicioEnfermeria = addKeyword(['2'])
.addAnswer(`> 🏥 Servicio de Enfermería`)
.addAnswer(`Justificante Médico 🏥`, { media: join(process.cwd(), 'assets', 'JUSTIFICANTE MEDICO.jpeg') })
.addAnswer(`Trámite en Clínica 📝`, { media: join(process.cwd(), 'assets', 'TRAMITE EN CLINICA.jpeg') })
.addAnswer(
    [
        ' ',
        '1️⃣ Regresar ↩️ ',
        '2️⃣ Salir 🚪',

    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack,gotoFlow,endFlow }) => {
        const validOptions = ["1","2"];
        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
        }
        if(ctx.body === "1"){
            return gotoFlow(ServiciosAdicionales);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    }
)


const ServiciosAdicionales = addKeyword(['4'])
.addAnswer(`> Menú Servicios Adicionales 🛠️`)
.addAnswer(
    [
        ' ',
        '1️⃣ Regresar ↩️ ',
        '2️⃣ 🏥 Servicio de Enfermería',
        '3️⃣ 🛡️ Seguro Facultativo',
        '4️⃣ 🤝 Vinculación',
        '5️⃣ Salir 🚪'

    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack,gotoFlow,endFlow }) => {
        const validOptions = ["1","2","3","4","5"];
        if (!validOptions.includes(ctx.body)) {
            return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
        }
        if(ctx.body === "1"){
            return gotoFlow(welcomeFlow);
        }
        if(ctx.body === "5"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    [ServicioEnfermeria , SeguroFacultativo, Vinculacion]
)

export default ServiciosAdicionales;
