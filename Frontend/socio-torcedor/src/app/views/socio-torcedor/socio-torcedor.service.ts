import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import SocioTorcedor from "./socio-torcedor";

@Injectable({
    providedIn: 'root',
})

export class SocioTorcedorService {

    protected url = 'http://localhost:8080/auth';

    constructor(
        private http: HttpClient
    ) { }

    findAll(): Observable<SocioTorcedor[]> {
        return this.http.get<SocioTorcedor[]>(this.url);
    }

    findById(id: number): Observable<SocioTorcedor> {
        return this.http.get<SocioTorcedor>(`${this.url}/${id}`)
    }

    deleteById(id: number): Observable<SocioTorcedor> {
        return this.http.delete<SocioTorcedor>(`${this.url}/${id}`)
    }

    save(data: SocioTorcedor): Observable<SocioTorcedor> {
        if(data.id) {
            return this.http.put<SocioTorcedor>(this.url, data);
        } else {
            return this.http.post<SocioTorcedor>(this.url, data);
        }
    }

}