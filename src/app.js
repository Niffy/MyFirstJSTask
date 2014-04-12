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
 * Create an object of {com.webree.sections} which is use to build up sections for the form.
 */
var sections = Ext.create('com.webree.sections');

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
						items : [sections.getNameSection(), sections.getContactSection(), sections.getDepartmentSection(), sections.getSubjectSection(), sections.getEditorSection()],
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