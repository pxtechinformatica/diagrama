import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
declare var LeaderLine: any;

export interface ChaveEstrangeira {
    origem?: boolean;
    destino?: boolean;
    origem_quem?: string;
}

export interface Atributo {
    descricao: string;
    tipo: string;
    chave_estrangeira?: ChaveEstrangeira;
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
    tabelas: Tabela[] = [
        {
            titulo: 'Tabela de teste',
            atributos: [
                { descricao: 'pk', tipo: 'uuid', chave_estrangeira: { origem: true, } },
                { descricao: 'atributo 1', tipo: 'varchar(128)' },
                { descricao: 'atributo 2', tipo: 'int' },
            ]
        },
        {
            titulo: 'Tabela de fk',
            atributos: [
                { descricao: 'id', tipo: 'uuid' },
                { descricao: 'atributo 1', tipo: 'varchar(128)' },
                { descricao: 'atributo 2', tipo: 'int' },
                { descricao: 'tabela_teste', tipo: 'fk', chave_estrangeira: { destino: true, origem_quem: 'pk' } }
            ]
        },
    ];
    // @ViewChild('origem') origem: any;
    // @ViewChild('destino') destino: any;

    @ViewChildren('origem') origem: QueryList<ElementRef> | any;

    constructor() {
        this.origem?.changes.subscribe((origens: any) => {
            console.log('Origens: ', origens)
        });
    }
}
