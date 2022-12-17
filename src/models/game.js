    export default class Game{
    constructor({
      id, 
      name, 
      image, 
      date, 
      platforms, 
      rating, 
      url, 
      summary, 
      genres, 
      themes, 
      modes, 
      companies, 
      screenshots, 
      similar
    }) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.date = date;
      this.platforms = platforms;
      this.rating = rating;
      this.url = url;
      this.summary = summary;
      this.genres = genres;
      this.themes = themes;
      this.modes = modes;
      this.companies = companies;
      this.screenshots = screenshots;
      this.similar = similar;
    }
  }
