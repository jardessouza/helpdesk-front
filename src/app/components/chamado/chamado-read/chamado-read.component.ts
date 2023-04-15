import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

import { Chamado } from 'src/app/models/chamado';

import { ChamadoService } from 'src/app/services/chamado.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

  chamado: Chamado = {
    prioridade: 0,
    status: 1,
    titulo: '',
    observacoes: '',
    tecnico: 0,
    cliente: 1,
  }



  constructor(
    private chamadoService: ChamadoService,
    private toastService: ToastrService,
    private route: ActivatedRoute
  ) { }

 

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {      
      this.chamado = resposta;

    }, ex => {
      this.toastService.error(ex.error.error)
    });
  }

}
