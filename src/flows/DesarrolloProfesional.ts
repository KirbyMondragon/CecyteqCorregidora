import { join } from 'path'
import { addKeyword } from '@builderbot/bot'
import welcomeFlow from '~/app';

const Egresados = addKeyword(['5'])
.addAnswer(`>  👨‍🎓 Egresados `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1mHWA0IvT4Rucl2zX1gH7KTN5lBo4HCBg?usp=sharing 🔗 ',
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
            return  gotoFlow(DesarrolloProfesional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ModeloDual = addKeyword(['4'])
.addAnswer(`>  ModeloDual `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1uEoYFpidmfRpzA6eTY84igsWaGMmyavv?usp=sharing 🔗 ',
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
            return gotoFlow(DesarrolloProfesional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const PracticasProfesionales = addKeyword(['3'])
.addAnswer(`>  💼 Prácticas Profesionales `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1-Yqxeo9YZvMXZedw1jdIX5MsnNCzlk1B?usp=sharing 🔗 ',
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
            return gotoFlow(DesarrolloProfesional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ServicioSocial = addKeyword(['2'])
.addAnswer(`>  🤝 Servicio Social `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1AjCOdwFYvddSlMuuK8n_FxFNLcMybPVc?usp=sharing 🔗 ',
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
            return gotoFlow(DesarrolloProfesional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const DesarrolloProfesional = addKeyword(['3'])
    .addAnswer(`> Menú Desarrollo Profesional 🚀`)
    .addAnswer(
        [
            ' ',
            '1️⃣ Regresar ↩️',
            '2️⃣ 🤝 Servicio Social',
            '3️⃣ 💼 Prácticas Profesionales',
            '4️⃣ 🔄 Modelo Dual',
            '5️⃣ 👨‍🎓 Egresados',
            '6️⃣ Salir 🚪',

        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack, gotoFlow , endFlow}) => {
            const validOptions = ["1","2","3","4","5","6"];
            if (!validOptions.includes(ctx.body)) {
                return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
            }
            if(ctx.body === "1"){
                return gotoFlow(welcomeFlow);
            }
            if(ctx.body === "6"){
                return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
            }
        },
        [ServicioSocial, ServicioSocial , PracticasProfesionales , ModeloDual, Egresados ]
    )

    export default DesarrolloProfesional;