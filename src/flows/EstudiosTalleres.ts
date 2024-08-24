import { join } from 'path'
import { addKeyword } from '@builderbot/bot'
import welcomeFlow from '~/app';

const TalleresExtracurriculares = addKeyword(['6'])
.addAnswer(`> 🎨 Talleres Extracurriculares `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1YeJKEPcKsxuXC78gnzNvf32aLEHhggPh?usp=sharing 🔗 ',
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
            return gotoFlow(EstudiosTalleres);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const UsoTalleres = addKeyword(['5'])
.addAnswer(`> 🛠️ Uso de Talleres `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en:  https://drive.google.com/drive/folders/1MCcTGcFdJAKabX9bYmiiKstKvCRA86Gj?usp=sharing 🔗 ',
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
            return gotoFlow(EstudiosTalleres);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const Ingles = addKeyword(['4'])
.addAnswer(`> 🇬🇧 Inglés `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en:  https://drive.google.com/drive/folders/1H5FFQS-b5rZihITYDcGwJDf77j5vTgEP?usp=sharing 🔗 ',
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
            return gotoFlow(EstudiosTalleres);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ServiciosEscolares = addKeyword(['3'])
.addAnswer(`> 📚 Servicios Escolares `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en:  https://drive.google.com/drive/folders/1Ej9jMXgApWkBq6v5McrEk-8B4-rdwbD5?usp=sharing 🔗 ',
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
            return gotoFlow(EstudiosTalleres);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const ConvocatoriaIngreso = addKeyword(['2'])
.addAnswer(`>  📝 Convocatoria de Ingreso `)
.addAnswer(
    [
        ' 📄 Puedes encontrar la información más reciente en: https://drive.google.com/drive/folders/1kkQsH11a-y8qvR07Ym092PZ-SoQG7QYu?usp=sharing 🔗 ',
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
            return gotoFlow(EstudiosTalleres);
        }
        if(ctx.body === "2"){
            return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
        }

    },
    []
)

const EstudiosTalleres = addKeyword(['2'])
    .addAnswer(`> Menú Estudios y Talleres 📚`)
    .addAnswer(
        [
            ' ',
            '1️⃣ Regresar ↩️',
            '2️⃣ 📝 Convocatoria de Ingreso',
            '3️⃣ 📚 Servicios Escolares',
            '4️⃣ 🇬🇧 Inglés',
            '5️⃣ 🛠️ Uso de Talleres',
            '6️⃣ 🎨 Talleres Extracurriculares',
            '7️⃣ Salir 🚪 '

        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack , gotoFlow ,endFlow}) => {
            const validOptions = ["1","2","3","4","5","6","7"];
            if (!validOptions.includes(ctx.body)) {
                return fallBack(` ${ctx.name} seleccione una opción válida del menú ✅💬`);
            }
            if(ctx.body === "1"){
                return gotoFlow(welcomeFlow);
            }
            if(ctx.body === "7"){
                return endFlow("😊 ¡Hasta luego! Que tengas un día increíble. 🌞");
            }
        },
        [ConvocatoriaIngreso,ServiciosEscolares,Ingles, UsoTalleres, TalleresExtracurriculares]
    )

    export default EstudiosTalleres;