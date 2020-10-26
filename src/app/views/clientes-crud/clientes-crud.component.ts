import { HeaderService } from '../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-crud',
  templateUrl: './clientes-crud.component.html',
  styleUrls: ['./clientes-crud.component.css']
})
export class ClientesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon:   ' assignment_ind',
      routeUrl: '/clientes'
    }
   }

  ngOnInit(): void {
  }

  navigateToClientesCreate(): void{
    this.router.navigate(['/clientes/create'])
  }
}
