/**
 * @author Paul Robinson
 */
/**
 * This will load up the components before the application is run, this will
 * save the application having to initialize componets on the fly, currently it
 * only loads the following two things. {Ext.form.*} and
 * {Ext.tip.QuickTipManager }
 * 
 * @method Require function. {Ext.require}
 */
Ext.require(['Ext.form.*', 'Ext.tip.QuickTipManager']);

/**
 * When ready start the application!
 * 
 * @method OnReady
 */
Ext.onReady(function() {

			/*
			 * Enable the QuickTip Manager to prompt when input is blank or not
			 * vaild. these messages will pop up to the side if msgTarget :
			 * 'side', is set. You can have 'under' and 'title'. Without using
			 * the QuickTipManager the default would be a small popup box near
			 * on hovering.
			 */
			Ext.tip.QuickTipManager.init();
			Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
				showDelay : 50
					// show 50ms after leaving?
				});
			/**
			 * Form panel which creates the main holding panel for all children.
			 * 
			 * @returns {Ext.FormPanel}
			 */
			var fp = Ext.create('Ext.FormPanel', {
						title : 'Contact us',
						frame : false,
						/*
						 * Setting fieldDefaults will save having to set the
						 * property every time for all children of this panel
						 * this contains {@link #labelWidth} {@link #labelStyle}
						 */
						fieldDefaults : {
							labelWidth : 100,
							labelStyle : 'color:black'
						},
						width : 600,
						renderTo : 'form-ct', /*
												 * This is where the panel will
												 * go, searchs for 'form-ct' in
												 * the HTML body
												 */
						bodyPadding : 10, /*
											 * Padding all around the inside of
											 * the panel
											 */
						/*
						 * Here are the children of the pannel
						 */
						items : [name, contact, department, subject, editor],
						/*
						 * Here are the buttons of the window, they do nothing
						 * other then grab all the values of the form and
						 * display them in a pop up window but only if the form
						 * is valid, ie all required fields must not be blank
						 * and contain the correct required values
						 */
						buttons : [{
							text : 'Send',
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

/**
 * List of titles for persons. This cotains a list of title names and values.
 * With a name being what is shown and a related value which is stored/sent.
 * 
 * @property {Ext.data.Store} of titles
 */
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

/**
 * List of deparments to contact. This cotains a list of department names and
 * values. With a name being what is shown and a related value which is
 * stored/sent.
 * 
 * @property {Ext.data.Store} of departments
 */
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

/**
 * This has the name section for the contact form. It contants the following
 * {Ext.form.field.ComboBox} which holds titles {Ext.form.field.text} for the
 * first and last name.
 * 
 * @property Name Container {Ext.form.FieldContainer}
 */
var name = {
	xtype : 'fieldcontainer',
	layout : 'anchor', /*
						 * everything is anchored to the container edges. This
						 * saves hard coding children sizes
						 */
	items : [{
				xtype : 'combo',
				queryMode : 'local',
				value : 'mr', /* default value */
				triggerAction : 'all', /*
										 * this invokes the query stored in
										 * allQuery
										 */
				forceSelection : true,
				editable : false,
				fieldLabel : 'Title',
				name : 'title', /*
								 * name of field, you'll see this in the popup
								 * when form is vaild
								 */
				displayField : 'name', /* display the name field from the store */
				valueField : 'value', /* name of value field in store */
				store : titles /* The name and values are stored in the titles variable */
			}, {
				xtype : 'textfield',
				name : 'firstName',
				fieldLabel : 'First Name',
				allowBlank : false, /* There must be something entered */
				msgTarget : 'side', /* Display error sign to the right hand side */
				anchor : '100%' /* fill the whole space basicly when using 100% */
			}, {
				xtype : 'textfield',
				name : 'lastName',
				fieldLabel : 'Last Name',
				allowBlank : false,
				msgTarget : 'side',
				anchor : '100%'
			}]
};

/**
 * This has the contact details section for the contact form. It contants the
 * following {Ext.form.field.text} for the email address and contact number.
 * {Ext.form.field.Checkbox} for the prefered contact means.
 * 
 * The email field has the vtype of email, this means it must contain a vaild
 * email.
 * 
 * @property Contant Container {Ext.form.FieldContainer}
 */
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

/**
 * This has the department details section for the contact form. It contants the
 * following {Ext.form.field.Combobox} for the department to contact
 * 
 * @property Department Container {Ext.form.FieldContainer}
 */
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

/**
 * This has the subect details section for the contact form. It contants the
 * following {Ext.form.field.Text} the subject of the enquiry
 * 
 * @property Subject Container {Ext.form.FieldContainer}
 */
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

/**
 * This has the enquiry editor section for the contact form. It contants the
 * following {Ext.form.field.HtmlEditor} for the enquiry
 * 
 * @property Editor Container {Ext.form.FieldContainer}
 */
var editor = {
	xtype : 'container',
	title : 'Enquiry',
	layout : 'anchor',
	items : [{
				xtype : 'htmleditor',
				name : 'enquiry',
				fieldLabel : 'Enquiry',
				height : 200, /*
								 * A fixed set height, idealy perhaps make this
								 * dragable?
								 */
				anchor : '100%'
			}]
};
