import { map, catchError } from 'rxjs/operators';
import { Clientes } from './clientes.model';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl="http://localhost:8080";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

   getCep(cep: number) {
     return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
   }

   getAll() {
     return this.http.get(`${this.baseUrl}/clientes`);
   }

   showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'], 
    });
  }

  create(clientes: Clientes) {
    return this.http.post(`${this.baseUrl}/clientes`, clientes);
  }

  read(){
    return this.http.get(`${this.baseUrl}/clientes`);
  }
  
  readById(id: number){
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.get(url);
   }

   update(clientes: Clientes){
    const url = `${this.baseUrl}/clientes/${clientes.id}`;
    return this.http.put(url, clientes);
  }

  delete(id: number){
    const url = `${this.baseUrl}/clientes/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro: ", true);
    return EMPTY;
  }
  }
