priority: 1
ServerEvents.recipes(event => {

    global.disabledItems.forEach(item => {
        event.remove({ output: item });
        event.remove({ input: item })
    });

    global.removedItems.forEach(item => {
        event.remove({ output: item });
        event.remove({ input: item })
    });
});

ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(global.disabledItems);
    event.removeAllTagsFrom(global.removedItems);
});

ServerEvents.tags('block', event => {
    event.removeAllTagsFrom(global.disabledItems);
    event.removeAllTagsFrom(global.removedItems);
})

LootJS.modifiers(event => {

    const LOOT_TYPES = [ LootType.UNKNOWN, LootType.BLOCK, LootType.ENTITY, LootType.CHEST, LootType.FISHING, LootType.GIFT ]
    event.addLootTypeModifier(LOOT_TYPES).removeLoot(global.disabledItems)
    event.addLootTableModifier(/.*/).removeLoot(global.disabledItems)
});

LootJS.modifiers(event => {

    const LOOT_TYPES = [ LootType.UNKNOWN, LootType.BLOCK, LootType.ENTITY, LootType.CHEST, LootType.FISHING, LootType.GIFT ]
    event.addLootTypeModifier(LOOT_TYPES).removeLoot(global.removedItems)
    event.addLootTableModifier(/.*/).removeLoot(global.removedItems)
});

/*
    let taczItems= Ingredient.of("@tacz").itemIds
    console.log("\/*#################")
    console.log("## taczItemsList ##")
    console.log("#################* /")
    console.log(taczItems)
    let delItems = [];
    console.log("/*#################")
    console.log("## taczNBTList ##")
    console.log("#################* /")
    taczItems.forEach(item => {
        let itemNbt = item.nbt;
        console.log(itemNbt)
        if(itemNbt.contains("tacz"))
        {
            delItems.push(item);
        }  
    });
    global.removedItems.push(delItems)
*/