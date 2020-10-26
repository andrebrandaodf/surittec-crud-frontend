import { Clientes } from '../clientes.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  clientes: Clientes;
  private id?: number;

  constructor(
    private clientesService: ClientesService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

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
  getCep(cep: string) {
    let cepOnlyNumber = Number(cep.replace(/[^0-9]/g, ''));
    this.clientesService.getCep(cepOnlyNumber).subscribe((resp :any) => {
      this.clientes.endereco = resp;
      console.log(resp);
    }
    );
  }

  updateClientes(): void{
    this.clientesService.update(this.clientes).subscribe(() =>{
      this.clientesService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void{
    this.router.navigate(['/clientes']);
  }

}
