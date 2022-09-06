// First users view 19 cards. When users click the "more stories" button add 20 more cards on the page
const ratingImgs= {
    teen: "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/24d49820dabbd2748db5.svg",
    mature: "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/a816ad46b6f08d4414b8.svg",
}

export const gamesConstant = [
    {
        id: "0",
        title: "Red Dead Redemption 2",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        descriptions:[
            "America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
            "After a robbery goes terribly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        ],
        screenPhotographs: ["https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-1.jpg",
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-2.jpg",
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-3.jpg",
        "ttps://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-4.jpg"],
        specifications: {
            developer: ["Rockstar Studios"],
            platform: ["PS4", "Xbox One", "PC", "Stadia"],
            releaseDate: "October 26, 2018",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore", "Intense Violence", "Nudity", "Sexual Content", "Strong Language", "Use of Drugs and Alcohol"],     
        }
      },
      {
        id: "1",
        title: "L.A. Noire",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/lanoire.jpg",
        descriptions:[
            "Amid the post-war boom of Hollywood's Golden Age, Cole Phelps — an LAPD detective — is thrown headfirst into a city drowning in its own success. Corruption is rampant, the drug trade is exploding, and murder rates are at an all-time high. In his fight to climb the ranks and do what's right, Phelps must unravel the truth behind a string of arson attacks, racketeering conspiracies, and brutal murders, battling the L.A. underworld and even members of his own department to uncover a secret that could shake the city to its rotten core.",
            "Utilizing revolutionary facial animation technology that captures every nuance of an actor's facial performance in astonishing detail, L.A. Noire blends the breathtaking action with true detective work for an unprecedented interactive experience. Solve brutal crimes, plots, and conspiracies inspired by real crimes from 1947 Los Angeles, one of the most corrupt and violent times in L.A. history. Search for clues, chase down suspects, and interrogate witnesses as you struggle to find the truth in a city where everyone has something to hide.",
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-2.jpg", 
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-4.jpg"
        ],
        specifications: {
            developer: ["Rockstar Leeds", "Team Bondi"],
            platform: [
                "PlayStation VR", "Oculus Rift", "HTC Vive"," Nintendo Switch","PS4", "Xbox One", "PC", "Valve Index", "PS3", "Xbox 360",
            ],
            releaseDate: "May 17, 2011",
            ratingImg: ratingImgs.mature,
            rating: ["Intense Violence","Blood and Gore","Sexual Themes","Nudity","Strong Language","Use of Drugs"]
        } 
      },
      {
        id: "2",
        title: "Bully",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/bully.jpg",
        descriptions:[
            "The Rockstar tradition of groundbreaking, original gameplay and humorous tongue-in-cheek storytelling invades an entirely new setting: the schoolyard. As a mischievous schoolboy, you'll stand up to bullies, get picked on by teachers, play pranks, win or lose the girl, and ultimately learn to navigate the obstacles of the worst school around, Bullworth Academy — a corrupt and crumbling prep school with an uptight facade.",
            "The story follows Jimmy Hopkins, a teenager who's been expelled from every school he's ever attended. Left to fend for himself after his mother abandons him at Bullworth to go on her fifth honeymoon, Jimmy has a whole year of school ahead of him; working his way up the social ladder of this demented institution of supposed learning, standing up for what he thinks is right, and taking on the liars, cheats, and snobs who are the most popular members of the student body and faculty. If Jimmy can survive the school year and outsmart his rivals, he could rule the school."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar Vancouver"],
            platform: ["PS4", "PC", "PS3", "Xbox 360", "Wii", "iOS", "Android", "PS2"],
            releaseDate: "October 17, 2006",
            ratingImg: ratingImgs.teen,
            rating: ["Animated Blood","Crude Humor","Language","Sexual Themes","Use of Alcohol and Tobacco","Violence"]
        }     
      },
      {
        id: "3",
        title: "Max Payne 3",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/maxpayne3.jpg",
        descriptions:[
            "For Max, the tragedies that took his loved ones years ago are wounds that refuse to heal. No longer a cop, close to washed up, and addicted to pain killers, he takes a job in São Paulo, Brazil, protecting the family of wealthy real estate mogul Rodrigo Branco in an effort to finally escape his troubled past. But as events spiral out of his control, Max Payne finds himself alone on the streets of an unfamiliar city, desperately searching for the truth and fighting for a way out.",
            "Featuring cutting edge shooting mechanics for precision gunplay, advanced new Bullet Time® and Shootdodge™ effects, full integration of Natural Motion’s Euphoria Character Behavior system for lifelike movement, and a dark and twisted story, Max Payne 3 is a seamless, highly detailed, cinematic experience."
        ],
        screenPhotographs: [
            "https://videos-rockstargames-com.akamaized.net/screencaps/10071/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9971/en_us/1920.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9951/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9731/en_us/1280.jpg"
        ],
        specifications: {     
            developer: ["Rockstar Studios"],
            platform:["PC", "PS3", "Xbox 360", "Mac"],
            releaseDate: "May 15, 2012",
            ratingImg: "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/a816ad46b6f08d4414b8.svg",
            rating: [
                "Blood and Gore", "Intense Violence", "Partial Nudity", "Strong Language", "Strong Sexual Content", "Use of Drugs and Alcohol"
            ],  
        }       
      },
      {
        id: "4",
        title: "Red Dead Redemption: Undead Nightmare",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/undeadnightmare.jpg",
        descriptions:[
            "Across the vast Western frontier, a plague is spreading ... When former outlaw John Marston wakes up at his farmhouse, he finds a world gone insane: overnight, deranged hordes have overrun the towns and outposts of the American frontier. In a desperate attempt to save his family, Marston must traverse a world torn apart by chaos and disorder, using every skill he has to survive long enough to find a cure.",
            "Take on the Dying and Undead West in multiplayer with exciting Co-Op missions and Competitive Modes. Attack and defend in Stronghold mode, or take over territory in Land Grab."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["PS3", "Xbox 360"],
            releaseDate: "October 26, 2010",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore", "Intense Violence", "Sexual Themes", "Strong Language"]
        }       
      },
      {
        id: "5",
        title: "Red Dead Redemption",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption.jpg",
        descriptions:[
            "America, early 1900's. The era of the cowboy is coming to an end. When federal agents threaten his family, former outlaw John Marston is sent across the American frontier to help bring the rule of law. Experience intense gun battles, dramatic train robberies, bounty hunting, and duels during a time of violent change.",
            "Red Dead Redemption is an epic battle for survival in a beautiful open world as John Marston struggles to bury his blood-stained past, one man at a time."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["Xbox One", "PS3", "Xbox 360"],
            releaseDate: "May 18, 2010",
            ratingImg: ratingImgs.mature,
            rating: ["Blood","Intense Violence","Nudity","Strong Language","Strong Sexual Content","Use of Drugs"],  
        }       
      },
      {
        id: "6",
        title: "Grand Theft Auto: Episodes from Liberty City",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/episodesfromlibertycity.jpg",
        descriptions:[
            "Liberty City worships money and status — it's heaven for those who have them, and a living nightmare for those who don’t. Johnny, a veteran member of The Lost biker gang, is caught in the middle of a vicious turf war with rival gangs for control of the city. Luis, part-time hoodlum and full-time assistant to legendary nightclub impresario Tony Prince (a.k.a. “Gay Tony”), is struggling with the competing loyalties of family and friends in a world in which everyone has a price. Their lives cross paths with devastating consequences as they fight to survive in a city torn apart by violence and corruption.",
            "Grand Theft Auto: Episodes from Liberty City includes both The Lost and Damned and The Ballad of Gay Tony."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar North"],
            platform:["Xbox One", "PC", "PS3", "Xbox 360"],
            releaseDate: "October 9, 2009",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore","Intense Violence","Nudity","Strong Language","Strong Sexual Content","Use of Drugs and Alcohol"],  
        }       
      },
      {
        id: "7",
        title: "Midnight Club: Los Angeles",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/midnightclubLA.jpg",
        descriptions:[
            "The best way to see Los Angeles is at 245mph. Race at breakneck speeds through the streets of modern-day L.A. recreated in stunning detail. Drive the hottest range of real-world tuners, muscle cars, exotics and superbikes on the streets today. Customize your vehicle with the best after-market performance parts and custom kits. Illegal street racing with no track, no load times, no rules: Welcome to the Midnight Club.",
            "Retired Features: Rate My Ride and Driving Test unlocks for Midnight Club Los Angeles on Xbox 360 and PlayStation®3 are no longer available. Online Multiplayer and leaderboards are no longer be available for PlayStation®3."
        ],
        screenPhotographs: [
            "https://videos-rockstargames-com.akamaized.net/screencaps/45/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/42/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/34/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/10/en_us/1280.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["Xbox One", "PS3", "Xbox 360"],
            releaseDate: "October 21, 2008",
            ratingImg: ratingImgs.teen,
            rating: ["Mild Suggestive Themes","Mild Violence","Strong Lyrics"],  
        }       
      },
      {
        id: "8",
        title: "Grand Theft Auto IV",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/IV.jpg",
        descriptions:[
            "What does the American Dream mean today? For Niko Bellic, fresh off the boat from Europe, it is the hope he can escape his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of opportunity.",
            "As they slip into debt and are dragged into a criminal underworld by a series of shysters, thieves, and sociopaths, they discover that the reality is very different from the dream in a city that worships money and status, and is heaven for those who have them and a living nightmare for those who don't."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-4.jpg",
        ],
        specifications: {     
            developer: ["Rockstar North", "Rockstar Toronto"],
            platform:["Xbox One", "PC", "PS3", "Xbox 360"],
            releaseDate: "April 29, 2008",
            ratingImg: ratingImgs.mature,
            rating: ["Intense Violence", "Blood", "Strong Language", "Strong Sexual Content", "Partial Nudity", "Use of Drugs and Alcohol"],  
        }     
      },
      {
        id: "9",
        title: "Max Payne 2: The Fall of Max Payne",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/maxpayne2.jpg",
        descriptions:[
            "Max Payne 2: The Fall of Max Payne is a violent, film-noir love story. Dark, tragic, and intense, the in-depth story is a thrill-ride of shocking twists and revelations. Love hurts.",
            "The fierce, yet stylish action sequences and slow-motion gunplay that has become synonymous with Max Payne is back and better than ever. New and enhanced moves and options provide breathtaking cinematic gameplay. Max Payne 2: The Fall of Max Payne raises the bar on action games all over again.",
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-4.jpg",
        ],
        specifications: {
            developer: ["Remedy Entertainment"],
            platform:[ "PC", "PS2", "Xbox"],
            releaseDate: "October 14, 2003",
            ratingImg: ratingImgs.mature,
            rating: ["Blood", "Intense Violence", "Mature Sexual Themes", "Strong Language"],     
      }},
      {
        id: "10",
        title: "Red Dead Redemption 2",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption2.jpg",
        descriptions:[
            "America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
            "After a robbery goes terribly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        ],
        screenPhotographs: ["https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-1.jpg",
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-2.jpg",
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-3.jpg",
        "ttps://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/912-4.jpg"],
        specifications: {
            developer: ["Rockstar Studios"],
            platform: ["PS4", "Xbox One", "PC", "Stadia"],
            releaseDate: "October 26, 2018",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore", "Intense Violence", "Nudity", "Sexual Content", "Strong Language", "Use of Drugs and Alcohol"],     
        }
      },
      {
        id: "11",
        title: "L.A. Noire",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/lanoire.jpg",
        descriptions:[
            "Amid the post-war boom of Hollywood's Golden Age, Cole Phelps — an LAPD detective — is thrown headfirst into a city drowning in its own success. Corruption is rampant, the drug trade is exploding, and murder rates are at an all-time high. In his fight to climb the ranks and do what's right, Phelps must unravel the truth behind a string of arson attacks, racketeering conspiracies, and brutal murders, battling the L.A. underworld and even members of his own department to uncover a secret that could shake the city to its rotten core.",
            "Utilizing revolutionary facial animation technology that captures every nuance of an actor's facial performance in astonishing detail, L.A. Noire blends the breathtaking action with true detective work for an unprecedented interactive experience. Solve brutal crimes, plots, and conspiracies inspired by real crimes from 1947 Los Angeles, one of the most corrupt and violent times in L.A. history. Search for clues, chase down suspects, and interrogate witnesses as you struggle to find the truth in a city where everyone has something to hide.",
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-2.jpg", 
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/35-4.jpg"
        ],
        specifications: {
            developer: ["Rockstar Leeds", "Team Bondi"],
            platform: [
                "PlayStation VR", "Oculus Rift", "HTC Vive"," Nintendo Switch","PS4", "Xbox One", "PC", "Valve Index", "PS3", "Xbox 360",
            ],
            releaseDate: "May 17, 2011",
            ratingImg: ratingImgs.mature,
            rating: ["Intense Violence","Blood and Gore","Sexual Themes","Nudity","Strong Language","Use of Drugs"]
        } 
      },
      {
        id: "12",
        title: "Bully",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/bully.jpg",
        descriptions:[
            "The Rockstar tradition of groundbreaking, original gameplay and humorous tongue-in-cheek storytelling invades an entirely new setting: the schoolyard. As a mischievous schoolboy, you'll stand up to bullies, get picked on by teachers, play pranks, win or lose the girl, and ultimately learn to navigate the obstacles of the worst school around, Bullworth Academy — a corrupt and crumbling prep school with an uptight facade.",
            "The story follows Jimmy Hopkins, a teenager who's been expelled from every school he's ever attended. Left to fend for himself after his mother abandons him at Bullworth to go on her fifth honeymoon, Jimmy has a whole year of school ahead of him; working his way up the social ladder of this demented institution of supposed learning, standing up for what he thinks is right, and taking on the liars, cheats, and snobs who are the most popular members of the student body and faculty. If Jimmy can survive the school year and outsmart his rivals, he could rule the school."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/19-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar Vancouver"],
            platform: ["PS4", "PC", "PS3", "Xbox 360", "Wii", "iOS", "Android", "PS2"],
            releaseDate: "October 17, 2006",
            ratingImg: ratingImgs.teen,
            rating: ["Animated Blood","Crude Humor","Language","Sexual Themes","Use of Alcohol and Tobacco","Violence"]
        }     
      },
      {
        id: "13",
        title: "Max Payne 3",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/maxpayne3.jpg",
        descriptions:[
            "For Max, the tragedies that took his loved ones years ago are wounds that refuse to heal. No longer a cop, close to washed up, and addicted to pain killers, he takes a job in São Paulo, Brazil, protecting the family of wealthy real estate mogul Rodrigo Branco in an effort to finally escape his troubled past. But as events spiral out of his control, Max Payne finds himself alone on the streets of an unfamiliar city, desperately searching for the truth and fighting for a way out.",
            "Featuring cutting edge shooting mechanics for precision gunplay, advanced new Bullet Time® and Shootdodge™ effects, full integration of Natural Motion’s Euphoria Character Behavior system for lifelike movement, and a dark and twisted story, Max Payne 3 is a seamless, highly detailed, cinematic experience."
        ],
        screenPhotographs: [
            "https://videos-rockstargames-com.akamaized.net/screencaps/10071/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9971/en_us/1920.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9951/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/9731/en_us/1280.jpg"
        ],
        specifications: {     
            developer: ["Rockstar Studios"],
            platform:["PC", "PS3", "Xbox 360", "Mac"],
            releaseDate: "May 15, 2012",
            ratingImg: "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/a816ad46b6f08d4414b8.svg",
            rating: [
                "Blood and Gore", "Intense Violence", "Partial Nudity", "Strong Language", "Strong Sexual Content", "Use of Drugs and Alcohol"
            ],  
        }       
      },
      {
        id: "14",
        title: "Red Dead Redemption: Undead Nightmare",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/undeadnightmare.jpg",
        descriptions:[
            "Across the vast Western frontier, a plague is spreading ... When former outlaw John Marston wakes up at his farmhouse, he finds a world gone insane: overnight, deranged hordes have overrun the towns and outposts of the American frontier. In a desperate attempt to save his family, Marston must traverse a world torn apart by chaos and disorder, using every skill he has to survive long enough to find a cure.",
            "Take on the Dying and Undead West in multiplayer with exciting Co-Op missions and Competitive Modes. Attack and defend in Stronghold mode, or take over territory in Land Grab."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/111-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["PS3", "Xbox 360"],
            releaseDate: "October 26, 2010",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore", "Intense Violence", "Sexual Themes", "Strong Language"]
        }       
      },
      {
        id: "15",
        title: "Red Dead Redemption",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/reddeadredemption.jpg",
        descriptions:[
            "America, early 1900's. The era of the cowboy is coming to an end. When federal agents threaten his family, former outlaw John Marston is sent across the American frontier to help bring the rule of law. Experience intense gun battles, dramatic train robberies, bounty hunting, and duels during a time of violent change.",
            "Red Dead Redemption is an epic battle for survival in a beautiful open world as John Marston struggles to bury his blood-stained past, one man at a time."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/1-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["Xbox One", "PS3", "Xbox 360"],
            releaseDate: "May 18, 2010",
            ratingImg: ratingImgs.mature,
            rating: ["Blood","Intense Violence","Nudity","Strong Language","Strong Sexual Content","Use of Drugs"],  
        }       
      },
      {
        id: "16",
        title: "Grand Theft Auto: Episodes from Liberty City",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/episodesfromlibertycity.jpg",
        descriptions:[
            "Liberty City worships money and status — it's heaven for those who have them, and a living nightmare for those who don’t. Johnny, a veteran member of The Lost biker gang, is caught in the middle of a vicious turf war with rival gangs for control of the city. Luis, part-time hoodlum and full-time assistant to legendary nightclub impresario Tony Prince (a.k.a. “Gay Tony”), is struggling with the competing loyalties of family and friends in a world in which everyone has a price. Their lives cross paths with devastating consequences as they fight to survive in a city torn apart by violence and corruption.",
            "Grand Theft Auto: Episodes from Liberty City includes both The Lost and Damned and The Ballad of Gay Tony."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/28-4.jpg"
        ],
        specifications: {     
            developer: ["Rockstar North"],
            platform:["Xbox One", "PC", "PS3", "Xbox 360"],
            releaseDate: "October 9, 2009",
            ratingImg: ratingImgs.mature,
            rating: ["Blood and Gore","Intense Violence","Nudity","Strong Language","Strong Sexual Content","Use of Drugs and Alcohol"],  
        }       
      },
      {
        id: "17",
        title: "Midnight Club: Los Angeles",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/midnightclubLA.jpg",
        descriptions:[
            "The best way to see Los Angeles is at 245mph. Race at breakneck speeds through the streets of modern-day L.A. recreated in stunning detail. Drive the hottest range of real-world tuners, muscle cars, exotics and superbikes on the streets today. Customize your vehicle with the best after-market performance parts and custom kits. Illegal street racing with no track, no load times, no rules: Welcome to the Midnight Club.",
            "Retired Features: Rate My Ride and Driving Test unlocks for Midnight Club Los Angeles on Xbox 360 and PlayStation®3 are no longer available. Online Multiplayer and leaderboards are no longer be available for PlayStation®3."
        ],
        screenPhotographs: [
            "https://videos-rockstargames-com.akamaized.net/screencaps/45/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/42/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/34/en_us/1280.jpg",
            "https://videos-rockstargames-com.akamaized.net/screencaps/10/en_us/1280.jpg"
        ],
        specifications: {     
            developer: ["Rockstar San Diego"],
            platform:["Xbox One", "PS3", "Xbox 360"],
            releaseDate: "October 21, 2008",
            ratingImg: ratingImgs.teen,
            rating: ["Mild Suggestive Themes","Mild Violence","Strong Lyrics"],  
        }       
      },
      {
        id: "18",
        title: "Grand Theft Auto IV",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/IV.jpg",
        descriptions:[
            "What does the American Dream mean today? For Niko Bellic, fresh off the boat from Europe, it is the hope he can escape his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of opportunity.",
            "As they slip into debt and are dragged into a criminal underworld by a series of shysters, thieves, and sociopaths, they discover that the reality is very different from the dream in a city that worships money and status, and is heaven for those who have them and a living nightmare for those who don't."
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-2.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/25-4.jpg",
        ],
        specifications: {     
            developer: ["Rockstar North", "Rockstar Toronto"],
            platform:["Xbox One", "PC", "PS3", "Xbox 360"],
            releaseDate: "April 29, 2008",
            ratingImg: ratingImgs.mature,
            rating: ["Intense Violence", "Blood", "Strong Language", "Strong Sexual Content", "Partial Nudity", "Use of Drugs and Alcohol"],  
        }     
      },
      {
        id: "19",
        title: "Max Payne 2: The Fall of Max Payne",
        poster: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/maxpayne2.jpg",
        descriptions:[
            "Max Payne 2: The Fall of Max Payne is a violent, film-noir love story. Dark, tragic, and intense, the in-depth story is a thrill-ride of shocking twists and revelations. Love hurts.",
            "The fierce, yet stylish action sequences and slow-motion gunplay that has become synonymous with Max Payne is back and better than ever. New and enhanced moves and options provide breathtaking cinematic gameplay. Max Payne 2: The Fall of Max Payne raises the bar on action games all over again.",
        ],
        screenPhotographs: [
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-1.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-3.jpg",
            "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/screens/39-4.jpg",
        ],
        specifications: {
            developer: ["Remedy Entertainment"],
            platform:[ "PC", "PS2", "Xbox"],
            releaseDate: "October 14, 2003",
            ratingImg: ratingImgs.mature,
            rating: ["Blood", "Intense Violence", "Mature Sexual Themes", "Strong Language"],     
      }},
  ];
  