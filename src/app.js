Ext.require([
    'Ext.form.*',
    'Ext.layout.container.Column',
    'Ext.window.MessageBox',
    'Ext.fx.target.Element'
]);

Ext.onReady(function(){

    /*====================================================================
     * Individual checkbox/radio examples
     *====================================================================*/

    // Using checkbox/radio groups will generally be more convenient and flexible than
    // using individual checkbox and radio controls, but this shows that you can
    // certainly do so if you only have a single control at a time.
    
    // combine all that into one huge form
    var fp = Ext.create('Ext.FormPanel', {
        title: 'Contact us',
        frame: false,
        fieldDefaults: {
            labelWidth: 110, //this is casuing problems with spacing!
            labelStyle: 'color:green;padding-left:4px'
        },
        width: 600,
        renderTo:'form-ct',
        bodyPadding: 10,
        items: [
        	name,
        	contact,
        	department
        ],
        buttons: [{
            text: 'Save',
            handler: function(){
               if(fp.getForm().isValid()){
                    Ext.Msg.alert('Submitted Values', 'The following will be sent to the server: <br />'+
                        fp.getForm().getValues(true).replace(/&/g,', '));
                }
            }
        },{
            text: 'Reset',
            handler: function(){
                fp.getForm().reset();
            }
        }]
    });
});


var titles = Ext.create('Ext.data.Store', {
	fields: ['name', 'value'],
	data   : [
		{name : 'Mr',   value: 'mr'},
		{name : 'Mrs',  value: 'mrs'},
		{name : 'Miss', value: 'miss'},
		{name : 'Dr', value: 'dr'},
		{name : 'Sir', value: 'sir'}
	]
});  

var departments = Ext.create('Ext.data.Store', {
	fields: ['name', 'value'],
	data   : [
		{name : 'IT',   value: 'it'},
		{name : 'Accounts',  value: 'accounts'},
		{name : 'Sales', value: 'sales'},
		{name : 'General Enquries', value: 'general'}
	]
});  

var name = {
	xtype: 'container',
	title: 'Name',
	layout: 'vbox',
	align: 'stretchmax',
	margin: '0 0 0 ',
	items: [{
		xtype: 'container',
        fieldLabel: 'Name',
        layout: 'hbox',
		labelStyle: 'font-weight:bold;padding:0;',
		fieldDefaults: {
            labelAlign: 'top'
        },
        items: [{
            xtype: 'combo',
            queryMode: 'local',
            value: 'mr',
            triggerAction: 'all',
            forceSelection: true,
            editable: false,
            fieldLabel: 'Title',
            name: 'title',
            displayField: 'name',
            valueField: 'value',
            store: titles
        }, {
            xtype: 'textfield',
            name: 'fullName',
            fieldLabel: 'Full Name',
            allowBlank: false 
        }]
	}]
};

var nameWORKS = {
	xtype: 'container',
	title: 'Name',
	layout: 'vbox',
	align: 'stretch',
	margin: '0 0 0 ',
	items: [{
		xtype: 'container',
        fieldLabel: 'Name',
        layout: 'hbox',
		labelStyle: 'font-weight:bold;padding:0;',
		fieldDefaults: {
            labelAlign: 'top'
        },
        items: [{
        	/*
        	 * The problem here is the label for the boxes, we need to resize them.
        	 * setting the width only affects the component not the label
        	 */
        	flex: 1,
            xtype: 'combo',
            queryMode: 'local',
            value: 'mr',
            triggerAction: 'all',
            forceSelection: true,
            editable: false,
            fieldLabel: 'Title',
            name: 'title',
            displayField: 'name',
            valueField: 'value',
            store: titles
        }, {
            flex: 8,
            xtype: 'textfield',
            name: 'fullName',
            fieldLabel: 'Full Name',
            allowBlank: false,
            margins: '0 0 0 0'
        }]
	}]
};

var contactWORKS = {
xtype: 'container',
	title: 'Contact',
	layout: 'anchor',
	align: 'stretchmax',
	margin: '10 0 0 ',
	autoWidth: true,
    items: [{
        xtype: 'textfield',
        name: 'emailAddress',
        fieldLabel: 'Email Address',
        allowBlank: false,
        vtype: 'email',
        autoWidth: true,
        anchor: '100%'
    },{
     	xtype: 'textfield',
        name: 'number',
        fieldLabel: 'Contact Number',
        allowBlank: false,
        vtype: 'email',
        anchor: '100%'
    }]
	
};

var contact = {
xtype: 'container',
	title: 'Contact',
	layout: 'anchor',
	align: 'stretchmax',
	margin: '10 0 0 ',
    items: [{
        xtype: 'textfield',
        name: 'emailAddress',
        fieldLabel: 'Email Address',
        allowBlank: false,
        vtype: 'email',
        autoWidth: true,
        anchor: '100%'
    },{
     	xtype: 'textfield',
        name: 'number',
        fieldLabel: 'Contact Number',
        //vtype: 'email', //Find out vtype for numbers only
        anchor: '100%'
    },{
    	xtype: 'checkboxgroup',
            fieldLabel: 'Preferred contact method',
            items: [
                {boxLabel: 'Email', name: 'cb-auto-1', checked: true},
                {boxLabel: 'Phone', name: 'cb-auto-2'}
            ]
    }]
	
};

var department ={
	xtype: 'container',
	title: 'Department',
	layout: 'anchor',
	align: 'stretchmax',
	margin: '5 0 0 ',
    items: [{
    	 xtype: 'combo',
            queryMode: 'local',
            value: 'general',
            triggerAction: 'all',
            forceSelection: true,
            editable: false,
            fieldLabel: 'Department',
            name: 'title',
            displayField: 'name',
            valueField: 'value',
            store: departments
    }]
};

var individual = {
        xtype: 'container',
        layout: 'hbox',
        margin: '10 10 10',
        items: [{
            xtype: 'fieldset',
            flex: 1,
            title: 'Individual Checkboxes',
            defaultType: 'checkbox', // each item will be a checkbox
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                xtype: 'textfield',
                name: 'txt-test1',
                fieldLabel: 'Alignment Test'
            }, {
                fieldLabel: 'Favorite Animals',
                boxLabel: 'Dog',
                name: 'fav-animal-dog',
                inputValue: 'dog'
            }, {
                boxLabel: 'Cat',
                name: 'fav-animal-cat',
                inputValue: 'cat'
            }, {
                checked: true,
                boxLabel: 'Monkey',
                name: 'fav-animal-monkey',
                inputValue: 'monkey'
            }]
        }, {
            xtype: 'component',
            width: 10
        }, {
            xtype: 'fieldset',
            flex: 1,
            title: 'Individual Radios',
            defaultType: 'radio', // each item will be a radio button
            layout: 'anchor',
            defaults: {
                anchor: '100%',
                hideEmptyLabel: false
            },
            items: [{
                xtype: 'textfield',
                name: 'txt-test2',
                fieldLabel: 'Alignment Test'
            }, {
                checked: true,
                fieldLabel: 'Favorite Color',
                boxLabel: 'Red',
                name: 'fav-color',
                inputValue: 'red'
            }, {
                boxLabel: 'Blue',
                name: 'fav-color',
                inputValue: 'blue'
            }, {
                boxLabel: 'Green',
                name: 'fav-color',
                inputValue: 'green'
            }]
        }]
    };


    