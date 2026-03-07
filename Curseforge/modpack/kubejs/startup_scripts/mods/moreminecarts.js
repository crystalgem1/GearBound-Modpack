if(Platform.isLoaded("moreminecarts")) {
    BlockEvents.modification(event => {
        event.modify("moreminecarts:glass_cactus", block => {
            block.destroySpeed = 0.4
        })
    })
}
