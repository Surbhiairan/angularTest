import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {Track } from './track'
import {Router} from '@angular/router';
@Component({
  selector: 'app-searh-list',
  templateUrl: './searh-list.component.html',
  styleUrls: ['./searh-list.component.css']
})
export class SearhListComponent implements OnInit {

  searchKey : string = "";
  tracks : Track[]; 
  constructor(private httpService : HttpServiceService,private router : Router) { }

  ngOnInit() {
  }

  searchArtist(){
    if(this.searchKey && this.searchKey.length > 0){
      this.httpService.getArtistDetails(this.searchKey).subscribe(data => {
        this.processSearchResult(data)
      })
    }
  }

  processSearchResult(data){
    this.tracks = data.results.map( res =>{
      return new Track(res);
    })
  }
  viewTrack(trackID){
    this.httpService.setSelectedTrack(trackID);
    this.router.navigate(['/trackDetail']);
    console.log(trackID);
  }
}
