
import {  addKeyword } from '@builderbot/bot';
import welcomeFlow from '~/app';

//Aqui va un formulario ?
const Buzon = addKeyword(['4'])
.addAnswer(`> Bienvenido al Buzón 📬 `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1eaIdbKvG-TKZ07hwW-DWFTdtU0Pt4xSe?usp=sharing 🔗 ',
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
            return  gotoFlow(InformacionInstitucional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const Eventos = addKeyword(['3'])
.addAnswer(`> 🗓️ Eventos `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1-ZhvI6urXWxb0xMKstzDCaHTyLM5Krwi?usp=sharing 🔗 ',
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
            return gotoFlow(InformacionInstitucional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ReglamentoAcademico = addKeyword(['2'])
.addAnswer(`> 📜 Reglamento Académico `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1Zvb8ORQKPVqpVhrTPIEp9cBo9q_veZrJ?usp=sharing 🔗 ',
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
            return gotoFlow(InformacionInstitucional);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const InformacionInstitucional = addKeyword(['1'])
    .addAnswer(`> Menú Dirección / Subdirección (Información Institucional 🏛️)`)
    .addAnswer(
        [
            ' ',
            '1️⃣ Regresar ↩️',
            '2️⃣ 📜 Reglamento Académico',
            '3️⃣ 🗓️ Eventos',
            '4️⃣ 📬 Buzón',
            '5️⃣ Salir 🚪'

        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack, gotoFlow,endFlow }) => {
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
        [ReglamentoAcademico , Eventos, Buzon]
    )

    export default InformacionInstitucional;