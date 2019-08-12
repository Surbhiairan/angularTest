import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Track } from '../searh-list/track';
@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.css']
})
export class TrackDetailComponent implements OnInit {

  constructor(private httpService : HttpServiceService) { }
  selectedTrack : Track;

  ngOnInit() {
    this.selectedTrack = this.httpService.getSelectedTrack();
    //console.log(selectedTrack,",,,,,,,,,,,,,,,,,,,,,,")
  }

}
