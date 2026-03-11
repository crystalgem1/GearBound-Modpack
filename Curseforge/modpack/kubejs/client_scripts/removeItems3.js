ItemEvents.tooltip(event => {
    global.disabledItems.forEach(item => {
        event.addAdvanced(item, (itemStack, advanced, text) => {
            text.add(1, [Text.red('Removed!'), ' \(for now\)']);
            text.add(2, 'Item may be re-added');
            text.add(3, 'in a later update');
            text.add(4, "");
        });
    });
    
    global.removedItems.forEach(item => {
        event.addAdvanced(item, (itemStack, advanced, text) => {
            text.add(1, [Text.red('Removed!')]);
            text.add(2, Text.white('Deamed to be to powerfullll!'));
        });
    });
});

JEIEvents.hideItems(event => {
  event.hide(global.removedItems)
})