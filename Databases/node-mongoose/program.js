const connect = require("./db");


const runDatabaseQueries = async () => {

  const db = await connect();
  const movies = db.collection('movies');
  const users = db.collection('users');
  const comments = db.collection('comments');

  const { ObjectId } = require("mongodb");



  // Run this query, should get top 5 best rated movies on IMDB
  // const topMovies = await movies.find({ "imdb.rating": { $gt: 8.0 } })
  //   .project({ title: 1, year: 1, "imdb.rating": 1 })
  //   .sort({ "imdb.rating": -1 })
  //   .limit(5)
  //   .toArray();

  // console.log('Top Rated Movies:', topMovies);

  // insert queries here to test them // 

  //Test query - find 10 George Lucas movies and display the title and plot
  // const lucasMovies = await movies.find({ directors: "George Lucas" }, { title: 1 })
  //   .project({title: 1, plot: 1})
  //   .limit(10)
  //   .toArray()

  // console.log('George Lucas Movies:', lucasMovies);


  //CREATE
  //***************************************************************************************** */
  // Insert a New Document into the Users Collection: Practice adding a new user document to the `users` collection. Include fields `name` and `email`.

  // const newDoc = await users.insertOne({ name: "Kelly Jackson", email: "myemail@gmail.com" })

  // console.log('New user:', newDoc);

  //READ
  //***************************************************************************************** */
  //Find all movies directed by Christopher Nolan.

  // const christopherNolanMovies = await movies.find({ directors: "Christopher Nolan" })
  //   .toArray();

  // console.log('Christopher Nolan Movies:', christopherNolanMovies);

  //***************************************************************************************** */
  //Find movies that include the genre "Action" and sort (descending) them by year.

  // const actionMoviesByYear = await movies.find({ genres: "Action" })
  //   .sort({year: -1})
  //   .toArray();

  // console.log('Action Movies By Year:', actionMoviesByYear);

  //***************************************************************************************** */
  // Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.

  // const highRatingMovies = await movies.find({ "imdb.rating": { "$gt": 8.0 } })
  //   .project({ title: 1, imdb: 1 })
  //   .toArray();

  // console.log('Movies Rated Greater Than 8 By Year:', highRatingMovies);

  //***************************************************************************************** */
  // Find movies that starred both "Tom Hanks" and "Tim Allen".

  // const moviesWithTimAndTom = await movies.find({ "cast": { "$all": ["Tom Hanks", "Tim Allen"] } })
  //   .toArray();

  // console.log('Movies Starring Tom Hanks and Tim Allen:', moviesWithTimAndTom);

  //***************************************************************************************** */
  // Find movies that starred both and only "Tom Hanks" and "Tim Allen".

  // const moviesWithOnlyTimAndTom = await movies.find({ cast: ["Tom Hanks", "Tim Allen"] })
  //   .toArray();

  // console.log('Movies Starring Only Tom Hanks and Tim Allen:', moviesWithOnlyTimAndTom);

  //***************************************************************************************** */
  // Find comedy movies that are directed by Steven Spielberg.

  // const stevenSpielbergComedies = await movies.find({ genres: "Comedy", directors: "Steven Spielberg" })
  //   .project({ title: 1 })
  //   .toArray();

  // console.log('Comedy Movies Directed By Steven Spielberg:', stevenSpielbergComedies);

  //UPDATE
  //***************************************************************************************** */
  // Add a new field "available_on" with the value "Sflix" to "The Matrix".

  // const addField = await movies.updateOne({ title: "The Matrix" }, { "$set": { "available_on": "Sflix" } })

  // console.log("Add field:", addField);

  //***************************************************************************************** */
  // Increment the metacritic of "The Matrix" by 1.

  // const incrementMetacritic = await movies.updateOne({ title: "The Matrix" }, { $inc: { metacritic: 1 } });

  // console.log("Increase Metacritic by 1:", incrementMetacritic);

  //***************************************************************************************** */
  // Add a new genre "Gen Z" to all movies released in the year 1997.

  // const addGenreGenZ = await movies.updateMany({ "year": 1997 }, { "$push": { "genres": "Gen Z" } });

  // console.log("Add genre 'gen z' to all movies released in 1997", addGenreGenZ);

  //***************************************************************************************** */
  // Increase IMDb rating by 1 for all movies with a rating less than 5.

  // const incrementIMDBRating = await movies.updateMany({ "imdb.rating": { $lt: 5 } }, { $inc: { "imdb.rating": 1 } });

  // console.log("Increase IMDB rating by 1 for movies with rating less than 5", incrementIMDBRating);


  //DELETE
  //***************************************************************************************** */
  // Delete a comment with a specific ID.

  // const deleteComment = await comments.deleteOne({ _id: new ObjectId('5a9427648b0beebeb69579e7') });

  // console.log("Deleted comment:", deleteComment);

  //***************************************************************************************** */
  //Delete all comments made for "The Matrix".

  // const deleteComments = await comments.deleteMany({ movie_id: new ObjectId('573a139bf29313caabcf3d23') });

  // console.log("Delete all comments for The Matrix:", deleteComments);

  //***************************************************************************************** */

  // Delete all movies that do not have any genres.

  // const deleteMoviesMissingGenres = await movies.deleteMany({ genres: null });

  // console.log("Delete movies with no genres:", deleteMoviesMissingGenres);


  // Aggregate
  //***************************************************************************************** */
  // Aggregate movies to count how many were released each year and display from the earliest year to the latest.

  // const moviesByYear = await movies.aggregate([
  //   { $group: { _id: "$year", total: { $sum: 1 } } },
  //   { $sort: { _id: 1 } },
  //   { $project: { year: "$_id", total: 1 } }
  // ]).toArray();

  // console.log("Movies by year:", moviesByYear);

  //***************************************************************************************** */

  // Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.

  // const averages = await movies.aggregate([
  //   { $unwind: "$directors" },
  //   { $group: { _id: "$directors", averageRating: { $avg: "$imdb.rating" } } },
  //   { $sort: { averageRating: -1 } },
  //   { $project: { directors: "$_id", averageRating: 1 } }
  // ]).toArray();

  // console.log("Average IMDb ratings:", averages);


  process.exit(0);
};


runDatabaseQueries();