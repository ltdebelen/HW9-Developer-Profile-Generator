const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username"
    }
    // ,
    // {
    //   type: "list",
    //   message: "What is your favorite color?",
    //   name: "color",
    //   choices: ["green", "blue", "pink", "red"]
    // }
  ])
  .then(function(response) {
    // Query Github Data
    const username = response.username;
    const queryURL = `https://api.github.com/users/${username}`;

    axios.get(queryURL).then(function(result) {
      // Profile Image
      // Username
      // User location via Google Maps
      // User GitHub Profile
      // User blog
      // User bio
      // Number of public repositories
      // Number of followers
      // Number of GitHub stars
      // Number of users following

      const userProfile = {
        profile_img: result.data.avatar_url,
        username: result.data.login,
        location: result.data.location,
        blog: result.data.blog,
        bio: result.data.bio,
        num_repo: result.data.public_repos,
        num_followers: result.data.followers,
        num_stars: result.data.public_gists,
        num_following: result.data.following
      };

      console.log(userProfile);
    });

    // Pass Data to Generate HTML function
    // Create HTML File
    // Export HTML file to PDF
  });
