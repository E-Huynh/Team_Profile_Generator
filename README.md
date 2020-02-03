# [Team Profile Generator](https://github.com/E-Huynh/Team_Profile_Generator)
## Purpose
Generate a .HTML file of team members after user inputs employee info into node using a command line input.
## Functionality
  * Employee class is assign for every team member entered
  
  * A subclass of Manager, Engineer, or Intern can be applied to each Employee
  
  * Each subclass has the following specific inputs gathered:
    
        Manager: Office Number
    
        Engineer: Github Username
    
        Intern: School Name
  
  * Validates inputs to meet the proper following formats:
  
    *All inputs must not be empty*
        
    *Name may contain only alpha characters and spaces*
    
    *ID may contain only numeric characters **AND** must not match previous ID inputs*
    
    *Email format is as follows traditional email formats*
    
        Email examples:
    
        Matches: asmith@mactec.com | foo12@foo.edu | bob.smith@foo.tv
    
        Non-matches: joe | @foo.com | a@a
    
    *Office Number may contain only numeric characters*
    
    *Github Username may contain any type of characters*
    
    *School Name may contain only alpha characters and spaces*
    
   * A confirmation to add new team member will be prompt at the end of each set of inputs
   
   * Selecting "No" to adding another team member will end the input prompts and create a teamProfile.html file in the outputs folder
   
   * Names will automatically be capitalized
        
## Technologies
  * Bulma
  * Node.js
  * Inquirer
  * Fs
  * Test Driven Development
## Installation
1. Save files to local machine
2. Open Terminal on app.js
3. Run NPM install
4. Run node app.js
## Instructions
Explain how to use the app.
## Images
### GIF showing functionality of the app
![Functionality of app](https://github.com/E-Huynh/Team_Profile_Generator/blob/master/Images%20and%20GIFs/Team%20Profile%20Generator%20Functionality.gif?raw=true)
### .HTML output from GIF
![teamProfile page](https://github.com/E-Huynh/Team_Profile_Generator/blob/master/Images%20and%20GIFs/teamProfile%20image.png?raw=true)
### Example of format with larger team
![teamProfile page](https://github.com/E-Huynh/Team_Profile_Generator/blob/master/Images%20and%20GIFs/teamProfile%20-%207%20members.png?raw=true)

