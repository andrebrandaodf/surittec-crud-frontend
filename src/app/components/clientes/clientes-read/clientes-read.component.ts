import { Clientes } from './../clientes.model';
import { Endereco } from './../endereco.model';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  endereco: Endereco[];
  clientes: Clientes[];
  displayedColumns = ['id', 'nome', 'endereco', 'actions'];

  constructor(private clientesService: ClientesService) { 

  }

  ngOnInit(): void {
    this.clientesService.getAll().subscribe((clientes: any) => { console.log(clientes); this.clientes = clientes});
    this.clientesService.read().subscribe((clientes: any) => {
    this.clientes = clientes;
      console.log(clientes);
    })
  }

}
