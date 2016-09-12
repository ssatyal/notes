# a simple notes application

## installation instructions
None! The app is hosted on github pages at: https://ssatyal.github.io/notes/
..It runs using the AngularJS library.

## methodology
For this app I initially suffered from scope creep and wanted to add a bunch of functionality. I almost over-complicated it and decided to strip out things I didn't think were necessary for the requirements (ex. having a show page for each of the notes instead of everything living on one page).

After coming to the conclusion to start smaller, I also opted to not use any build tools (my choice would have been Gulp!). Since this is a simple application, I knew that most of what needed to be accomplished could be done with relatively few files. Instead of taking time to set up a build environment with JS uglifiers, CSS pre-processors, and configuring auto-reloading, I wanted to just jump into coding the application functionality. I definitely had fun taking on this challenge!

## a note on the U in CRUD
There is no 'update' function built into my angular code. Since the data is only persisting in a single browser session (and not into a db), I figured there doesn't really need to be a 'save' button and update function as long as the notes that are changed still have their new values when you click away and come back to them without refreshing the page. And they do.

If this was a full REST app with a backend, I would implement an update function by using a custom Angular directive; this custom directive would also be mechanism by which you could instantiate a new note!
