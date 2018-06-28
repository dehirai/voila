import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../../services/profissional.service';

@Component({
  selector: 'app-escolherprofissional',
  templateUrl: './escolherprofissional.component.html',
  styleUrls: ['./escolherprofissional.component.css']
})
export class EscolherprofissionalComponent implements OnInit {

  // let profissionais: Profissional[];

   constructor() { } //profissionalService: ProfissionalService

  ngOnInit() {
  }

// getProfissionais({
//   this.profissionalService.getProfissionais.subscribe(profissionais => this.profissionais=profissionais);
// })
  


}
