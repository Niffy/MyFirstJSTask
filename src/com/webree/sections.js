/**
 * @author Paul Robinson
 * 
 * A class which contains all the relevent sections to build a contact form.
 */
Ext.define('com.webree.sections', {
			titles : Ext.create('Ext.data.Store', {
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
					}),
			departments : Ext.create('Ext.data.Store', {
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
					}),

			/**
			 * Gets a list of titles for persons. This cotains a list of title
			 * names and values. With a name being what is shown and a related
			 * value which is stored/sent.
			 * 
			 * @return {Ext.data.Store}
			 */
			getTitlesData : function() {
				return this.titles;
			},

			/**
			 * Gets a list of deparments to contact. This cotains a list of
			 * department names and values. With a name being what is shown and
			 * a related value which is stored/sent.
			 * 
			 * @return {Ext.data.Store}
			 */
			getDepartmentData : function() {
				return this.departments;

			},

			/**
			 * This has the name section for the contact form. It contains the
			 * following {Ext.form.field.ComboBox} which holds the title
			 * combobox. {Ext.form.field.text} for the first and last name.
			 * 
			 * @return {Ext.form.FieldContainer}
			 */
			getNameSection : function() {
				var name = {
					xtype : 'fieldcontainer',
					layout : 'anchor', /*
					 * everything is anchored to the
					 * container edges. This saves hard
					 * coding children sizes
					 */
					items : [{
						xtype : 'combo',
						queryMode : 'local',
						value : 'mr', /* default value */
						triggerAction : 'all', /*
						 * this invokes the query stored
						 * in allQuery
						 */
						forceSelection : true,
						editable : false,
						fieldLabel : 'Title',
						name : 'title', /*
						 * name of field, you'll see this in the
						 * popup when form is vaild
						 */
						displayField : 'name', /*
						 * display the name field from
						 * the store
						 */
						valueField : 'value', /* name of value field in store */
						store : this.getTitlesData()
							/* Call a local function to get the data */
						}, {
						xtype : 'textfield',
						name : 'firstName',
						fieldLabel : 'First Name',
						allowBlank : false, /* There must be something entered */
						msgTarget : 'side', /*
						 * Display error sign to the right
						 * hand side
						 */
						anchor : '100%' /*
						 * fill the whole space basicly when
						 * using 100%
						 */
					}, {
						xtype : 'textfield',
						name : 'lastName',
						fieldLabel : 'Last Name',
						allowBlank : false,
						msgTarget : 'side',
						anchor : '100%'
					}]
				};
				return name;
			},

			/**
			 * This has the contact details section for the contact form. It
			 * contains the following {Ext.form.field.text} for the email
			 * address and contact number. {Ext.form.field.Checkbox} for the
			 * prefered contact means.
			 * 
			 * The email field has the vtype of email, this means it must
			 * contain a vaild email.
			 * 
			 * @return {Ext.form.FieldContainer}
			 */
			getContactSection : function() {
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
								// vtype: 'email', //Find out vtype for numbers
								// only
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
				return contact;
			},

			/**
			 * Get the department details section for the contact form. It
			 * contains the following {Ext.form.field.Combobox} for the
			 * department to contact, which uses data from {#getDepartmentData}
			 * 
			 * @return {Ext.form.FieldContainer}
			 */
			getDepartmentSection : function() {
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
								store : this.getDepartmentData()
							}]
				};
				return department
			},

			/**
			 * Gets the subject section for the contact form. It contains the
			 * following {Ext.form.field.Text} the subject of the enquiry
			 * 
			 * @return {Ext.form.FieldContainer}
			 */
			getSubjectSection : function() {
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
				return subject;
			},

			/**
			 * Get the enquiry editor section for the contact form. It contains
			 * the following {Ext.form.field.HtmlEditor} for the enquiry
			 * 
			 * @return {Ext.form.FieldContainer}
			 */
			getEditorSection : function() {
				var editor = {
					xtype : 'container',
					title : 'Enquiry',
					layout : 'anchor',
					items : [{
								xtype : 'htmleditor',
								name : 'enquiry',
								fieldLabel : 'Enquiry',
								height : 200, /*
								 * A fixed set height, idealy
								 * perhaps make this dragable?
								 */
								anchor : '100%'
							}]
				};
				return editor;
			}
		});
