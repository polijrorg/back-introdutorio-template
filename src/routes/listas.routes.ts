import { Router, Request, Response } from "express";
import AddProductService from "../services/AddProductService";
import ListaRepository from "../repositories/ListaRepository"

const listaRouter = Router();
export const listaRepository = new ListaRepository();

listaRouter.post('/add', (request: Request, response: Response) => {
    try {
        const { nomeProduto, quantidade } = request.body;
    
        const addService = new AddProductService(listaRepository);
    
        const produtos = addService.execute({ nomeProduto, quantidade });
    
        return response.json(produtos);
    } catch (err: any) {
        return response.status(400).json({ error: err.message});
    }
});

export default listaRouter;