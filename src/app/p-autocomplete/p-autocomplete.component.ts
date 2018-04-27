import { Component, OnInit, ViewChild, Directive, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DominioItemModel } from './dominio-item.model';

@Component({
    selector: 'jhi-p-autocomplete',
    templateUrl: './p-autocomplete.component.html',
})
export class PAutoCompleteComponent implements OnInit, OnChanges {
    @Input() objetosJson: any[];
    @Input() idBanco;
    @Input() indicadorEconomico = false;
    @Output() idSelecionadoUsuario = new EventEmitter();
    @Input() InternacionalizacaoLabel;
    emptyMessage = '---';

    objetosDoDominio: any[] = [];
    results;
    texto;

    ngOnInit() {
        this.setarNgModel();
    }

    ngOnChanges() {
        this.setarNgModel();
    }

    setarNgModel() {
        if (this.idBanco !== undefined || this.idBanco !== null) {
            for (let i = 0; i < this.objetosJson.length; i++) {
                const textoProcurado = this.objetosJson[i];
                if (this.indicadorEconomico === false) {
                    if (Object.is(textoProcurado.id, this.idBanco)) {
                        this.texto = this.objetosJson[i].descricaoItem;
                    }
                } else if (this.indicadorEconomico === true) {
                    if (Object.is(textoProcurado.id, this.idBanco)) {
                        this.texto = this.objetosJson[i].nomeIndicadorEconomico;
                    }
                }
            }
        }
    }

    passarId(event) {
        this.idBanco = event.id;
        if (this.indicadorEconomico === false) {
            this.texto = event.descricaoItem;
            this.idSelecionadoUsuario.emit(this.idBanco);
            setTimeout(() => {
                this.texto = event.descricaoItem + ' ';
            }, 1000);
        } else if (this.indicadorEconomico === true) {
            this.texto = event.nomeIndicadorEconomico;
            this.idSelecionadoUsuario.emit(this.idBanco);
            setTimeout(() => {
                this.texto = event.nomeIndicadorEconomico + ' ';
            }, 1000);
        }
    }

    filtrarResultados(event) {
        setTimeout(() => {
            this.results = [];
            for (let i = 0; i < this.objetosJson.length; i++) {
                const objeto = this.objetosJson[i];
                if (this.indicadorEconomico === false) {
                    if (objeto.descricaoItem.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                        this.results.push(objeto);
                    }
                } else if (this.indicadorEconomico === true) {
                        this.results.push(objeto);
                }
            }
        }, 500);
    }
}
