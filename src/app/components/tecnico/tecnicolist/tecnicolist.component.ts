import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnicolist',
  templateUrl: './tecnicolist.component.html',
  styleUrls: ['./tecnicolist.component.css']
})
export class TecnicolistComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
    nome: 'Jardes Souza',
    cpf: '04184426301',
    email: 'jardes@live.com',
    senha: '123',
    perfis: ['0'],
    dataCriacao: '14/04/2020'
    }
  ]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

