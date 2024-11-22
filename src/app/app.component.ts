import { Component } from '@angular/core';

export interface Atributo {
    descricao: string;
    tipo: string;
}

export interface Tabela {
    titulo: string;
    atributos: Atributo[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    tabela: Tabela = {
        titulo: 'Tabela de teste',
        atributos: [
            { descricao: 'atributo 1', tipo: 'varchar(128)' },
            { descricao: 'atributo 2', tipo: 'int' },
        ]
    }
}
