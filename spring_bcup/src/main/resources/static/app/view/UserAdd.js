Ext.define('SpringApi.view.UserAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.useraddwindow',

    title: 'UserAdd',
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
                name : 'password',
                fieldLabel: 'Password',
                allowBlank:false,
            },{
                xtype: 'textfield',
                name: 'email',
                vtype: 'email',
                fieldLabel: 'Email',
                /*regex:/^((([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z\s?]{2,5}){1,25})*(\s*?;\s*?)*)*$/,
                regexText:'This field must contain single or multiple valid email addresses separated by semicolon (;)',*/
                allowBlank:false,
                blankText : 'Please enter email address(s)',
            },]
        }];
        this.buttons = [{
            text:'Create',
            iconCls:'new-icon',
            action: 'new'
        }];

        this.callParent(arguments);
    }
});