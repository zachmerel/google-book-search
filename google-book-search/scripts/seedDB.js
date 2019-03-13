const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBookshelf"
);

const bookSeed = [
  {
    id: "BcG2dVRXKukC",
    title: "The Name of the Wind",
    subtitle: "The Kingkiller Chronicle:",
    link: "http://books.google.com/books?id=BcG2dVRXKukC&dq=nameof+thewind&hl=&source=gbs_api",
    authors: ["Patrick Rothfuss"],
    description:
      "'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. My name is Kvothe. You may have heard of me' So begins the tale of Kvothe - currently known as Kote, the unassuming innkeepter - from his childhood in a troupe of traveling players, through his years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic. In these pages you will come to know Kvothe the notorious magician, the accomplished thief, the masterful musician, the dragon-slayer, the legend-hunter, the lover, the thief and the infamous assassin. The Name of the Wind is fantasy at its very best, and an astounding must-read title.",
    image:
      "http://books.google.com/books/content?id=rJM9rgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  {
    id: "rJM9rgEACAAJ",
    title: "The Wise Man's Fear",
    subtitle: "The Kingkiller Chronicle:",
    infoLink: "http://books.google.com/books?id=rJM9rgEACAAJ&dq=nameof+thewind&hl=&source=gbs_api",
    authors: ["Patrick Rothfuss"],
    description:
      "Sequel to the extraordinary THE NAME OF THE WIND, THE WISE MAN'S FEAR is the second instalment of this superb fantasy trilogy from Patrick Rothfuss. This is the most exciting fantasy series since George R. R. Martin's A SONG OF ICE AND FIRE, and a must-read for all fans of HBO's GAME OF THRONES. Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic ... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord. Packed with as much magic, adventure and home-grown drama as THE NAME OF THE WIND, this is a sequel in every way the equal to its predecessor and a must-read for all fantasy fans. Readable, engaging and gripping THE WISE MAN'S FEAR is the biggest and the best new fantasy novel out there.",
    image:
      "http://books.google.com/books/content?id=rJM9rgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
