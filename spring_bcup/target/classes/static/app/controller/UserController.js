Ext.define('SpringApi.controller.UserController', {
    extend: 'Ext.app.Controller',

    views: ['UserList', 'User', 'UserUpdate', 'UserAdd', 'UserProfile'],
    stores: ['UserStore'],
    models: ['User'],
    init: function() {
       this.getRole();
        this.control({
            'viewport > userlist': {
               // itemdblclick: this.userUpdateV,
                itemcontextmenu: this.deleteForm
            },
            'userlist > toolbar > button[action=new]': {
                click: this.userAddV
            },
            'userlist > toolbar > button[action=logout]': {
                click: this.logout
            },
            'userlist > toolbar > button[action=profile]': {
                click: this.profileV
            },
            'userupwindow button[action=save]': {
                click: this.updateUser
            },
            'profilewindow button[action=save]': {
                click: this.updateUser
            },
            'useraddwindow button[action=new]': {
                click: this.createUser
            },
            'userwindow button[action=delete]': {
                click: this.deleteUser
            },
        });
    },




    updateUser: function(button) {

        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            record = form.getRecord();

        var store = Ext.widget('userlist').getStore();
        record.set(values);
        win.close();
        /* var win    = button.up('window'),
             form   = win.down('form'),
             values = form.getValues(),
             id = form.getRecord().get('id');
         values.id=id;
         Ext.Ajax.request({
             headers: {
                 'Content-Type': 'application/json'
             },
             methods: 'put',
             url: 'http://localhost:8080/api/users/'+id,
             params: JSON.stringify(values),
             success: function(response){
                 win.close();
                 var data=Ext.decode(response.responseText);
                 if(data.success){
                     var store = Ext.widget('userlist').getStore();
                     store.load();
                 }
             }
         });*/


    },


    createUser: function(button) {


        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            methods: 'post',
            url: 'http://localhost:8080/api/users',
            params: JSON.stringify(values),
            success: function(response, options){
                win.close();
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('userlist').getStore();
                    // store.load();
                    store.update();
                }
            },
            failure: function (form, action) {
                Ext.Msg.alert('error', 'no permission');
                win.close();
            }
        });
    },


    deleteUser: function(button) {

        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();

        var store = Ext.widget('userlist').getStore();

        var record = store.getById(values.id);
        store.remove(record)
        win.close();
     /*   var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            methods: 'delete',
            url: 'http://localhost:8080/api/users/?id='+values.id,
            params: JSON.stringify(values),
            success: function(response, options){
                var store = Ext.widget('userlist').getStore();
                var record = store.getById(values.id);
                store.remove(record)
                win.close();
            },
            failure: function (form, action) {
                Ext.Msg.alert('error', 'no permission');
                win.close();
            }
        });*/

    },





    deleteForm: function(grid, record) {
        const promise3 = new Promise((resolve) => {

            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                methods: 'GET',
                url: 'http://localhost:8080/api/admin',
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);

                    resolve(obj);
                },
            })
        });

        promise3.then((values) => {
            if(values) {
                var view = Ext.widget('userwindow');
                view.down('form').loadRecord(record);
            }
        })






    },

    userAddV: function(grid, record) {
        const promise1 = new Promise((resolve, reject) => {
            this.getRole(record)

            var view = Ext.widget('useraddwindow');

        })
    },


    userUpdateV: function(grid, record) {
        var view = Ext.widget('userupwindow');
        view.down('form').loadRecord(record);
    },


    logout: function () {
        location.href = '/logout'
    },




    profileV: function () {



        const promise1 = new Promise((resolve, reject) => {

             Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                methods: 'GET',
                url: 'http://localhost:8080/api/profile',
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    resolve(obj);
                },
            })
        });

        promise1.then((values) => {
            var store = Ext.widget('userlist').getStore();
            var record = store.getById(values.id);
            //record.password = "";
            var view = Ext.widget('profilewindow');
            view.down('form').loadRecord(record);
            //document.getElementById("password").value = "";

            var fileField     = document.getElementById("password");
            var parentNod     = fileField.parentNode;
            var tmpForm        = document.createElement("form");
            parentNod.replaceChild(tmpForm,fileField);
            tmpForm.appendChild(fileField);
            tmpForm.reset();
            parentNod.replaceChild(fileField,tmpForm);
            this.getRole(values);

        })



    },

    getRole: function () {

        const promise2 = new Promise((resolve, reject) => {

            Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                methods: 'GET',
                url: 'http://localhost:8080/api/admin',
                success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);

                    resolve(obj);
                },
            })
        });

        promise2.then((values) => {
            if(!values) {
                 var view = Ext.getCmp('createButton');
                 view.hide();
                //document.getElementById('createButton').style.display='none'
            }
        })

    }




});