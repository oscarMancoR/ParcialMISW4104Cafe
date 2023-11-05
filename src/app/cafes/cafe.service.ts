import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
    providedIn: 'root'
   })
export class CafeService {

private apiUrl:string = environment.apiUrl;
constructor(private http: HttpClient) { }

getCafes(): Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.apiUrl);
}

}
