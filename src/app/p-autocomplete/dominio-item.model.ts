export class DominioItemModel {

    id?: number;
    nomeItem?: string;
    descricaoItem?: string;

    constructor(id, nomeItem, descricaoItem) {
        this.id = id;
        this.nomeItem = nomeItem;
        this.descricaoItem = descricaoItem;
    }

}
