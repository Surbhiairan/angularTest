export class Track{
    constructor(obj){
        this.trackName = (obj && obj.trackName ) ? obj.trackName : "";
        this.artistName = (obj && obj.artistName ) ? obj.artistName : "";
        this.genre = (obj && obj.primaryGenreName ) ? obj.primaryGenreName : "";
        this.duration = (obj && obj.trackTimeMillis ) ? obj.trackTimeMillis : "";
        this.price = (obj && obj.trackPrice ) ? obj.trackPrice : "";
        this.image = (obj && obj.artworkUrl30 ) ? obj.artworkUrl30 : "";
        this.previewUrl = (obj && obj.previewUrl ) ? obj.previewUrl : "";
    }
    previewUrl:string
    trackName : string;
    artistName:string;
    genre:string;
    duration:number;
    price:number;
    image:string;

}