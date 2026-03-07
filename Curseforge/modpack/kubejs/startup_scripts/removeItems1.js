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
        "//################## \n" +
        "## @disabledItems ##\n" +
        "##################//\n" +
        "\n" +
        "Disabled:" + global.disabledItems.length + "\n" +
        global.disabledItems)

    console.info(
        "//################## \n" +
        "## @removedItems ##\n" +
        "##################//\n" +
        "\n" +
        "Removed:" + global.removedItems.length + "\n" +
        global.removedItems)
}
// credit:
// Lady Lexxie Black 
// (395964331398791172)
// Matt_ZSlayer
// (431929256465924107)

