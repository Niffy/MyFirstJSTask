#Decisions regarding chanages
The contact form is now no longer a pop up page.  I felt due to the size of the new contact form it was best placed in its own separate page. This would allow us in future to modify the page to make the website more helpful, by forcing the user down this route of a page, we could introduce a FAQ Section, perhaps even introduce a contact directory. This means the possibility of spending less time responding to repetitive enquires.  I felt a pop up would not be best placed to offer these future design and business considerations. This would allow us a path opportunity of improving the product over its life span.

I was able to make the code more modular, I did this by cutting the form up into sections and storing the components individually, this could mean in future just selecting the contact sections required to produce a pop up. Originally the code was all stuck together, making alterations, fixes or additions cumbersome. It introduced the possibility of breaking its operation or introducing bugs because the code is quite similar. Therefore the separation has allowed us the decreased the possibility of breaking its operation, decreased time required to introduce, fix or make changes to the required sections while allowing the possibility of modularity later on in the product life.  

Despite saying the pop up offering less possibilities, it would still be possible in future to produce a quick form if required for convenience.  

I have also taken the liberty of moving the values used to populate drop down boxes contents in to there own variables, again this allows for cleaner code to maintain and to also introduce new departments or titles.  As a side note, it would be possible to change the department section into something less specific such as a classification of what the enquiry entails.  The modularity of the code would allow this to be done very quickly.

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