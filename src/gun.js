exports.mod = (mod_data) => {
    let base = fileIO.readParsed(global.db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5fc3e272f8b6a877a729eac5") {
            fileData._props.Slots[0]._props.filters[0].Filter.push("UMP4550m");
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess(`[MOD] UMP4550m Applied`);
}