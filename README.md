# remote-reveal
Web application to remotely reveal a numeric milestone on another device

# Why I made this
I was asked by a friend on short notice if I knew of a way to reveal the number of food servings packed during a Kids Against Hunger event... The catch being that the number wouldn't be known until almost immediately before it was displayed to the audience. I couldn't find anything that was dynamic enough to handle being given the number after already being fullscreen, so I decided to make something myself as a 24-hour challenge.

# How it works
With this application, a device can either be a "projector" or "remote," the projector of course being the device that displays the number, and the remote being the device that inputs and triggers the reveal. When "projector" is selected, a code is given for the remote to "join." (I got this idea from playing many, many rounds of Kahoot during school.) The projector waits until a remote is connected and a number is entered, at which point it's ready for the "trigger" button to be pressed, revealing the number.
