import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    const params = new HttpParams()
                        .set('from', from)
                        .set('to', to);

    return this.http
        .get<Flight[]>(url, {headers, params})
        .pipe(
          //tap(() => console.log('Service used'))
        );
  }

  findById(id: number): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    const params = new HttpParams()
                        .set('id', id.toString());

    return this.http
        .get<Flight>(url, {headers, params});
  }
}
