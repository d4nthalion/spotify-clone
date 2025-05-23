import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { map, mergeMap, Observable, of } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.apiUrl

  constructor(private http: HttpClient) {
    
  }

  getAllTracks$():Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
                    .pipe(
                      map((dataRaw: any) => {
                        return dataRaw.data
                      })
                    )
  }

  getRandomTracks$():Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
                    .pipe(
                      map((dataRaw: any) => {
                        return dataRaw.data
                      })
                      
                    )
  }
}
