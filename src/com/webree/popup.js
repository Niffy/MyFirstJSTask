/*
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
 * Create an object of {com.webree.sections} which is use to build up sections
 * for the form.
 */
var sections = Ext.create('com.webree.sections');

/**
 * When ready start the application!
 * 
 * @method OnReady
 */
Ext.onReady(function() {

	/*
	 * Enable the QuickTip Manager to prompt when input is blank or not vaild.
	 * these messages will pop up to the side if msgTarget : 'side', is set. You
	 * can have 'under' and 'title'. Without using the QuickTipManager the
	 * default would be a small popup box near on hovering.
	 */
	Ext.tip.QuickTipManager.init();
	Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
		showDelay : 50
			// show 50ms after leaving?
		});
	
	/*
	 * This is where the window is stored.
	 */
	var win;
	/**
	 * This function creates a widget with the name form.
	 */
	function showContactForm() {
        if (!win) {
            var form = Ext.widget('form', {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },
              	items : [sections.getNameSection(), sections.getContactSection(), sections.getSubjectSection(), sections.getEditorSection()],

                buttons: [{
                    text: 'Cancel',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }, {
                    text: 'Send',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form
							// to the configured url
                            // this.up('form').getForm().submit();
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                }]
            });
			/*
			 * Setting win variable with the widget name window
			 */
            win = Ext.widget('window', {
                title: 'Contact Us',
                closeAction: 'hide',
                width: 400,
                height: 600,
                minWidth: 300,
                minHeight: 300,
                layout: 'fit',
                resizable: true,
                modal: true, /* Cannot do anything in the background, background should be inactive*/
                items: form, /* Items to show*/
                defaultFocus: 'firstName'
            });
        }
        win.show();
    }
	/*
	 * This is what is shown first, this is due to the renderTo property.
	 */
	var mainPanel = Ext.widget('panel', {
		renderTo : Ext.getBody(),
		title : 'Welcome!',
		width : 500,
		bodyPadding : 20,

		items : [{
			margin : '0 0 20 0',
			xtype : 'component',
			html : 'Thank you for visiting our site! We welcome your feedback; please click the button below to '
					+ 'send us a message. We will respond to your inquiry as quickly as possible.'
		}, {
			xtype : 'container',
			layout : {
				type : 'hbox',
				pack : 'center'
			},
			items : [{
						xtype : 'button',
						cls : 'contactBtn',
						scale : 'large',
						text : 'Contact Us',
						handler : showContactForm
					}]
		}]
	});

});