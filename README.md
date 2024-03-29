# [JSL05] Submission: Galaxy Playlist Generator
# Project Overview: 
### Galaxy Playlist Generator

In this project, I will be combining my knowledge of JavaScript arrays and the `map()` function to create a personalized "Awesome Mix" playlist for each of the Guardians of the Galaxy. My task is to filter and organize songs based on each Guardian's musical preference, displaying a playlist tailored just for them.

![alt text](JSL05_solution.png)

# Utilizing Arrays and map() function

* For this project, I added more songs in the songs array and also added three more characters in the object for the guardians with their preferred genre.
* Have a function "generatePlaylist()" which returns an array which contains an object which contains the guardian name and a playlist filtered to have an array of objects having songs/tracks which match the preferred genre of the specific guardian.
* Have a variable which has assigned to it the function generatePlaylist which is going  to be used in the logic to loop through the returned array in order to add the information from the function's results into the HTML.
* Using the div element already in the HTML file, I fetched the element and assigned it to a variable. Using a foreach loop, taking in the guardian and playlist as parameters from the playlists variable, I created a div element and add a class to it which is used to add styling to the div element. I created a H4 element and added content to it calling the parameter for the guardian name and "playlist" string to indicate this is a specific guardian's playlist. I then added this H4 element inside the div element. I then created a paragraph element and added a class to it for styling, created a span element and added a class to it for styling and added content to it using filtered playlist fetching the song title and added the span inside the paragraph element. I then added into the content of the paragraph element the song artist and then added the paragraph element into the div element. Then I added the div element into the div element I had initially fetched from the DOM.


# Challenges

Not a lot of challenges from this project, I only had to do alot of reading to fully understand how exactly the map() function works, once I did more research and practised in scrimba I was able to complete this project easier. I also faced a little bit of difficulty when I was using the foreach loop for iterations, had a hard time figuring out which parameter to chose for the function.

# Feedback

I have no critical feedback, I just liked how challenging this project was. It helped build my problem solving skills and made me improve my pseudo code and thinking for target a problem in order to have a solution.










