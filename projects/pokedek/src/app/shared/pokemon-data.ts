import { InMemoryDbService } from 'angular-in-memory-web-api';

// This is the data we perform CRUD on
export class PokemonData implements InMemoryDbService {
  createDb() {
    let pokemons = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "species": "Seed Pokémon",
    "image": "app/shared/images/bulbasaur.jpg",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2′4″ (0.71m)",
    "weight": "15.2 lbs (6.9 kg)",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "sp.atk": 65,
      "sp.def": 65,
      "speed": 45,
      "total": 318
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "image": "app/shared/images/ivysaur.jpg",
    "species": "Seed Pokémon",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "3′3″ (0.99m)",
    "weight": "28.7 lbs (13.0 kg)",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "sp.atk": 80,
      "sp.def": 80,
      "speed": 60,
      "total": 405
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "id": 3,
    "name": "Venusaur",
    "image": "app/shared/images/venusaur.jpg",
    "species": "Seed Pokémon",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "6′7″ (2.01m)",
    "weight": "220.5 lbs (100.0 kg)",
    "abilities": [
      "Overgrow",
      "Chlorophyll"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "sp.atk": 100,
      "sp.def": 100,
      "speed": 80,
      "total": 525
    },
    "evolution": [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur"
    ]
  },
  {
    "id": 4,
    "name": "Charmander",
    "image": "app/shared/images/charmander.jpg",
    "species": "Lizard Pokémon",
    "type": [
      "Fire"
    ],
    "height": "2′0″ (0.61m)",
    "weight": "18.7 lbs (8.5 kg)",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "sp.atk": 60,
      "sp.def": 50,
      "speed": 65,
      "total": 309
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "image": "app/shared/images/charmeleon.jpg",
    "species": "Flame Pokémon",
    "type": [
      "Fire"
    ],
    "height": "3′7″ (1.09m)",
    "weight": "41.9 lbs (19.0 kg)",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "sp.atk": 80,
      "sp.def": 65,
      "speed": 80,
      "total": 405
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "id": 6,
    "name": "Charizard",
    "image": "app/shared/images/charizard.jpg",
    "species": "Flame Pokémon",
    "type": [
      "Fire",
      "Flying"
    ],
    "height": "5′7″ (1.70m)",
    "weight": "199.5 lbs (90.5 kg)",
    "abilities": [
      "Blaze",
      "Solar Power"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "sp.atk": 109,
      "sp.def": 85,
      "speed": 100,
      "total": 534
    },
    "evolution": [
      "Charmander",
      "Charmeleon",
      "Charizard"
    ]
  },
  {
    "id": 7,
    "name": "Squirtle",
    "image": "app/shared/images/squirtle.jpg",
    "species": "Tiny Turtle Pokémon",
    "type": [
      "Water"
    ],
    "height": "1′8″ (0.51m)",
    "weight": "19.8 lbs (9.0 kg)",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "sp.atk": 50,
      "sp.def": 64,
      "speed": 43,
      "total": 314
    },
    "evolution": [
      "Squirtle",
      "Wartortle",
      "Blastoise"
    ]
  },
  {
    "id": 8,
    "name": "Wartortle",
    "image": "app/shared/images/wartortle.jpg",
    "species": "Turtle Pokémon",
    "type": [
      "Water"
    ],
    "height": "3′3″ (0.99m)",
    "weight": "49.6 lbs (22.5 kg)",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "sp.atk": 65,
      "sp.def": 80,
      "speed": 58,
      "total": 405
    },
    "evolution": [
      "Squirtle",
      "Wartortle",
      "Blastoise"
    ]
  },
  {
    "id": 9,
    "name": "Blastoise",
    "image": "app/shared/images/blastoise.jpg",
    "species": "Shellfish Pokémon",
    "type": [
      "Water"
    ],
    "height": "5′3″ (1.60m)",
    "weight": "188.5 lbs (85.5 kg)",
    "abilities": [
      "Torrent",
      "Rain Dish"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "sp.atk": 85,
      "sp.def": 105,
      "speed": 78,
      "total": 530
    },
    "evolution": [
      "Squirtle",
      "Wartortle",
      "Blastoise"
    ]
  },
  {
    "id": 10,
    "name": "Caterpie",
    "image": "app/shared/images/caterpie.jpg",
    "species": "Worm Pokémon",
    "type": [
      "Bug"
    ],
    "height": "1′0″ (0.30m)",
    "weight": "6.4 lbs (2.9 kg)",
    "abilities": [
      "Shield Dust",
      "Run Away"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "sp.atk": 20,
      "sp.def": 20,
      "speed": 45,
      "total": 195
    },
    "evolution": [
      "Caterpie",
      "Metapod",
      "Butterfree"
    ]
  },
  {
    "id": 11,
    "name": "Metapod",
    "image": "app/shared/images/metapod.jpg",
    "species": "Cocoon Pokémon",
    "type": [
      "Bug"
    ],
    "height": "2′4″ (0.71m)",
    "weight": "21.8 lbs (9.9 kg)",
    "abilities": [
      "Shed Skin"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "sp.atk": 25,
      "sp.def": 25,
      "speed": 30,
      "total": 205
    },
    "evolution": [
      "Caterpie",
      "Metapod",
      "Butterfree"
    ]
  },
  {
    "id": 12,
    "name": "Butterfree",
    "image": "app/shared/images/butterfree.jpg",
    "species": "Butterfly Pokémon",
    "type": [
      "Bug",
      "Flying"
    ],
    "height": "3′7″ (1.09m)",
    "weight": "70.5 lbs (32.0 kg)",
    "abilities": [
      "Compound Eyes",
      "Tinted Lens"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "sp.atk": 90,
      "sp.def": 80,
      "speed": 70,
      "total": 395
    },
    "evolution": [
      "Caterpie",
      "Metapod",
      "Butterfree"
    ]
  },
  {
    "id": 13,
    "name": "Weedle",
    "image": "app/shared/images/weedle.jpg",
    "species": "Hairy Bug Pokémon",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "1′0″ (0.30m)",
    "weight": "7.1 lbs (3.2 kg)",
    "abilities": [
      "Shield Dust",
      "Run Away"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "sp.atk": 20,
      "sp.def": 20,
      "speed": 50,
      "total": 195
    },
    "evolution": [
      "Weedle",
      "Kakuna",
      "Beedrill"
    ]
  },
  {
    "id": 14,
    "name": "Kakuna",
    "image": "app/shared/images/kakuna.jpg",
    "species": "Cocoon Pokémon",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "2′0″ (0.61m)",
    "weight": "22 lbs (10.0 kg)",
    "abilities": [
      "Shed Skin"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "sp.atk": 25,
      "sp.def": 25,
      "speed": 35,
      "total": 205
    },
    "evolution": [
      "Weedle",
      "Kakuna",
      "Beedrill"
    ]
  },
  {
    "id": 15,
    "name": "Beedrill",
    "image": "app/shared/images/beedrill.jpg",
    "species": "Poison Bee Pokémon",
    "type": [
      "Bug",
      "Poison"
    ],
    "height": "3′3″ (0.99m)",
    "weight": "65 lbs (29.5 kg)",
    "abilities": [
      "Swarm",
      "Sniper"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "sp.atk": 45,
      "sp.def": 80,
      "speed": 75,
      "total": 395
    },
    "evolution": [
      "Weedle",
      "Kakuna",
      "Beedrill"
    ]
  },
  {
    "id": 16,
    "name": "Pidgey",
    "image": "app/shared/images/pidgey.jpg",
    "species": "Tiny Bird Pokémon",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1′0″ (0.30m)",
    "weight": "4 lbs (1.8 kg)",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "sp.atk": 35,
      "sp.def": 35,
      "speed": 56,
      "total": 251
    },
    "evolution": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot"
    ]
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "image": "app/shared/images/pidgeotto.jpg",
    "species": "Bird Pokémon",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "3′7″ (1.09m)",
    "weight": "66.1 lbs (30.0 kg)",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "sp.atk": 50,
      "sp.def": 50,
      "speed": 71,
      "total": 349
    },
    "evolution": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot"
    ]
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "image": "app/shared/images/pidgeot.jpg",
    "species": "Bird Pokémon",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "4′11″ (1.50m)",
    "weight": "87.1 lbs (39.5 kg)",
    "abilities": [
      "Keen Eye",
      "Tangled Feet",
      "Big Pecks"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "sp.atk": 70,
      "sp.def": 70,
      "speed": 101,
      "total": 479
    },
    "evolution": [
      "Pidgey",
      "Pidgeotto",
      "Pidgeot"
    ]
  },
  {
    "id": 19,
    "name": "Rattata",
    "image": "app/shared/images/rattata.jpg",
    "species": "Mouse Pokémon",
    "type": [
      "Normal"
    ],
    "height": "1′0″ (0.30m)",
    "weight": "7.7 lbs (3.5 kg)",
    "abilities": [
      "Guts",
      "Run Away",
      "Hustle"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "sp.atk": 25,
      "sp.def": 35,
      "speed": 72,
      "total": 253
    },
    "evolution": [
      "Rattata",
      "Raticate"
    ]
  },
  {
    "id": 20,
    "name": "Raticate",
    "image": "app/shared/images/raticate.jpg",
    "species": "Mouse Pokémon",
    "type": [
      "Normal"
    ],
    "height": "2′4″ (0.71m)",
    "weight": "40.8 lbs (18.5 kg)",
    "abilities": [
      "Guts",
      "Run Away",
      "Hustle"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "sp.atk": 50,
      "sp.def": 70,
      "speed": 97,
      "total": 413
    },
    "evolution": [
      "Rattata",
      "Raticate"
    ]
  },
  {
    "id": 21,
    "name": "Spearow",
    "image": "app/shared/images/spearow.jpg",
    "species": "Tiny Bird Pokémon",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "1′0″ (0.30m)",
    "weight": "4.4 lbs (2.0 kg)",
    "abilities": [
      "Keen Eye",
      "Sniper"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "sp.atk": 31,
      "sp.def": 31,
      "speed": 70,
      "total": 262
    },
    "evolution": [
      "Spearow",
      "Fearow"
    ]
  },
  {
    "id": 22,
    "name": "Fearow",
    "image": "app/shared/images/fearow.jpg",
    "species": "Beak Pokémon",
    "type": [
      "Normal",
      "Flying"
    ],
    "height": "3′11″ (1.19m)",
    "weight": "83.8 lbs (38.0 kg)",
    "abilities": [
      "Keen Eye",
      "Sniper"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "sp.atk": 61,
      "sp.def": 61,
      "speed": 100,
      "total": 442
    },
    "evolution": [
      "Spearow",
      "Fearow"
    ]
  },
  {
    "id": 23,
    "name": "Ekans",
    "image": "app/shared/images/ekans.jpg",
    "species": "Snake Pokémon",
    "type": [
      "Poison"
    ],
    "height": "6′7″ (2.01m)",
    "weight": "15.2 lbs (6.9 kg)",
    "abilities": [
      "Intimidate",
      "Shed Skin",
      "Unnerve"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "sp.atk": 40,
      "sp.def": 54,
      "speed": 55,
      "total": 288
    },
    "evolution": [
      "Ekans",
      "Arbok"
    ]
  },
  {
    "id": 24,
    "name": "Arbok",
    "image": "app/shared/images/arbok.jpg",
    "species": "Cobra Pokémon",
    "type": [
      "Poison"
    ],
    "height": "11′6″ (3.51m)",
    "weight": "143.3 lbs (65.0 kg)",
    "abilities": [
      "Intimidate",
      "Shed Skin",
      "Unnerve"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "sp.atk": 65,
      "sp.def": 79,
      "speed": 80,
      "total": 438
    },
    "evolution": [
      "Ekans",
      "Arbok"
    ]
  },
  {
    "id": 25,
    "name": "Pikachu",
    "image": "app/shared/images/pikachu.jpg",
    "species": "Mouse Pokémon",
    "type": [
      "Electric"
    ],
    "height": "1′4″ (0.41m)",
    "weight": "13.2 lbs (6.0 kg)",
    "abilities": [
      "Static",
      "Lightning Rod"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "sp.atk": 50,
      "sp.def": 50,
      "speed": 90,
      "total": 320
    },
    "evolution": [
      "Pikachu",
      "Raichu"
    ]
  }
];

 return { pokemons };  // name of the api endpoint
  }
}