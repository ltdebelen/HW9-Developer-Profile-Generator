# HW9-Developer-Profile-Generator

## Description
A command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

``` node index.js ```

The user will be prompted for a favorite color, which will be used as the background color for cards.
The PDF will be populated with the following:

* Profile image
* User name
* User location via Google Maps
* User GitHub profile
* User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Other Criteria/Features

* The application generates a PDF resume from the user provided GitHub profile.
* The generated resume includes a bio image from the user's GitHub profile.
* The generated resume includes the user's location and a link to their GitHub profile.
* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.
* The background color of the generated PDF matches the color that the user provides.

## Technologies Used
HTML, CSS, JavaScript, Node.JS, Node Modules (Inquirer, Axios, HTML-PDF, FS)

## How to use
* Run ```npm install```
* After installing the node-modules needed for the file, run ```node index.js```

