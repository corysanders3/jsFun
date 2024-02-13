const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(cats) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

    const orangeCatNames = cats.reduce((kitties, cat) => {
      if(cat.color === 'orange') {
        kitties.push(cat.name)
      }
      return kitties
    }, []);
    return orangeCatNames

    // const orangeCats = cats.filter((cat) => {
    //   return cat.color === 'orange';
    // });

    // const orangeCatNames = orangeCats.map((cat) => {
    //   return cat.name;
    // });
    
    // return orangeCatNames;

    // const orangeCatNames = [];
    // cats.forEach((cat) => {
    //   if(cat.color === 'orange') {
    //     orangeCatNames.push(cat.name);
    //   }
    // });
    // return orangeCatNames
    // Annotation:
    // need to filter through the array, to only get the cats that are orange
    // then need to use map, so I can return just the name
  },

  sortByAge(cats) {
    // Sort the kitties by their age

    const catsByAge = cats.sort((a, b) => {
      return b.age - a.age
    });
    return catsByAge;

    // Annotation:
    // feels like .sort will need to be used in order to put
    // the array in order from oldest cat to youngest cat
  },

  growUp(cats) {
    // Return an array of kitties who have all grown up by 2 years e.g.
  
    const olderCats = []
    cats.forEach((cat) => {
      cat.age += 2;
      olderCats.push(cat);
    });
    
    return olderCats

    // Annotation:
    // need to add 2 plus years (map?) to their age, then
    // sort them by age again
    // used forEach, as map only returned the age
    // with forEach, we were able to get the cats age plus 2
    // and push the entire object to a new array
  }
};

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    const newClubs = clubs.reduce((newO, club) => {
      club.members.forEach((member) => {
        newO[member] = []
        })
      return newO
    }, {})

    clubs.forEach((club) => {
      club.members.forEach((member) => {
        if(club.members.includes(member)) {
          newClubs[member].push(club.club)
        }
      })
    })
    return newClubs
    // Annotation:
    // had to use a reduce and forEach just to get my object of arrays setup
    // then iterated through each to push the club to the corresponding array
  }
};

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    
    const modsUpdated = mods.map((mod1) => {
      studentsPer = mod1.students / mod1.instructors
      newMods = {
        mod: mod1.mod,
        studentsPerInstructor: studentsPer
      }
      return newMods
    })
    return modsUpdated
    // Annotation:
    // not passing any arguments, so will not be using parameters
    // keeping mod1, but want a new key value pair that divides the students
    // by the instructor
    // thinking I will need to use reduce
    // ended up using map as it was returning an array of the same length
  }
};

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    let cakeAmount = cakes.map((cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock}
    })
    return cakeAmount

    // Annotation:
    // No argument being passed, so will not be using any parameters
    // most likely use map as we are returning an array of the same length
    // we just want flavor and instock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    let hasStock = cakes.filter((cake) => {
      return cake.inStock > 0
    })
    return hasStock

    // Annotation:
    // need to use filter to get all the cakes with > 0 inStock
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const totalCakes =  cakes.reduce((total, cake) => {
      total += cake.inStock
      return total
    }, 0)
    return totalCakes

    // Annotation:
    // need to use reduce to add up the total amount of cakes in stock
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    let ingredients = [];

    cakes.forEach((cake) => {
      cake.toppings.forEach((topping) => {
        if(!ingredients.includes(topping)) {
          ingredients.push(topping);
        }
      });
    });
    return ingredients;

    // Annotation:
    // seems like a for each would be the best way to go with this one
    // if ingredients array already includes x item, don't push
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    let ingredients = [];

    cakes.forEach((cake) => {
      cake.toppings.forEach((topping) => {
        ingredients.push(topping);
      });
    });
    
    let shoppingList = ingredients.reduce((list, item) => {
      var numOfItem = ingredients.filter(ingredient => ingredient === item).length;
      list[item] = numOfItem;
      return list;
    }, {});
    return shoppingList;

    // Annotation:
    // reduce will need to be used here
    // used a filter as within the reduce, in order to see if the ingredient word
    // matched the item parameter passed through reduce and count the length
  }
};

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const programFE = classrooms.filter((classroom) => {
      return classroom.program === 'FE';
    })
    return programFE;
    // Annotation:
    // Write your annotation here as a comment
    // filter to grab only the FE programs
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
      var feCap = 0;
      var beCap = 0;

    const capacity = classrooms.reduce((totalCap, classroom) => {
      if(classroom.program === 'FE') {
        feCap += classroom.capacity;
        totalCap[(classroom.program).toLowerCase() + 'Capacity'] = feCap;
      } else if(classroom.program === 'BE') {
        beCap += classroom.capacity;
        totalCap[(classroom.program).toLowerCase() + 'Capacity'] = beCap;
      }

      return totalCap;
    }, {});
    
    return capacity;
    // Annotation:
    // Write your annotation here as a comment
    // will need to us reduce in order to create an object
    // will most likely also need to use an if statement within the reduce
    // to add up the totals
    // had to add up the totals outside of the reduce, otherwise they
    // were just getting re-assigned
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    // const catsByAge = cats.sort((a, b) => {
    //   return b.age - a.age
    // });
    // return catsByAge;

    const classByCap = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    })
    return classByCap;

    // Annotation:
    // Write your annotation here as a comment
    // need to use the sort method 
    // 'a' goes first here since we are going from smallest number to largest
  }
};

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(myBooks) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    // let bookTitles = [];

    // myBooks.forEach((book) => {
    //   if(book.genre !== 'Horror' && book.genre !== 'True Crime') {
    //     bookTitles.push(book.title)
    //   }
    // });
  
    // return bookTitles

    let bookTitles1 = myBooks.filter((book) => {
      return book.genre !== 'Horror' && book.genre !== 'True Crime';
    });

    let bookTitles2 = bookTitles1.map((book) => {
      return book.title;
    });

    return bookTitles2;
    // Annotation:
    // use a forEach to iterate through the array
    // use an if statement to push book titles to array if genre
    // is not horror OR true crime

  },
  getNewBooks(myBooks) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let newBooks = myBooks.filter((book) => {
      return book.published > 1989;
    });

    let newBooks1 = newBooks.map((book) => {
      return {title: book.title, year: book.published};
    });

    return newBooks1;
    // Annotation:
    // use filter and then map
    // on the map, make sure to return it as an object if you need more than
    // one key-value pair
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let newBooks = books.filter((book) => {
      return book.published > year;
    });

    let newBooks1 = newBooks.map((book) => {
      return {title: book.title, year: book.published};
    });

    return newBooks1;

    // Annotation:
    // this should follow the same as the prompt above
    // but using the year parameter instead of the actual year inputted above
  }

};

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    let averageTemps = weather.map((w) => {
      return ((w.temperature.high + w.temperature.low) / 2);
    })
    return averageTemps;
    // Annotation:
    // map to iterate through the array and return the same amount of elements
    // perform some logic within the map to return the average temp
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    let sunny = weather.filter((w) => {
      return w.type === 'mostly sunny' || w.type === 'sunny';
    });
    let sunnyStatement = sunny.map((sun) => {
      return `${sun.location} is ${sun.type}.`
    })
    return sunnyStatement
    // Annotation:
    // use filter to iterate through the array and find all weather
    // types of sunny or mostly sunny
    // return a string with interpolation
    // had to map through after the filter, to return the interpolation requested
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    let highestHumidity = weather.sort((a, b) => {
      return b.humidity - a.humidity
    })
    return highestHumidity[0]
    // Annotation:
    // use find to location the highest humidity
    // ended up using sort to put the highest humidity at the top
    // and then returning the first index position

  }
};

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    let parks = {
        parksToVisit: [],
        parksVisited: []
    }
    
    nationalParks.forEach((park) => {
      if(park.visited) {
        parks.parksVisited.push(park.name);
      } else if(!park.visited) {
        parks.parksToVisit.push(park.name);
      }
    });
    return parks;

    // Annotation:
    // will use reduce to separate out the arrays based on if the park
    // was visited or not
    // ended up setting up a variable and using forEach to push the park
    // names into the corresponding array
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const stateParks = nationalParks.reduce((states, park) => {
      states.push({[park.location]: park.name})
      return states
    }, [])

    return stateParks
    // Annotation:
    // use reduce to return an array, and create the object using bracket notation
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    let activities = [];

    nationalParks.forEach((park) => {
      park.activities.forEach((act) => {
        if(!activities.includes(act))
        activities.push(act)
      })
    })
    return activities
    // Annotation:
    // use forEach and push each activity to an activities array
    // then make sure we aren't pushing duplicates using .some
  }
};

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    let totalBeers = breweries.reduce((total, brewery) => {
      total += brewery.beers.length
      return total
    }, 0)
    return totalBeers
    // Annotation:
    // we want to return 40
    // i think we will need to utilize reduce to accomplish this
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let breweryShort = breweries.map((brewery) => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length
      }
    })
    return breweryShort
    // Annotation:
    // return array of objects that includes beer name and beer count
    // try using filter
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    let foundBrewery = breweries.find((brewery) => {
      return breweryName === brewery.name
    })

    let amountOfBeer = foundBrewery.beers.length
    return amountOfBeer
    // Annotation:
    // return a number based on the string that is passed through
    // find first and then .length
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    
    let sortedBeer = [];

    breweries.forEach((brewery) => {
      brewery.beers.forEach((beer) => {
        sortedBeer.push(beer.abv)
      })
    })
    let sortedBeer1 = sortedBeer.sort((a, b) => {
      return b - a
    })

    let thisBeer;
    breweries.forEach((brewery) => {
      const foundBeer = brewery.beers.find((beer) => {
        return beer.abv === sortedBeer1[0]
      })
      if(foundBeer) {
        thisBeer = foundBeer
      }

    })
    return thisBeer
    // Annotation:
    // return the highest number within the key of abv
    // had to get all my abvs into their own array
    // from there, I could sort them from highest to lowest
    // I iterated through each brewery and beers to see which one matched
    // my first position in my sorted array
    // if it found it, I would reassign my variable outside of the forEach
  }
};

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    const gameNames = boardGames[type].map((game) => {
      return game.name;
    })
    return gameNames;

    // Annotation:
    // use map to return the name of the games, based on the property
    // key being passed as an argument
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const gameNames = boardGames[type].map((game) => {
      return game.name;
    })
    return gameNames.sort();

    // Annotation:
    // use map to return the name of the games, based on the property
    // key being passed as an argument, like above, and then sort it
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    const highestRated = boardGames[type].sort((a, b) => {
      return b.rating - a.rating;
    })
    return highestRated[0];

    // Annotation:
    // use the argument to access the specific array, then
    // sort to put the highest rated game at the top index position
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    const totalRating = boardGames[type].reduce((total, game) => {
      total += game.rating;
      return total;
    }, 0)
    
    const avgRating = totalRating / boardGames[type].length;
    return avgRating;

    // Annotation:
    // use the argument to access the specific array
    // and use reduce to add up the total and then divide the total
    // by the type.length
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    const gamesByType = boardGames[type].filter((game) => {
      return game.maxPlayers === maximumPlayers
    })
    
    let total = 0;
    gamesByType.forEach((game) => {
      total += game.rating;
    })
    return total / gamesByType.length

    // Annotation:
    // use a filter to first get the games that match the game type
    // and game maxPlayers, then follow the same method above to get
    // the average (this time we will solve it with a forEach)
  }
};

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    let instructorList = instructors.reduce((studentCount, instructor) => {
      cohorts.forEach((cohort) => {
        if(instructor.module === cohort.module) {
          studentCount.push({name: instructor.name, studentCount: cohort.studentCount})
        }
      })
      return studentCount
    }, [])
    return instructorList

    // Annotation:
    // if instructor module matches cohort module, return an object
    // with module cohort student count
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let studentsPerTeacher = cohorts.reduce((avgStudents, school) => {
      let teacherLength = instructors.filter((instructor) => {
        return instructor.module === school.module
      })
      let avg = school.studentCount / teacherLength.length
      avgStudents['cohort' + school.cohort] = avg
      return avgStudents
    }, {})
    return studentsPerTeacher

    // Annotation:
    // seeing how many students are in each mod, seeing how many instructors
    // are teaching each mod, dividing students by teacher count
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    let teachersObject = instructors.reduce((teachers, instructor) => {
      teachers[instructor.name] = []
      return teachers
    }, {})

    instructors.forEach((instructor) => {
      instructor.teaches.forEach((teach) => {
        cohorts.forEach((cohort) => {
          cohort.curriculum.forEach((curr) => {
            if(teach.includes(curr) && !teachersObject[instructor.name].includes(cohort.module)) {
              teachersObject[instructor.name].push(cohort.module)
            }
          })
        })
      })
    })
    let teacherKeys = Object.keys(teachersObject)
    teacherKeys.forEach((teacher) => {
      teachersObject[teacher].sort()
    })
    return teachersObject

    // Annotation:
    // need to return a list of modules that the teacher can teach,
    // based on what the teacher teaches and what the module curriculum includes
    // might want to setup the object first, and then push the module number
    // to that teachers array
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
