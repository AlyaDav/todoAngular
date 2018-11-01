
import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Border } from '../models/border';



@Injectable()
export class TodoService {
    private apiUrl = 'http://10.1.1.64:3000';
    
    borders: Border[];

    constructor(private http: HttpClient) { }


    getBorders(): Observable<Border[]> {
        return this.http.get<Border[]>(this.apiUrl + '/boards')
            .pipe(
                tap(borders => console.log('fetched borders ', borders)),
                catchError(this.handleError('getBorders ', []))
            );
    }



    createBorder(border: Border): Observable<Border> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/joson' });
        return this.http.post<Border>(this.apiUrl + '/board', border).pipe(
            catchError(this.handleError<Border>('addBorder)')));;
    }

    updateBorder(border: Border): Observable<Border> {
        let url = `${this.apiUrl}/board/update/${border._id}`;
        return this.http.put<Border>(url, border).pipe(
            catchError(this.handleError<Border>(' updateBorder'))
        );
    }

    deleteBorder(border: Border): Observable<Border> {
        let headers = new HttpHeaders({ 'Content-Type': 'application/joson' });
        let url = `${this.apiUrl}/board/${border._id}`;
        return this.http.delete<Border>(url, {headers}).pipe(
            tap(_ => console.log(`deleted todo id=${border._id}`)),
            catchError(this.handleError<Border>('deleteBorder '))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}