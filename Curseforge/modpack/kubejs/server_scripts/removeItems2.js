const disabledItems = [
    //mods
    '@cataclysm_spellbooks', 
    '@immersive_aircraft', 
    '@forbidden_arcanus', 
    '@irons_spellbooks', 
    '@createaddition',
    '@automobility', 
    '@create_radar',
    '@create_sa',
    '@endrem',
    '@relic',
    '@malum'
]

const removedItems = [
    // remove all elytra like items
    'minecraft:elytra', 
    'cataclysm_spellbooks:ignis_chestplate_elytra',
    'cataclysm:ignitium_elytra_chestplate',
    'cataclysm_spellbooks:cursium_mage_elytra',
    'tconstruct:slime_chestplate',
    'cataclysm_spellbooks:excelsius_power_chestplate',
    'cataclysm_spellbooks:excelsius_resist_chestplate'
]

global.disabledItems = [];
global.removedItems = [];

// Using concat() to merge arrays manually
disabledItems.forEach(item => {
    if (item.startsWith('@') || item.startsWith('#')) {
        // .concat merges the list of IDs into the global array
        global.disabledItems = global.disabledItems.concat(Ingredient.of(item).itemIds);
    } else {
        global.disabledItems.push(item);
    }
});

removedItems.forEach(item => {
    if (item.startsWith('@') || item.startsWith('#')) {
        global.removedItems = global.removedItems.concat(Ingredient.of(item).itemIds);
    } else {
        global.removedItems.push(item);
    }
});


if(global.log)
{
    console.info(
        "//##################\n" +
        "## @disabledItems ##\n" +
        "##################//\n" +
        "\n" +
        "Disabled:" + global.disabledItems.length + "\n" +
        global.disabledItems)

    console.info(
        "//#################\n" +
        "## @removedItems ##\n" +
        "#################//\n" +
        "\n" +
        "Removed:" + global.removedItems.length + "\n" +
        global.removedItems)
}
// credit:
// Lady Lexxie Black 
// (395964331398791172)
// Matt_ZSlayer
// (431929256465924107)

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