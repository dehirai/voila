import { Injectable } from '@angular/core';


@Injectable()
export class CategoriaService {

    constructor(){}
    
    categorias = [
        {value: 'pintura', viewValue: 'Pintura'},
        {value: 'assistencia tecnica', viewValue: 'Assistência Técnica'},
        {value: 'servicos-domesticos', viewValue: 'Serviços Domésticos'}
      ];
    
}