import { Endereco } from './endereco.model';
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  baseUrl="http://localhost:3001/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

   showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'], 
    });
  }

  create(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>(this.baseUrl, endereco).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Endereco>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Endereco>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
   }

   update(endereco: Endereco): Observable<Endereco>{
    const url = `${this.baseUrl}/${endereco.id}`;
    return this.http.put<Endereco>(url, endereco).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Endereco>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Endereco>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  } 