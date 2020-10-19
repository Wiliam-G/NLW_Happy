const Database = require('sqlite-async');


function execute(db) {
    return db.exec(`
        create table if not exists orphanages (
            id integer primary key autoincrement,
            lat text,
            lng text,
            name text,
            about text,
            whatsapp text,
            images text,
            instruction text,
            opening_hours text,
            open_on_weekends text
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) //db
