ServerEvents.tags("item", event => {
    global.renameItems = [];

    function idToPathID(arr) {
        arr.forEach(el => {
            el[0] = Item.of(el[0]).descriptionId
        });
        return arr;
    }


    if(Platform.isLoaded("thermal")) {
        let coinRename = [
            ['thermal:invar_coin', 'Andesite Coin'],
            ['thermal:tin_coin', 'Diamond Coin'],
            ['thermal:lead_coin', 'Sculk Coin'],
            ['thermal:lumium_coin', 'Brass Coin'],
            ['thermal:signalum_coin', 'Ignium Coin'],
            ['thermal:bronze_coin', 'Cursium Coin']];

        global.renameItems.push(idToPathID(coinRename));
    }
})