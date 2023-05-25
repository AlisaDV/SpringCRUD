Ext.define('SpringApi.view.User', {
    extend: 'Ext.window.Window',
    alias: 'widget.userwindow',

    title: 'User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name : 'username',
                fieldLabel: 'username'
            },{
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'Password',
                hidden: true
            },{
                xtype: 'textfield',
                name : 'email',
                fieldLabel: 'email',
                hidden: true
            },,{
                xtype: 'textfield',
                name : 'id',
                fieldLabel: 'id',
                hidden: true
            },]
        }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Delete',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];


        this.callParent(arguments);
    }
});