// priority: 0

StartupEvents.registry("item", event => {

    global.trades = []
    global.professions = []
    global.transactions = []

    let tools = (name, durability) => {
        event.create(name)
            .unstackable()
            .maxDamage(durability)
    }

    let profession = (name, c1, c2, transactions) => {
        let id = name.toLowerCase().replace("'", "").split(" ").join("_")
        global.professions.push(id)
        global.transactions[id] = transactions
        event.create(`profession_card_${id}`)
            .color(1, c1)
            .color(2, c2)
            .parentModel("cabin:item/profession_card")
            .texture("cabin:item/profession_card_0")
            .displayName(`Profession: ${name}`)
            .unstackable()
    }

    let trade = (name, c1, c2, transactions, custom) => {
        let id = name.toLowerCase().replace("'", "").split(" ").join("_")
        global.trades.push(id)
        global.transactions[id] = transactions
        event.create(`trade_card_${id}`)
            .color(1, c1)
            .color(2, c2)
            .parentModel("cabin:item/trade_card")
            .texture("cabin:item/trade_card_0")
            .displayName((custom ? "" : "Import: ") + name)
            .unstackable()
    }

    let AN = (x) => `${x || 1}x thermal:invar_coin`     // Andesite  | done
    let CO = (x) => `${x || 1}x thermal:copper_coin`    // Copper    | done
    let IR = (x) => `${x || 1}x thermal:iron_coin`      // Iron      | done
    let S  = (x) => `${x || 1}x thermal:silver_coin`    // Silver    | done
    let G  = (x) => `${x || 1}x thermal:gold_coin`      // Gold      | done
    let BR = (x) => `${x || 1}x thermal:nickel_coin`    // Brass     | done
    let EL = (x) => `${x || 1}x thermal:electrum_coin`  // Electrum  | done
    let DI = (x) => `${x || 1}x thermal:tin_coin`       // Diamond   | done
    let NE = (x) => `${x || 1}x thermal:netherite_coin` // Netherite | done
    let SC = (x) => `${x || 1}x thermal:lead_coin`      // Sculk     | done   
    let EN = (x) => `${x || 1}x thermal:enderium_coin`  // Enderium  | done      
    let IG = (x) => `${x || 1}x thermal:signalum_coin`  // Ignium    | done      
    let CU = (x) => `${x || 1}x thermal:bronze_coin`    // Cursium   | done   
    
/*
    tools("stone_saw,",    120);
    tools("iron_saw,",     240);
    tools("diamond_saw,", 1400);
    tools("screwdriver,",  500);
    */ 

    profession("Farming", 0xFFCC29, 0xABE925, [
        { in: "farmersdelight:carrot_crate",    out: AN(1) },
        { in: "farmersdelight:potato_crate",    out: AN(1) },
        { in: "farmersdelight:beetroot_crate",  out: AN(1) },
        { in: "farmersdelight:cabbage_crate",   out: AN(1) },
        { in: "farmersdelight:tomato_crate",    out: AN(1) },
        { in: "farmersdelight:onion_crate",     out: AN(1) },
        { in: "farmersdelight:rice_bag",        out: AN(1) },
        { in: "32x farmersdelight:canvas",      out: AN(1) },
        { in: "thermal:apple_block",            out: AN(1) },
        { in: "8x minecraft:sweet_berries",     out: AN(1) },
        { in: "16x minecraft:cocoa_beans",      out: AN(1) },
        { in: "8x minecraft:honey_bottle",      out: AN(1) },
        { in: "4x minecraft:honeycomb",         out: AN(1) },
        { in: "16x minecraft:dandelion",        out: AN(1) },
        { in: "16x minecraft:poppy",            out: AN(1) },
        { in: "16x minecraft:oxeye_daisy",      out: AN(1) },
        { in: "8x minecraft:bread",             out: AN(1) },
        { in: "8x minecraft:brown_mushroom",    out: AN(1) },
        { in: "8x minecraft:red_mushroom",      out: AN(1) },
        { in: "64x minecraft:kelp",             out: AN(1) },
        { in: "9x minecraft:pumpkin",           out: AN(1) },
        { in: "16x #minecraft:wool",            out: AN(1) },
        { in: "3x minecraft:melon",             out: AN(1) }
    ])

    profession("Carpentry", 0xAFF48F, 0x966C3B, [
        { in: "64x minecraft:oak_log",          out: AN(1) },
        { in: "64x minecraft:spruce_log",       out: AN(1) },
        { in: "64x minecraft:birch_log",        out: AN(2) },
        { in: "64x minecraft:jungle_log",       out: AN(1) },
        { in: "64x minecraft:acacia_log",       out: AN(2) },
        { in: "64x minecraft:dark_oak_log",     out: AN(1) },
        { in: "64x minecraft:mangrove_log",     out: AN(2) },
        { in: "64x minecraft:cherry_log",       out: AN(2) },
        { in: "64x minecraft:crimson_stem",     out: AN(4) },
        { in: "64x minecraft:warped_stem",      out: AN(4) },
        { in: "64x quark:azalea_log",           out: AN(2) },
        { in: "64x quark:blossom_log",          out: AN(2) },
        { in: "64x tconstruct:greenheart_log",  out: AN(2) },
        { in: "64x tconstruct:skyroot_log",     out: AN(2) },
        { in: "64x tconstruct:bloodshroom_log", out: AN(2) },
        { in: "64x tconstruct:enderbark_log",   out: AN(2) }
    ])

    profession("Mining", 0x1C162E, 0x5CF1E8, [
        { in: "16x create:crushed_raw_iron",    out: AN(8) },
        { in: "16x create:crushed_raw_copper",  out: AN(8) },
        { in: "16x create:crushed_raw_zinc",    out: AN(8) },
        { in: "16x create:crushed_raw_gold",    out: AN(10) },
        { in: "16x create:crushed_raw_nickel",  out: AN(12) },
        { in: "16x create:crushed_raw_lead",    out: AN(12) },
        { in: "64x minecraft:andesite",         out: AN(1) },
        { in: "64x minecraft:granite",          out: AN(1) },
        { in: "64x minecraft:diorite",          out: AN(1) },
        { in: "64x minecraft:sandstone",        out: AN(1) },
        { in: "64x create:limestone",           out: AN(1) },
        { in: "64x create:scoria",              out: AN(1) },
        { in: "8x thermal:cinnabar",            out: AN(6) },
        { in: "16x thermal:sulfur",             out: AN(6) },
        { in: "16x thermal:niter",              out: AN(6) },
        { in: "16x minecraft:lapis_lazuli",     out: AN(6) },
        { in: "16x thermal:apatite",            out: AN(4) },
        { in: "1x thermal:sapphire",            out: AN(10) },
        { in: "1x thermal:ruby",                out: AN(10) },
        { in: "1x minecraft:diamond",           out: AN(14) },
        { in: "16x minecraft:coal",             out: AN(2) },
    ])

    profession("Masonry", 0x5E6F64, 0xBA7967, [
        { in: "64x supplementaries:checker_block",        out: AN(4) },
        { in: "64x architects_palette:basalt_tiles",      out: AN(6) },
        { in: "64x tconstruct:seared_bricks",             out: AN(10) },
        { in: "64x architects_palette:sunmetal_block",    out: AN(8) },
        { in: "64x architects_palette:osseous_bricks",    out: AN(6) },
        { in: "64x architects_palette:packed_ice_pillar", out: AN(8) },
        { in: "64x architects_palette:flint_tiles",       out: AN(4) },
        { in: "64x architects_palette:abyssaline",        out: AN(12) },
        { in: "64x architects_palette:gilded_sandstone",  out: AN(10) },
        { in: "64x minecraft:bricks",                     out: AN(6) },
        { in: "64x minecraft:mud_bricks",                 out: AN(12) },
        { in: "64x architects_palette:olivestone_bricks", out: AN(4) },
        { in: "64x minecraft:quartz_bricks",              out: AN(18) },
        { in: "64x architects_palette:algal_bricks",      out: AN(6) },
        { in: "64x tconstruct:blazewood",                 out: AN(10) },
        { in: "64x create:ornate_iron_window",            out: AN(10) },
        { in: "64x minecraft:mossy_cobblestone",          out: AN(6) },
        { in: "64x #forge:glazed_terracotta",             out: AN(6) },
        { in: "64x supplementaries:daub_brace",           out: AN(8) }
    ])

    profession("Hunting", 0x393E46, 0xE41A5A, [
        { in: "reliquary:slime_pearl",      out: AN(6) },
        { in: "reliquary:catalyzing_gland", out: AN(10) },
        { in: "reliquary:witch_hat",        out: AN(15) },
        { in: "reliquary:squid_beak",       out: AN(3) },
        { in: "reliquary:withered_rib",     out: AN(15) },
        { in: "reliquary:rib_bone",         out: AN(5) },
        { in: "reliquary:zombie_heart",     out: AN(5) },
        { in: "reliquary:chelicerae",       out: AN(5) },
        { in: "reliquary:bat_wing",         out: AN(10) },
        { in: "reliquary:frozen_core",      out: AN(4) },
        { in: "reliquary:nebulous_heart",   out: AN(5) },
        { in: "reliquary:molten_core",      out: AN(5) },
        { in: "reliquary:eye_of_the_storm", out: AN(12) },
        { in: "minecraft:rabbit_foot",      out: AN(8) },
        { in: "minecraft:nether_star",      out: G(1) },
        { in: "minecraft:dragon_breath",    out: AN(1) },
        { in: "minecraft:ghast_tear",       out: AN(10) },
        { in: "minecraft:dragon_egg",       out: G(2) },
        { in: "reliquary:guardian_spike",   out: AN(6) }
    ])

    profession("Cooking", 0xF5F382, 0x9FE87A, [
        { in: "16x create:bar_of_chocolate",                     out: AN(4) },
        { in: "16x create:honeyed_apple",                        out: AN(4) },
        { in: "16x create:builders_tea",                         out: AN(4) },
        { in: "16x farmersdelight:hot_cocoa",                    out: AN(5) },
        { in: "8x farmersdelight:tomato_sauce",                  out: AN(3) },
        { in: "16x farmersdelight:apple_pie_slice",              out: AN(3) },
        { in: "16x farmersdelight:chocolate_pie_slice",          out: AN(4) },
        { in: "17x farmersdelight:sweet_berry_cheesecake_slice", out: AN(3) },
        { in: "14x #kubejs:cake_slices",                         out: AN(3) },
        { in: "64x farmersdelight:sweet_berry_cookie",           out: AN(2) },
        { in: "64x farmersdelight:honey_cookie",                 out: AN(2) },
        { in: "64x minecraft:cookie",                            out: AN(2) },
        { in: "16x farmersdelight:melon_popsicle",               out: AN(7) },
        { in: "16x farmersdelight:fruit_salad",                  out: AN(7) },
        { in: "16x farmersdelight:mixed_salad",                  out: AN(9) },
        { in: "16x farmersdelight:nether_salad",                 out: AN(5) },
        { in: "16x farmersdelight:barbecue_stick",               out: AN(6) },
        { in: "16x farmersdelight:egg_sandwich",                 out: AN(5) },
        { in: "16x farmersdelight:chicken_sandwich",             out: AN(9) },
        { in: "16x farmersdelight:bacon_sandwich",               out: AN(9) },
        { in: "16x farmersdelight:hamburger",                    out: AN(11) },
        { in: "16x farmersdelight:mutton_wrap",                  out: AN(10) },
        { in: "16x farmersdelight:dumplings",                    out: AN(7) },
        { in: "16x farmersdelight:stuffed_potato",               out: AN(6) },
        { in: "16x farmersdelight:cabbage_rolls",                out: AN(5) },
        { in: "16x farmersdelight:beef_stew",                    out: AN(8) },
        { in: "16x farmersdelight:chicken_soup",                 out: AN(9) },
        { in: "16x minecraft:rabbit_stew",                       out: AN(10) },
        { in: "16x minecraft:beetroot_soup",                     out: AN(7) },
        { in: "16x minecraft:pumpkin_pie",                       out: AN(6) },
        { in: "16x farmersdelight:vegetable_soup",               out: AN(9) },
        { in: "32x supplementaries:pancake",                     out: AN(4) },
        { in: "16x farmersdelight:fish_stew",                    out: AN(9) },
        { in: "16x farmersdelight:fried_rice",                   out: AN(8) },
        { in: "16x farmersdelight:pumpkin_soup",                 out: AN(12) },
        { in: "16x farmersdelight:baked_cod_stew",               out: AN(9) },
        { in: "16x farmersdelight:noodle_soup",                  out: AN(9) },
        { in: "16x farmersdelight:pasta_with_meatballs",         out: AN(10) },
        { in: "16x farmersdelight:pasta_with_mutton_chop",       out: AN(10) },
        { in: "16x farmersdelight:roasted_mutton_chops",         out: AN(9) },
        { in: "16x farmersdelight:vegetable_noodles",            out: AN(10) },
        { in: "16x farmersdelight:steak_and_potatoes",           out: AN(9) },
        { in: "16x farmersdelight:ratatouille",                  out: AN(9) },
        { in: "16x farmersdelight:squid_ink_pasta",              out: AN(11) },
        { in: "16x farmersdelight:roast_chicken",                out: AN(7) },
        { in: "16x farmersdelight:stuffed_pumpkin",              out: AN(9) },
        { in: "16x farmersdelight:honey_glazed_ham",             out: AN(7) },
        { in: "16x farmersdelight:shepherds_pie",                out: AN(7) },
        { in: "16x aquaculture:sushi",                           out: AN(3) },
        { in: "16x create:sweet_roll",                           out: AN(4) }
    ])

    profession("Smithing", 0xFFC93C, 0xFF7A00, [
        { in: "minecraft:iron_boots",        out: AN(2) },
        { in: "minecraft:iron_leggings",     out: AN(4) },
        { in: "minecraft:iron_chestplate",   out: AN(4) },
        { in: "tconstruct:ingot_cast",       out: AN(2) },
        { in: "tconstruct:pick_head_cast",   out: AN(3) },
        { in: "tconstruct:gem_cast",         out: AN(4) },
        { in: "minecraft:iron_helmet",       out: AN(3) },
        { in: "minecraft:golden_boots",      out: AN(4) },
        { in: "minecraft:golden_leggings",   out: AN(7) },
        { in: "minecraft:golden_chestplate", out: AN(8) },
        { in: "minecraft:golden_helmet",     out: AN(5) },
        { in: "minecraft:golden_apple",      out: AN(10) },
        { in: "32x minecraft:arrow",         out: AN(3) },
        { in: "minecraft:iron_sword",        out: AN(1) },
        { in: "minecraft:golden_sword",      out: AN(2) }
    ])

    trade("Exchange Coins", 0xEBA83A, 0xF4F4F4, [
        //smaller -> larger       larger -> smaller 
        {in: AN(8), out: CO(1)}, {in: CO(1), out: AN(8)},
        {in: CO(8), out: IR(1)}, {in: IR(1), out: CO(8)},
        {in: IR(8), out: S(1)},  {in: S(1),  out: IR(8)},
        {in: S(8),  out: G(1)},  {in: G(1),  out: S(8)},
        {in: G(8),  out: BR(1)}, {in: BR(1), out: G(8)},
        {in: BR(8), out: EL(1)}, {in: EL(1), out: BR(8)},
        {in: EL(8), out: DI(1)}, {in: DI(1), out: EL(8)},
        {in: DI(8), out: NE(1)}, {in: NE(1), out: DI(8)},
        {in: NE(8), out: SC(1)}, {in: SC(1), out: NE(8)},
        {in: SC(8), out: EN(1)}, {in: EN(1), out: SC(8)},
        {in: EN(8), out: IG(1)}, {in: IG(1), out: EN(8)},
        {in: IG(8), out: CU(1)}, {in: CU(1), out: IG(8)},
    ], true)

        trade("Bulk Exchange Coins", 0xF58D2C, 0xFFF985, [
        //smaller -> larger        larger -> smaller 
        {in: AN(64), out: CO(8)}, {in: CO(8), out: AN(64)},
        {in: CO(64), out: IR(8)}, {in: IR(8), out: CO(64)},
        {in: IR(64), out: S(8)},  {in: S(8),  out: IR(64)},
        {in: S(64),  out: G(8)},  {in: G(8),  out: S(64)},
        {in: G(64),  out: BR(8)}, {in: BR(8), out: G(64)},
        {in: BR(64), out: EL(8)}, {in: EL(8), out: BR(64)},
        {in: EL(64), out: DI(8)}, {in: DI(8), out: EL(64)},
        {in: DI(64), out: NE(8)}, {in: NE(8), out: DI(64)},
        {in: NE(64), out: SC(8)}, {in: SC(8), out: NE(64)},
        {in: SC(64), out: EN(8)}, {in: EN(8), out: SC(64)},
        {in: EN(64), out: IG(8)}, {in: IG(8), out: EN(64)},
        {in: IG(64), out: CU(8)}, {in: CU(8), out: IG(64)},
    ], true)
})
