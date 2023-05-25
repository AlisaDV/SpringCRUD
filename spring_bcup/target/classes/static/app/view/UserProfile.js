Ext.define('SpringApi.view.UserProfile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profilewindow',

    title: 'Profile',
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
                value: '',
                id: 'password',
            },{
                xtype: 'textfield',
                name : 'email',
                fieldLabel: 'email'
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
                text:'Update',
                action: 'save'
            }]
        }];


        this.callParent(arguments);
    }
});