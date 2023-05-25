Ext.define('SpringApi.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int'},
        {name: 'username', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'role', type: 'string'},
        ],
    validations: [{
        type: 'length',
        field: 'password',
        min: 1,
        allowBlank: false
    }, {
        type: 'length',
        field: 'username',
        min: 1,
        allowBlank: false
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email',
        vtype: 'email',
        allowBlank: false
    }],
    proxy: {
        type: 'ajax',
        headers: {
            'Content-Type': 'application/json'
        },
        api: {
            create: 'http://localhost:8080/api/users',
            read: 'http://localhost:8080/api/users',
            update: 'http://localhost:8080/api/users/{id}',
            destroy: 'http://localhost:8080/api/users/{id}'
        },
        reader: {
            type: 'json',
            root: 'data',
            url: 'http://localhost:8080/api/users'
        },
        writer: {
            url: 'http://localhost:8080/api/users/',
            type: 'json',
            writeAllFields: true
        }
    }
});