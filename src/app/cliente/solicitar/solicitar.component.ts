import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { CategoriaService } from '../../services/categoria.service';
import { ClienteService } from '../../services/cliente.service';
import { SolicitacaoService } from '../../services/solicitacao.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})

export class SolicitarComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private id: number;
  private descricao: string;
  private arquivo: string;
  private solicitacao //oq coloco aqui?;
  //falta a categoria aqui

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  // categorias = [
  //   {value: 'steak-0', viewValue: 'Pintura'},
  //   {value: 'pizza-1', viewValue: 'Assistência Técnica'},
  //   {value: 'tacos-2', viewValue: 'Serviços Domésticos'}
  // ];

  /*Salvar solicitação*/ 
//   salvar(){
//     this.solicitacaoService.novo(this.solicitacao)

// }
}
