import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  ituneURL = "https://itunes.apple.com/"
  selectedTrack : any;

  constructor(private http: HttpClient) { }


  getArtistDetails(artist){
    let searchURL = this.ituneURL + "search?term="+artist
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://itunes.apple.com/',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
    return this.http.get(searchURL,{headers:headers});
  }

  setSelectedTrack(track){
    this.selectedTrack = track;
  }

  getSelectedTrack(){
    return this.selectedTrack;
  }
  
}
