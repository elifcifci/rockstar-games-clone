// First users view 19 cards. When users click the "more stories" button add 20 more cards on the page
const ratingImgs = {
  teen: "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/24d49820dabbd2748db5.svg",
  mature:
    "https://media-rockstargames-com.akamaized.net/mfe2/components/1450c71/img/a816ad46b6f08d4414b8.svg",
};

export const gamesConstant = {
  topGame: {
    img: "https://media-rockstargames-com.akamaized.net/mfe2/sites-rockstargames-downloads/b9e9b05/img/4008775794df379a870b.jpg",
    title: "Red Dead Redemption 2",
    describe: [
      "America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
      "After a robbery goes terribly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
    ],
  },

  featuredDownloads: [
    {
      id: "0",
      img: "https://media-rockstargames-com.akamaized.net/mfe2/sites-rockstargames-downloads/b9e9b05/img/3b4d29057ecd8a99b39d.jpg",
      title: "Rockstar Games Launcher",
    },
    {
      id: "1",
      img: "https://media-rockstargames-com.akamaized.net/mfe2/sites-rockstargames-downloads/b9e9b05/img/7dcdb207fec12e87005f.jpg",
      title: "Red Dead Redemption 2 Companion App",
    },
    {
      id: "2",
      img: "https://media-rockstargames-com.akamaized.net/mfe2/sites-rockstargames-downloads/b9e9b05/img/a9e497de713188e98164.jpg",
      title: "GTA Online Shark Cards",
    },
    {
      id: "3",
      img: "https://media-rockstargames-com.akamaized.net/mfe2/sites-rockstargames-downloads/b9e9b05/img/e2104266be454646fa13.jpg",
      title: "Red Dead Online Gold Bars",
    },
  ],

  pcMacGames: [
    {
      id: "0",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/bully.jpg",
      selectRetailer: ["Warehouse (PC)"],
    },
    {
      id: "1",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/reddeadredemption2.jpg",
      selectRetailer: ["Rockstar (PS)"],
    },
    {
      id: "2",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/V.jpg",
      selectRetailer: ["Warehouse (PC)", "Steam (PC)", "Amazon (PC)"],
    },
    {
      id: "3",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/maxpayne3.jpg",
      selectRetailer: [
        "Warehouse (PC)",
        "Steam (PC)",
        "Amazon US (PC)",
        "Amazon UK (PC)",
      ],
    },
    {
      id: "4",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/lanoire.jpg",
      selectRetailer: [
        "Warehouse (PC)",
        "Steam (PC)",
        "Amazon US (PC)",
        "Amazon UK (PC)",
      ],
    },
    {
      id: "5",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/episodesfromlibertycity.jpg",
      selectRetailer: ["Warehouse (PC)", "Steam (PC)", "Amazon US (PC)"],
    },
    {
      id: "6",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/IV.jpg",
      selectRetailer: [
        "Warehouse (PC)",
        "Steam (PC)",
        "Amazon (PC)",
        "Warehouse (Mac)",
      ],
    },
    {
      id: "7",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/sanandreas.jpg",
      selectRetailer: ["Warehouse (PC)", "Steam (PC)", "Amazon (PC)"],
    },
  ],

  mobileGamesApps: [
    {
      id: "0",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/apps/rdr2-companion.png",
      selectRetailer: ["iOS"],
    },
    {
      id: "1",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/apps/bully.png",
      selectRetailer: ["iOS", "Android"],
    },
    {
      id: "2",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/apps/gtalcs.png",
      selectRetailer: ["iOS", "Android", "Kindle"],
    },
    {
      id: "3",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/apps/sanandreas.png",
      selectRetailer: ["iOS", "Android", "Windows Phone", "Kindle"],
    },
    {
      id: "4",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/apps/gtaiii.png",
      selectRetailer: ["iOS", "Android", "Kindle"],
    },
    {
      id: "5",
      img: "https://www.rockstargames.com/img/global/downloads/apps/ifruit.png",
      selectRetailer: ["iOS", "Android", "Windows Phone", "Kindle", "PS Vita"],
    },
    {
      id: "6",
      img: "https://www.rockstargames.com/img/global/downloads/apps/gtavmanual.png",
      selectRetailer: [
        "iOS",
        "Android",
        "Windows Phone",
        "Kindle",
        "PS",
        "Mac",
      ],
    },
    {
      id: "7",
      img: "https://www.rockstargames.com/img/global/downloads/apps/gtavicecity.png",
      selectRetailer: ["iOS", "Android", "Kindle"],
    },
  ],

  miscellaneous: [
    {
      id: "0",
      title: "DLC",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/dlc.jpg",
      link: "",
    },
    {
      id: "1",
      title: "Music",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/music.jpg",
      link: "",
    },
    {
      id: "2",
      title: "Rockstar Art",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/rockstarwallpaper.jpg",
      link: "",
    },
    {
      id: "3",
      title: "Game Art",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/gamewallpaper.jpg",
      link: "",
    },
    {
      id: "4",
      title: "Screensavers",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/gamescreensaver.jpg",
      link: "",
    },
    {
      id: "5",
      title: "Avatars",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/avatars.jpg",
      link: "",
    },
    {
      id: "6",
      title: "Patches",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/patches.jpg",
      link: "",
    },
    {
      id: "7",
      title: "Gold Bars",
      img: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/collections/goldbars.jpg",
      link: "",
    },
  ],
};