function saveOrphanage(db, orphanage) {
    return db.run(`
    insert into orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instruction,
        opening_hours,
        open_on_weekends
    )values (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instruction}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"

    )`);

}

module.exports = saveOrphanage;