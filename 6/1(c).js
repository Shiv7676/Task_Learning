class Movie{
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(array){
        let a = array.map((x) => x.rating == "PG")
    }
}