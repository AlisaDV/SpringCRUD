Ext.define('SpringApi.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'SpringApi.model.User',
    fields: [
        { name: 'id', type: 'int'},
        {name: 'username', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'role', type: 'string'},
    ],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        api: {
            create: 'http://localhost:8080/api/users',
            read: 'http://localhost:8080/api/users',
            update: 'http://localhost:8080/api/users',
            destroy: 'http://localhost:8080/api/users'
        },
        headers: {
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:8080/api/users',
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