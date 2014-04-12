#Decisions regarding changes
The contact form is now no longer a pop up page.  I felt due to the size of the new contact form it was best placed in its own separate page. This would allow us in future to modify the page to make the website more helpful, by forcing the user down this route of a page, we could introduce a FAQ Section, perhaps even introduce a contact directory. This means the possibility of spending less time responding to repetitive enquires.  I felt a pop up would not be best placed to offer these future design and business considerations. This would allow us a path opportunity of improving the product over its life span.

I was able to make the code more modular, I did this by cutting the form up into sections and storing the components individually in their own class file, this could mean in future just selecting the contact sections required to produce a pop up. Originally the code was all stuck together, making alterations, fixes or additions cumbersome. It introduced the possibility of breaking its operation or introducing bugs because the code is quite similar and can be disorientating. Therefore the separation has allowed us the decreased the possibility of breaking its operation, decreased time required to introduce, fix or make changes to the sections while allowing the possibility of modularity later on in the product life.  The sections can be seen in `src\com\webree\section.js`

Despite saying the pop up offering less possibilities, there is an example of creating a pop up with the modular sections.  This example can be seen in the `popup.html` page with its code in `src\com\webree\popup.js` This example misses out the department section to show how easy it is to add or remove sections.

I have also taken the liberty of moving the values used to populate drop down boxes contents in to their own variables, again this allows for cleaner code to maintain and to also introduce new departments or titles.  As a side note, it would be possible to change the department section into something less specific such as a classification of what the enquiry entails.  The modularity of the code would allow this to be done very quickly.

I have also introduce a HTML Editor as the inquiry box.  This would allow for a person to format and structure their enquiry in a way which is more readable with the possibility of emphasis on passages of text. It also allows for links to be added to the enquiry in a more presentable way.

Included in the code is comments and documentation, this allows for a person (or company) who is not familiar which this specific product and framework to get to grips with what is happening. The comments can be explaining certain fields, its the different values and its effects. With the documentation being included in the code, it means a documentation can be automatically generate for later use as a reference or for use during modifications.

#Features added

- Title drop down box
- Department drop down box
- Preferred contact method tick boxes
- Rich text editor for enquiry

#Features retained

I have retained the validation of all the fields. These are the following:

- First Name 
- Last name
- Email
- Subject

The email field has also retained the ability to check if a valid email has been input.

#To make it work
Place Extjs sdk into a folder called extjs.

To generate docs use the JSDUCK binary.

Command which I ran.

`
jsduck-6.0.0-beta.exe PATHTOEXTJS\webtree\extjs\src PARTHTOPROJECT\webtreeTask\src --output PARTHTOPROJECT\webtreeTask\docs  --warnings=-all:PATHTOEXTJS\webtreeTask\extjs\src
`
