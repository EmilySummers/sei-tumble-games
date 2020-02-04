const mongoose = require('mongoose')
const Game = require('../models/game')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'Emily',
          email: 'emily@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'Summers',
          email: 'summers@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => { 
      console.log(`${(createdUsers.length)} users created`) 
      return Game.create([
        {
          name: 'Terraforming Mars',
          year: 2016,
          description: 'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things.',
          minPlayers: 1,
          maxPlayers: 5,
          age: 12,
          duration: 120,
          image: 'https://cf.geekdo-images.com/imagepage/img/sgZLoyg3KKeHvyHel8tZ2TIkXRw=/fit-in/900x600/filters:no_upscale()/pic3536616.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/LQfg8RLNaoPwMs9yM5ns8nmLfow=/fit-in/900x600/filters:no_upscale()/pic3540110.jpg',
          user: createdUsers[0]
        }, {
          name: 'King of Tokyo',
          year: 2011,
          description: 'In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens—all of whom are destroying Tokyo and whacking each other in order to become the one and only King of Tokyo.',
          minPlayers: 2,
          maxPlayers: 6,
          age: 8,
          duration: 30,
          image: 'https://cf.geekdo-images.com/imagepage/img/9IVtaqkL16h9Bchjy99c4zkEn0g=/fit-in/900x600/filters:no_upscale()/pic3043734.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/brjIOZ5n_FYaq6G6HCTWXETBjTs=/fit-in/900x600/filters:no_upscale()/pic3043746.jpg',
          user: createdUsers[0]
        }, {
          name: 'Mage Knight',
          year: 2011,
          description: 'The Mage Knight board game puts you in control of one of four powerful Mage Knights as you explore (and conquer) a corner of the Mage Knight universe under the control of the Atlantean Empire. Build your army, fill your deck with powerful spells and actions, explore caves and dungeons, and eventually conquer powerful cities controlled by this once-great faction! In competitive scenarios, opposing players may be powerful allies, but only one will be able to claim the land as their own. In cooperative scenarios, the players win or lose as a group. Solo rules are also included.',
          minPlayers: 1,
          maxPlayers: 4,
          age: 14,
          duration: 150,
          image: 'https://cf.geekdo-images.com/imagepage/img/99jI1AXEfv3y1z0ZZmy2z8Ltxpc=/fit-in/900x600/filters:no_upscale()/pic1083380.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/8HY8Kpc9hKp8-swwvCIdTdECadI=/fit-in/900x600/filters:no_upscale()/pic1083871.jpg',
          user: createdUsers[1]
        }, {
          name: '7 Wonders',
          year: 2010,
          description: 'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.',
          minPlayers: 2,
          maxPlayers: 7,
          age: 10,
          duration: 30,
          image: 'https://cf.geekdo-images.com/imagepage/img/iCiVQ8UnKtO4wt9wBYS51_DXTFo=/fit-in/900x600/filters:no_upscale()/pic860217.jpg',
          boardImage: 'https://goblingames.com.mk/wp/wp-content/uploads/2017/09/7w-comp.jpg',
          user: createdUsers[0]
        }, {
          name: 'Pandemic',
          year: 2008,
          description: 'In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.',
          minPlayers: 2,
          maxPlayers: 4,
          age: 8,
          duration: 45,
          image: 'https://cf.geekdo-images.com/imagepage/img/3mRLkaz_shArWqExOXUS59cQowY=/fit-in/900x600/filters:no_upscale()/pic1534148.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/cK-1YVgmwY9GYtUmq05Wtz87fvg=/fit-in/900x600/filters:no_upscale()/pic1535381.jpg',
          user: createdUsers[1]
        }, {
          name: 'Codenames',
          year: 2015,
          description: 'Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES. Two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.',
          minPlayers: 2,
          maxPlayers: 8,
          age: 14,
          duration: 15,
          image: 'https://cf.geekdo-images.com/imagepage/img/BwJJTrofiaH0Muxuo5rv0VCmuCY=/fit-in/900x600/filters:no_upscale()/pic2582929.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/z8cSghKo8VXaAyLYjta_mi7vKls=/fit-in/900x600/filters:no_upscale()/pic2598928.jpg',
          user: createdUsers[0]
        }, {
          name: 'Hungry Hungry Hippos',
          year: 1966,
          description: 'This children\'s game is as much of a toy as it is a game. Each player has a plastic hippo that is arranged around a plastic arena. When you push the tail it will reach its head onto the playing field - perhaps trapping one or more marbles to be pulled back to a private player marble gutter, perhaps just sending marbles bouncing around the playing field.',
          minPlayers: 2,
          maxPlayers: 4,
          age: 4,
          duration: 10,
          image: 'https://cf.geekdo-images.com/imagepage/img/2u1TfDk1RsR0zSjIHUz21bA02lg=/fit-in/900x600/filters:no_upscale()/pic152043.jpg',
          boardImage: 'https://i.redd.it/9hutjhktig731.jpg',
          user: createdUsers[1]
        }, {
          name: 'Hive',
          year: 2000,
          description: 'Hive is a highly addictive strategic game for two players that is not restricted by a board and can be played anywhere on any flat surface. Hive is made up of twenty two pieces, eleven black and eleven white, resembling a variety of creatures each with a unique way of moving.',
          minPlayers: 2,
          maxPlayers: '',
          age: 9,
          duration: 20,
          image: 'https://cf.geekdo-images.com/imagepage/img/-Fuwrrvjh94icPboI_A8iC7E6kM=/fit-in/900x600/filters:no_upscale()/pic791151.jpg',
          boardImage: 'https://www.gamescrusade.co.uk/wp-content/uploads/2017/02/hive_pieces_jm.jpg',
          user: createdUsers[0]
        }, {
          name: 'Sushi Go!',
          year: 2013,
          description: 'In the super-fast sushi card game Sushi Go!, you are eating at a sushi restaurant and trying to grab the best combination of sushi dishes as they whiz by. Score points for collecting the most sushi rolls or making a full set of sashimi. Dip your favorite nigiri in wasabi to triple its value! And once you\'ve eaten it all, finish your meal with all the pudding you\'ve got! But be careful which sushi you allow your friends to take; it might be just what they need to beat you!',
          minPlayers: 2,
          maxPlayers: 5,
          age: 8,
          duration: 15,
          image: 'https://cf.geekdo-images.com/imagepage/img/dKpxrcQu93Z0RmWKbwEoXUrZiGE=/fit-in/900x600/filters:no_upscale()/pic1900075.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/syW93CDo-OCCJ3-s8zCwVE-yr5g=/fit-in/900x600/filters:no_upscale()/pic1950458.jpg',
          user: createdUsers[1]
        }, {
          name: 'Articulate!',
          year: 1992,
          description: 'Try to get your partner to say as many words from a particular category written on the cards within the thirty second time limit, you may only pass once. Move your team pawn forward a number of spaces on the board equal to the number of words you got correct. If you land on an Orange or Red space, spin the spinner for a chance to move yourself 2 or 3 spaces forward, or move an opponent piece 2 or 3 spaces back. If you land on a spade space, try to get you team mate to say the word on the card before any other team can say it. Whoever answers correctly gets a turn immediately.',
          minPlayers: 4,
          maxPlayers: 8,
          age: 12,
          duration: 60,
          image: 'https://cf.geekdo-images.com/imagepage/img/13tBKZ5VP7EpWu8TLKhdWBYBMNw=/fit-in/900x600/filters:no_upscale()/pic112473.jpg',
          boardImage: 'https://media.4rgos.it/s/Argos/3904660_R_SET?$Main768$&w=620&h=620',
          user: createdUsers[1]
        }, {
          name: 'Baffled',
          year: 1991,
          description: 'Baffled is the ultimate memory game. You have just 60 seconds to memorise the positions of the 12 symbol tiles... BUT prepare to be Baffled as they constantly swap and change positions around the board! Fun for all the family, who can survive the Baffled board the longest... will it be you?',
          minPlayers: 2,
          maxPlayers: 4,
          age: 8,
          duration: 30,
          image: 'https://cf.geekdo-images.com/imagepage/img/TZwRRDQJcJ4bv2l_hKk8YTQJsLE=/fit-in/900x600/filters:no_upscale()/pic4214037.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/kxjBMrMZFV5Fce4qyWaVKrBC9m4=/fit-in/900x600/filters:no_upscale()/pic4214039.jpg',
          user: createdUsers[0]
        }, {
          name: 'Carcassonne',
          year: 2000,
          description: 'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of his meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.',
          minPlayers: 2,
          maxPlayers: 5,
          age: 7,
          duration: 40,
          image: 'https://cf.geekdo-images.com/imagepage/img/vBFuoCx6bZ8_PTJKGw1iA4RIJJw=/fit-in/900x600/filters:no_upscale()/pic2337577.jpg',
          boardImage: 'https://images-na.ssl-images-amazon.com/images/I/51HAjmgfsGL._AC_.jpg',
          user: createdUsers[0]
        }, {
          name: 'Ca$h \'n Gun$',
          year: 2005,
          description: 'In an abandoned warehouse a gangster band is splitting its loot, but they can’t get an agreement on the split! It’s time to let the guns talk and soon everyone is aiming at everyone. The richest surviving gangster wins the game!',
          minPlayers: 4,
          maxPlayers: 6,
          age: 10,
          duration: 30,
          image: 'https://cf.geekdo-images.com/imagepage/img/NSrPu4POdf8a0LpDPrsai_FAZYk=/fit-in/900x600/filters:no_upscale()/pic87523.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/BL9jpL4bXQIovJl2q0BPK6mUQRY=/fit-in/900x600/filters:no_upscale()/pic89506.jpg',
          user: createdUsers[0]
        }, {
          name: 'Citadels',
          year: 2016,
          description: 'In Citadels, players take on new roles each round to represent characters they hire in order to help them acquire gold and erect buildings. The game ends at the close of a round in which a player erects their eighth building. Players then tally their points, and the player with the highest score wins.',
          minPlayers: 2,
          maxPlayers: 8,
          age: 10,
          duration: 45,
          image: 'https://cf.geekdo-images.com/imagepage/img/LFsYOrvGNP4R6x_vAKP9faI0ve0=/fit-in/900x600/filters:no_upscale()/pic3119514.jpg',
          boardImage: 'https://images-na.ssl-images-amazon.com/images/I/511GdSqLEML._AC_.jpg',
          user: createdUsers[1]
        }, {
          name: 'Colour Brain',
          year: 2017,
          description: 'No good at quizzes? Great, because in this game we give you all the answers before you start. All you have to do is work out which of the eleven color cards in your hand correctly answers one of Colourbrain’s crafty questions.',
          minPlayers: 3,
          maxPlayers: 6,
          age: 8,
          duration: 30,
          image: 'https://cf.geekdo-images.com/imagepage/img/bclCTEfQASExAZpZJdtcLJgt8qM=/fit-in/900x600/filters:no_upscale()/pic4219953.jpg',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/Pu_NJzBRK0WyqqmvjSTVh1eT6ss=/fit-in/900x600/filters:no_upscale()/pic3668906.jpg',
          user: createdUsers[1]
        }, {
          name: 'Concept',
          year: 2013,
          description: 'In Concept, your goal is to guess words through the association of icons. A team of two players – neighbors at the table – choose a word or phrase that the other players need to guess. Acting together, this team places pieces judiciously on the available icons on the game board.',
          minPlayers: 4,
          maxPlayers: 12,
          age: 10,
          duration: 40,
          image: 'https://cf.geekdo-images.com/imagepage/img/MXAL2nKp5G8z9azKvz_mCXRM5Ak=/fit-in/900x600/filters:no_upscale()/pic4991925.jpg',
          boardImage: 'https://cf.geekdo-images.com/medium/img/UnsoNZ2K4ql-XbIEhi_t-05ldbc=/fit-in/500x500/filters:no_upscale()/pic4419562.jpg',
          user: createdUsers[1]
        }, {
          name: 'Connect Four',
          year: 1974,
          description: 'Connect 4 is a well known vertical game played with "checkers" (it is more akin to Tic Tac Toe or Go Moku).',
          minPlayers: 2,
          maxPlayers: '',
          age: 6,
          duration: 10,
          image: 'https://cf.geekdo-images.com/imagepage/img/mm31PXqNyvvRtzrx5UPLPlpU9UQ=/fit-in/900x600/filters:no_upscale()/pic859430.jpg',
          boardImage: 'https://www.thetoyshop.com/medias/517180-Primary-515Wx515H?context=bWFzdGVyfGltYWdlc3w4NjAyM3xpbWFnZS9qcGVnfGltYWdlcy9oZDAvaDU1LzkxNDIwNTAzOTAwNDYuanBnfDQzNDhkMGQyNzVkMTRmZGY4MmFlNzE5YzFhZDBiMjkzYWZmNzgzNTI3YTFjMzU4OGE1MjUyZGVlMjllNTM1MzE',
          user: createdUsers[0]
        }, {
          name: 'Cranium',
          year: 1998,
          description: 'Cranium bills itself as the "whole-brain" game. It\'s a party game that borrows from a host of other popular party games of recent times. Players have to successfully complete activities in each of four sections to win.',
          minPlayers: 4,
          maxPlayers: 16,
          age: 13,
          duration: 60,
          image: 'https://cf.geekdo-images.com/imagepage/img/UxhpDpATFyjEfArebD-QdXk9-Ag=/fit-in/900x600/filters:no_upscale()/pic2754550.jpg',
          boardImage: 'https://i.pinimg.com/originals/2f/22/28/2f2228f43dca0558a7b88f4319adb1e0.jpg',
          user: createdUsers[0]
        }, {
          name: 'Dinosaur Island',
          year: 2017,
          description: 'In Dinosaur Island, players will have to collect DNA, research the DNA sequences of extinct dinosaur species, and then combine the ancient DNA in the correct sequence to bring these prehistoric creatures back to life. Dino cooking! All players will compete to build the most thrilling park each season, and then work to attract (and keep alive!) the most visitors each season that the park opens.',
          minPlayers: 1,
          maxPlayers: 4,
          age: 8,
          duration: 100,
          image: 'https://cf.geekdo-images.com/imagepage/img/H4WyonQHojZv7V9arAn-riGAxt0=/fit-in/900x600/filters:no_upscale()/pic3429338.png',
          boardImage: 'https://cf.geekdo-images.com/imagepage/img/aQEnxBeeQfcTd6HapbpUf6JMFTI=/fit-in/900x600/filters:no_upscale()/pic3429341.png',
          user: createdUsers[0]
        }, {
          name: 'Dobble',
          year: 2009,
          description: 'Dobble is a simple pattern recognition game in which players try to find an image shown on two cards.',
          minPlayers: 2,
          maxPlayers: 8,
          age: 7,
          duration: 15,
          image: 'https://cf.geekdo-images.com/imagepage/img/ifPLBy0O2CgMb1PhJHNrQveLTn4=/fit-in/900x600/filters:no_upscale()/pic1641943.png',
          boardImage: 'https://www.me100fun.com/media/catalog/product/cache/1/image/1200x1200/0696c19ab30009574eead5a089a994ce/3/5/3558380016465_4.jpg',
          user: createdUsers[0]
        }, {
          name: 'Exploding Kittens',
          year: 2015,
          description: 'Exploding Kittens is a kitty-powered version of Russian Roulette. Players take turns drawing cards until someone draws an exploding kitten and loses the game. The deck is made up of cards that let you avoid exploding by peeking at cards before you draw, forcing your opponent to draw multiple cards, or shuffling the deck.',
          minPlayers: 2,
          maxPlayers: 5,
          age: 7,
          duration: 15,
          image: 'https://cf.geekdo-images.com/imagepage/img/2YIM7lVh-ZblHsCv7YFViuPOJ2c=/fit-in/900x600/filters:no_upscale()/pic2691976.png',
          boardImage: 'https://www.thespruce.com/thmb/YH0CfiJyH3Sab987GTo4E1wHwLs=/1500x1125/smart/filters:no_upscale()/ExplodingKittens_FamilyGames_HeroSquare-750928e54de54f138da023343ef93f62.jpg',
          user: createdUsers[0]
        }
      ])
    })
    .then(createdGames => console.log(`${createdGames.length} games have been created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
