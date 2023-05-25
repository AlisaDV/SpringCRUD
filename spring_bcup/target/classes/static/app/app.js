Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'SpringApi',
    appFolder: 'app',
    controllers: ['UserController'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});