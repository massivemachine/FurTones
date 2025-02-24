# FurTones
Built by Max, Mayukhi and Oli for AstonHack 2025!

## Inspiration

As seasoned hackathon goers who have always created software hacks, we wanted to challenge ourselves to take on our first ever hardware hack. 

We came up with the idea of modding a keyboard to become self-playing while brainstorming ideas prior to the hackathon. As musicians ourselves who play together often, we thought creating something with a musical element would be a fitting touch to our personalities. Having our keyboard be a cat keyboard is a testament to our sheer levels of whimsy. >:)

When developing the UI, we realised we could tailor our project to meet Majestic's theme of Growth - we have taken a very educational stance on our project, and its goal is to help people grow as pianists and musicians. By using our form of interactive sheet music on the website and seeing it translated into physical action in real time, children gaining interest into instruments or music enthusiasts rusty on their music theory can practice these aspects in a more engaging and practical way.

While our project handles the topic of growth excellently in itself, we feel the theme also reflects onto our experiences at this hackathon as individuals. Having never done a hardware hack, we have definitely  seen ourselves become more and more confident with working beyond just software. We are all very proud of how much we have achieved over the course of the last 24 hours. :)

## What it does

Our cat keyboard - the first of its kind - is a self-playing, programmable kitty wonder! By interacting with the FurTones UI, users can dot notes they want to be played across a stave on their screen to hear it played out loud by the keyboard. By introducing those not so familiar with music theory to interactive sheet music, FurTones is an excellent way for budding pianists to see in real-time how the sheet music they write translates to sound and physical key movement! With additional features such as hearing audio upon placing notes, and being able to view labels on notes describing which keys they correspond to, players will be grow from eager novices to fully-fledged piano extraordinaires!

## How we built it

The keyboard itself is a Meoswic keyboard, which we have modded with servos to press the keys. These are all connected to and controlled by a Raspberry Pi. The Frontend of the application is built in HTML, CSS and JavaScript, and the backend is hosted using Flask. The notes the player inputs into the UI are sent to the Flask server through JavaScript POST queries, which the Raspberry Pi then takes as input to activate the servos and in turn press the appropriate keys on the keyboard.

## Challenges we ran into

We faced many challenges over the 24 hours, as you do in hackathons, mainly to do with the frontend and the positioning of notes on the interactive stave. This could get quite complicated with the CSS stylings, but we managed to implement the notes all correctly. There were also some issues with connecting to ports on the Raspberry Pi at times, as well as with the internet.

## Accomplishments that we're proud of

We are extremely proud of getting a working project in this sort of "sub-genre" of hackathon, and are all super impressed by it every time we get it to run! It is also wonderful seeing how other attendants of the hackathon react to our project, as it's not everyday you see a keyboard playing itself (especially one that meows ;) ).

## What's next for FurTones

There are plenty of additional functionalities we would love to see included in FurTones. In particular, we would love to have a larger variety of notes users can place on the stave, to see how different notes are played. We would also like to have a longer stave on our site, to allow for longer sheet music compositions - allowing users to create their own songs!

