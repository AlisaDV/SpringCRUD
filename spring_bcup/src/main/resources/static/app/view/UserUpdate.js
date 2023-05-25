Ext.define('SpringApi.view.UserUpdate', {
    extend: 'Ext.window.Window',
    alias: 'widget.userupwindow',

    title: 'UserUpdate',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name : 'username',
                fieldLabel: 'username',
                allowBlank:false,
            },{
                xtype: 'textfield',
                allowBlank:false,
                name: 'email',
                vtype: 'email',
                /*regex:/^((([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z\s?]{2,5}){1,25})*(\s*?;\s*?)*)*$/,
                regexText:'This field must contain single or multiple valid email addresses separated by semicolon (;)',*/
                blankText : 'Please enter email address(s)',
            },{
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'password',
                allowBlank:false,
            }]
        }];

        this.buttons = [{
            text:'Save',
            iconCls:'save-icon',
            action: 'save'
        }];

        this.callParent(arguments);
    }
});