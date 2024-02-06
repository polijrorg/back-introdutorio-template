import Lista from "../models/ListaComprasModels"

interface AddProdutoRequest {
    nomeProduto: string;
    quantidade: number;
}

class ListaRepository {
    private listas: Lista[];

    constructor() {
        this.listas = [];
    }

    public add({nomeProduto, quantidade}: AddProdutoRequest) {
        const produto = new Lista({nomeProduto, quantidade});
        this.listas.push(produto);

        return this.listas;
    }
}

export default ListaRepository;
