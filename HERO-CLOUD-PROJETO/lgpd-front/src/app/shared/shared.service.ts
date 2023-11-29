import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";//pra fazer o serviçço ser injetável nos nossos módulos
import { map, Observable, of } from "rxjs"; //vai ficar aguardando a resposta do nosso backend
import { CourseService } from "../pages/course/course.service"; 
import { UserService } from "../pages/user/user.service";

//aqui terá todo o tratamento de dados compartilhados


//Criar esses exports
export interface Params { //exportar essa interface pro angular conseguir usar esses serviços
    [key: string]: any;
}


@Injectable({
    providedIn: 'root' //a raiz da nossa aplicaçao terá a invejao desse serviço
})
export class SharedService {

    users: Array<{ value: string, label: string }> = []; 
    courses: Array<{ value: string, label: string }> = [];


    //funçoes para fazer o tratamento do que vem do backend para a nossa tela
    getUsers(): Observable<any[]> {//o método que terá o observable, que irá aguardar oq vier do backend pra fazer o tratamento pra mostar na tela
        return this.http
            .get("http://localhost:3000/getAllUsers")
            .pipe(//o metodo pipe irá tratar o dado recebido do frontend na tela
                map(x => { //um mapeamento de uma lista x
                    Object.values(x).map((_user) => {
                        let u = { value: _user.id, label: _user.first_name }
                        this.users.push(u);
                    })
                    console.log(x);
                    console.log(this.users);
                    return this.users;
                })
            );
    }

    getCourses(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllCourses")
            .pipe(
                map(x => {
                    Object.values(x).map((_course) => {
                        let c = { value: _course.id, label: _course.name }
                        this.courses.push(c);
                    })
                    console.log(x);
                    console.log(this.courses);
                    return this.courses;
                })
            );
    }

    constructor(
        private http: HttpClient
    ) {
    }
}
