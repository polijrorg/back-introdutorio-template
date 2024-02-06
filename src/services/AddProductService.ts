import ListaRepository from "../repositories/ListaRepository"
import Lista from "../models/ListaComprasModels"

interface AddProdutoRequest {
    nomeProduto: string;
    quantidade: number;
}

class AddProductService {
    private listaRepository: ListaRepository;

    constructor(listaRepository: ListaRepository) {
        this.listaRepository = listaRepository;
    }

    public execute({nomeProduto, quantidade}: AddProdutoRequest): Lista[] {
        if (quantidade < 0 || nomeProduto === '') {
            throw new Error('Dado enviado errado');
        }
        const lista = this.listaRepository.add({nomeProduto, quantidade});

        return lista;
    }
}

export default AddProductService;
