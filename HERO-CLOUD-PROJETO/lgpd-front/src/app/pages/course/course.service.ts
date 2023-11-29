import { ErrorHandler, Injectable } from '@angular/core';//pacote para tratamento de erro
import axios from 'axios';
import { AxiosInstance } from 'axios';//pra poder prover essa interação do http

export interface Params { //para o angular saber que ele vai fazer esse tratamento
    [key: string]: any;
}

export interface GetOptions {//para trazer tudo oq é url, paraman, data,entrada de body. 
    url: string;
    params?: Params;//a interrogação é pra dizer que esse atributo é opcional
    data?: any;
}

export interface ErrorResponse {//exportar uma interface que implementa as respostas de erro
    //3 caracteristicas principais:
    id: string;
    code: string;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private axiosClient: AxiosInstance;//atributo privado que irá trazer a nossa instancia
    private errorHandler: ErrorHandler; //para trabalhar com os erros

    constructor(errorHandler: ErrorHandler) { //
        this.errorHandler = errorHandler;
        this.axiosClient = axios.create({ //disponibilizar esse http pro nosso backend
            timeout: 3000,
            headers: {
                "X-Initialized-At": Date.now().toString()

            }
        });
    }
    //as ações do CRUD abaixo, aquelas lá do backends
    // get
    //os metodos assincronos pra buscar os get options lá do backend, pra cada caso que tem no backend, a gente tem um compativel aqui no front

    public async get<T> (options: GetOptions ) : Promise<T> { //get<T> significa que é um parametro opcional
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "get", //vai pegar do metodo get
                url: options.url, //pegar as informações da url
                params: options.params //e pegar os parametros
            });
            return ( axiosResponse.data); //retornar os dados armazenados nesta variável axiosResponse
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // put
    public async put<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "put",
                url: options.url,
                params: options.params,
                data: options.data
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // post
    public async post<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "post",
                url: options.url,
                params: options.params,
                data: options.data
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // delete
    public async delete<T> (options: GetOptions ) : Promise<T> {
        try {
            let axiosResponse = await this.axiosClient.request<T>({
                method: "delete",
                url: options.url,
                params: options.params
            });
            return ( axiosResponse.data);
        } catch (error) {
            return ( Promise.reject( this.normalizeError (error)));
        }
    }

    // normalização de erros
    private normalizeError(error: any) : ErrorResponse {
        console.log('Error: ', error)
        this.errorHandler.handleError(error);

        return ({
            id: "-1", //-1 é usado para erro desconhecido
            code: "UnkownError",
            message: "An unexpected error occurred."
        })
    }

}

//toda função assincrona precisa de try-cath