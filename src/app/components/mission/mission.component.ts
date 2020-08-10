import { Component, OnInit, OnChanges } from '@angular/core';
import { SpacemissionService } from '../../services/spacemission.service'

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit, OnChanges {

  years: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

  filterLaunch: any[] = [];
  filterLanding: any[] = [];
  missionsList: any[] = [];

  url: string = "https://api.spaceXdata.com/v3/launches?limit=100";



  constructor(private missions: SpacemissionService) { }




  ngOnInit(): void {

    this.missions.getMissions(this.url).subscribe(miss => {
      this.missionsList = [...miss];
      console.log(this.missionsList)
    })

  }

  ngOnChanges() {
    this.missions.getMissions(this.url).subscribe(miss => {
      this.missionsList = [...miss];
      console.log(this.missionsList)
    })
  }

  filterValues(value, code, e) {
    e.preventDefault();
    e.target.className = 'active';
    console.log(e)


    this.url = "https://api.spaceXdata.com/v3/launches?limit=100&" + code + "=" + value + "&";
    this.ngOnChanges();
  }


}
