const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        
            // id: 1,
            // lat: '-25.2244037',
            // lng: '-46.65051',
            // name: "Lar das meninas",
            // description:
            //   "Presta assistência a crianças de 06 a 15 anos que se encontre emsituação de risco e/ou vulnerabilidade social",
            // images: [
            //   "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            //   "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            // ].toString(),
            // instructions: 'Venha se sentir a vontade e traga muito amor e paciência para dar',
            // opnening_hours: 'Horário de visistas das 18h até as 8h',
            // open_on_weekends: '0'
          
    });

    // consultar dados da tabela
    const selecteOrphanages = await db.all("select * from  orphanages");
    console.log(selecteOrphanages);

//  consultar somente um orfanato pelo id
const orphanage = await db.all('select * from orphanages where id = "1"');
console.log( orphanage);

// // deletar dado da tableLa 
// console.log(await db.run("delete from orphanages where id = 4"));
// 
})