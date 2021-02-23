# Project Team
* Chris Miller [github](https://github.com/ChrisMiller83) [linkedIn](https://www.linkedin.com/in/chris-miller-0450a1aa/)
* Tucker Sheram [github](https://github.com/tgsher9329) [linkedIn](https://www.linkedin.com/in/tucker-sheram-060a59204/)
* Matt Chaleski [github](https://github.com/MattChale123) [linkedIn](https://www.linkedin.com/in/matt-chaleski-90ab701b8/)
* Michael Moore [github](https://github.com/michaelhmoore) [linkedIn](https://www.linkedin.com/in/michael-h-moore/)

# Project Requirements
## Technical Requirements
* Implement a Responsive Design that works on Chrome, OSX, iOS devices, and Android devices.
* Access at least 2 remote APIs
* HTML is well structured
* Javascript loads correctly and doesn't have any console errors

## Workflow Requirements
* Work in a group
* Use agile methodolgy (daily standups)
* Create a github repo
  * Collaborate using PRs (Pull Requests), making sure to tag a reviewer for approval
  * Reviewer must code review through Github and approve before the PR can be merged. If there are no comments, the code has spaghetti, or has difficult to read spots, code review didn't happen.
* Use a feature tracking system, such as:
  * Github Projects
  * Trello

## **General Code and Frameworks Used:**
* ![](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
* ![](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
* ![Bootstrap](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white)
* ![jQuery](https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white)
* Axios

## APIs Used
* [Spotify](https://developer.spotify.com/documentation/web-api/)
* [Open Weather Map](https://openweathermap.org/api) 

## Backend
* node.js
* crated backend token authenication


# Home Page
The Home Page was created by Matt and Michael.  It takes a user input to find songs and gives a list of songs with the same name.  You can then listen to a 30 second track of one of the songs.  The project was supposed to be only a front-end project, however Matt had to make it a full front-end/back-end project in order for the api to correctly work.

# About Page
The About Page was created by Chris and Tucker.  Chris created the original format and template.  Tucker created the css styling and design.  Then each team member add an about paragraph about themselves.

# The Contact Page
The Contact Page was created by Chris.  Chris used bootstrap to create cards for each team member.  He cropped images of each team member and added them to the cards.  He then, added icons for github,  linkedIn, and Slack; then made each icon link to each team members github, linkedIn and Slack accounts.  Finally he added an email link to the contact button which opens an email page allowing the user to contact a team member via email.

# The Weather Page
The Weather Page was created by Tucker.  Tucker used the openweathermap api to generate a widget that gives the user the current weather conditions for the user's requested location.  




# Spotify Accounts Authentication Examples

This project contains basic demos showing the different OAuth 2.0 flows for [authenticating against the Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/).

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow


## Installation

These examples run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the examples with the ones you get from My Applications.

## Running the examples
In order to run the different examples, open the folder with the name of the flow you want to try out, and run its `app.js` file. For instance, to run the Authorization Code example do:

    $ cd authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser.
