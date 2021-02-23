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
