Ext.require(['Ext.form.*', 'Ext.layout.container.Column',
		'Ext.window.MessageBox', 'Ext.fx.target.Element',
		'Ext.tip.QuickTipManager']);

Ext.onReady(function() {

			Ext.tip.QuickTipManager.init();

			Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
				maxWidth : 200,
				minWidth : 100,
				showDelay : 50
					// Show 50ms after entering target
				});
			/*
			 * ====================================================================
			 * Individual checkbox/radio examples
			 * ====================================================================
			 */

			// Using checkbox/radio groups will generally be more convenient and
			// flexible than
			// using individual checkbox and radio controls, but this shows that
			// you can
			// certainly do so if you only have a single control at a time.
			// combine all that into one huge form
			var fp = Ext.create('Ext.FormPanel', {
						title : 'Contact us',
						frame : false,
						fieldDefaults : {
							labelWidth : 110, // this is casuing problems with
												// spacing!
							labelStyle : 'color:green;padding-left:4px'
						},
						width : 600,
						renderTo : 'form-ct',
						bodyPadding : 10,
						items : [name, contact, department, subject, editor],
						buttons : [{
							text : 'Save',
							handler : function() {
								if (fp.getForm().isValid()) {
									Ext.Msg
											.alert(
													'Submitted Values',
													'The following will be sent to the server: <br />'
															+ fp
																	.getForm()
																	.getValues(true)
																	.replace(
																			/&/g,
																			', '));
								}
							}
						}, {
							text : 'Reset',
							handler : function() {
								fp.getForm().reset();
							}
						}]
					});
		});

var titles = Ext.create('Ext.data.Store', {
			fields : ['name', 'value'],
			data : [{
						name : 'Mr',
						value : 'mr'
					}, {
						name : 'Mrs',
						value : 'mrs'
					}, {
						name : 'Miss',
						value : 'miss'
					}, {
						name : 'Dr',
						value : 'dr'
					}, {
						name : 'Lord',
						value : 'lord'
					}, {
						name : 'Sir',
						value : 'sir'
					}]
		});

var departments = Ext.create('Ext.data.Store', {
			fields : ['name', 'value'],
			data : [{
						name : 'IT',
						value : 'it'
					}, {
						name : 'Accounts',
						value : 'accounts'
					}, {
						name : 'Sales',
						value : 'sales'
					}, {
						name : 'General Enquries',
						value : 'general'
					}]
		});

var name = {
	xtype : 'fieldcontainer',
	layout : 'anchor',
	items : [{
				xtype : 'combo',
				queryMode : 'local',
				value : 'mr',
				triggerAction : 'all',
				forceSelection : true,
				editable : false,
				fieldLabel : 'Title',
				name : 'title',
				displayField : 'name',
				valueField : 'value',
				store : titles
			}, {
				xtype : 'textfield',
				name : 'firstName',
				fieldLabel : 'First Name',
				allowBlank : false,
				msgTarget : 'side',
				anchor : '100%'
			}, {
				xtype : 'textfield',
				name : 'lastName',
				fieldLabel : 'Last Name',
				allowBlank : false,
				msgTarget : 'side',
				anchor : '100%'
			}]
};

var contact = {
	xtype : 'container',
	title : 'Contact',
	layout : 'anchor',
	items : [{
				xtype : 'textfield',
				name : 'emailAddress',
				fieldLabel : 'Email Address',
				allowBlank : false,
				vtype : 'email',
				autoWidth : true,
				msgTarget : 'side',
				anchor : '100%'
			}, {
				xtype : 'textfield',
				name : 'number',
				fieldLabel : 'Contact Number',
				// vtype: 'email', //Find out vtype for numbers only
				anchor : '100%'
			}, {
				xtype : 'checkboxgroup',
				fieldLabel : 'Preferred contact method',
				items : [{
							boxLabel : 'Email',
							name : 'email',
							checked : true
						}, {
							boxLabel : 'Phone',
							name : 'phone'
						}]
			}]

};

var department = {
	xtype : 'container',
	title : 'Department',
	layout : 'anchor',
	items : [{
				xtype : 'combo',
				queryMode : 'local',
				value : 'general',
				triggerAction : 'all',
				forceSelection : true,
				editable : false,
				fieldLabel : 'Department',
				name : 'department',
				displayField : 'name',
				valueField : 'value',
				store : departments
			}]
};

var subject = {
	xtype : 'container',
	title : 'Subject',
	layout : 'anchor',
	items : [{
				xtype : 'textfield',
				name : 'subject',
				fieldLabel : 'Subject',
				allowBlank : false,
				msgTarget : 'side',
				anchor : '100%'
			}]

};

var editor = {
	xtype : 'container',
	title : 'Enquiry',
	layout : 'anchor',
	items : [{
				xtype : 'htmleditor',
				name : 'enquiry',
				fieldLabel : 'Enquiry',
				height : 200,
				anchor : '100%'
			}]
};
