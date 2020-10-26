import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes.model';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  clientes: Clientes;
  private id: number;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.clientesService.readById(getParam.id).subscribe((clientes: any) => {
        this.clientes = clientes;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  deleteClientes(): void {
    this.clientesService.delete(this.id).subscribe(() => {
      this.clientesService.showMessage('Clientes deletado com sucesso!');
      this.router.navigate(['/clientes']);
    }, errow => {
      this.clientesService.showMessage(`Erro na solicitação: ${errow}`);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
