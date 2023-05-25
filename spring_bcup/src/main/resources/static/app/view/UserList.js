Ext.define('SpringApi.view.UserList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'All Users',
    store: 'UserStore',
  /*  plugins: [{
       ptype: 'rowediting',
       clicksToEdit: 1
    }],*/

    initComponent: function () {
        this.columns = [
            {
                xtype: 'rownumberer',
            },
            {
                header: 'Username',
                dataIndex: 'username',
                type: 'string',
                flex: 1,
            /*    editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }*/
            },
            {
                header: 'Email',
                dataIndex: 'email',
                type: 'string',
                flex: 1,
          /*      editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }*/
            },  {
                header: 'Role',
                dataIndex: 'role',
                type: 'string',
                flex: 1,
          /*      editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }*/
            }
        ];
        this.dockedItems=[{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Create',
                iconCls: 'new-icon',
                action: 'new',
                id: 'createButton',
            },'->',{
                text: 'Profile',
                action: 'profile'
            },'|', {
                text: 'Logout',
                action: 'logout'
            }
            ]
        }],
        this.callParent(arguments);
    }});