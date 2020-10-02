//const Database = require("sqlite-async")

const Database = riquire('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Giovanne de Lima", 
        avatar:"https://avatars3.githubusercontent.com/u/47615704?s=460&u=b545fc6b2b4deb93988f0e5aa9fca44e40410aa1&v=4",
         whatsapp: "1197210-2621", 
         bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
   }

    classValue = {
        subject: 1, 
        cost: "20"

        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // claa_id virá pelo banco de dados, após cadastrarmos a classe
     {
        weekday: 2, 
        time_from: 720, 
        time_to: 1220
    },

    {
        weekday: 0, 
        time_from: 520, 
        time_to: 1220
    }
    ]


  // await createProffy(db, {proffyValue, classValue, classScheduleValue})

    // Consultar os dados inseridos

    // todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
        //console.log(selectedProffys)

        // consultar as classes de um determinado professor
        // e trazer junto os dados do professor
        const selesctClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)
        //console.log(selesctClassesAndProffys)

        // o horario que a pessoa trabalha por exemplo, é das 8h ás 18h
        // o horarário do time_from (8h) precisa ser antes ou igual ao horário solicitado
        // o time_from precisa ser acima

        const selectClassesShedule = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "1300"
            AND class_schedule.time_to > "1300"
        `)

})