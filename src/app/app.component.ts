import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instagram } from './instagram/Instagram.response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataFile: any;
 
  user = <Instagram> { date_start : '2018-07-23', date_end : '2018-07-24', profiles : new Array<string>('183326113') , metrics : new Array<string>('comments_count', 'interactions_count', 'following_count_lifetime', 'interactions_per_1000_followers') };

  constructor(public http: HttpClient) { }

  apiRest(port) {
    const headers = new HttpHeaders()
    .set('Authorization', 'TXpReE16YzFYekUwT1RZeU9UQmZNVGcwTlRRMk1EWTFNakE0TjE4MlpqQmhOV0psWmpaaU1UTXhPV0ZqWlRWak1HUTNaakJpTldZME5HSTRZZz09OmJiOWViOGExZjBkYmRmYmE4YThiMGU2YjM5ZjlmMTZj')
    .set('Content-Type', 'application/json');

      this.http.post<string>(`https://api.socialbakers.com/0/instagram/metrics`, JSON.stringify(this.user), {
        headers: headers,
      })
      
      .subscribe(
        data => {
          console.log(typeof data);
          /*this.dataFile = JSON.stringify(data), 
          this.dataFile = JSON.parse(data); */
          this.dataFile = data;
        },
        error => console.log("Error HTTP GET Service"), 
        () => console.log("Job Done Get !", this.dataFile )
       ),
      err => {
        console.log("Error occured.")
      }
  }


}
