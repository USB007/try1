const users=require('./users.json');
const movies=require('./movies.json');
const reviews=require('./reviews.json');
const { set } = require('express/lib/application');

const getMovies = (id) => {
return new Promise((resolve, reject) => {

setTimeout(()=> {
const movie=movies.find((movie)=>movie.id===id);
if (movie){
    resolve(movie);
} else {
    reject('Not Found');
}
},1000);

});


};


const getReviews = (movieId) => {
setTimeout(()=> {
const review=reviews.find((review)=>review.movie_id ===movieId);
cb(review);
},1000)

};



const getUsers = (name) => {
setTimeout(()=> {
const user=users.find((user)=>user.name===name);
cb(user);
},1000)

};



// console.log(getMovies(1));

getMovies(5)
.then(movie => {
    console.log(movie);
})
.catch(err => {
    console.log(err);
});