import { uuid } from "uuidv4";

interface Request {
    nomeProduto: string;
    quantidade: number;
}

class Lista {
    nomeProduto: string;
    quantidade: number;
    id: string;

    constructor(data: Request) {
        this.nomeProduto = data.nomeProduto;
        this.quantidade = data.quantidade;
        this.id = uuid();
    }
}

export default Lista;
