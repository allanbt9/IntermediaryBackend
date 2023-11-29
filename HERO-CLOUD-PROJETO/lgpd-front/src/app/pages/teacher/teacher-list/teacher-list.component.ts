//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{ value: string, label: string }> = [];
  teachers: any[] = [];

  constructor(private teacherService: TeacherService, private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> { //a função ngOnInit será chamado toda vez que a tela for carregada OnInit/No inicio
    //esse promisse é pq ele espera uma ação da tela
    await this.listTeachers(); //ele espera que a lista de professores seja carregada na tela
    this.sharedService.getCourses().subscribe(course => this.courseLabel = course); //vai abrir a tela e carregar essas infors

  }

  async listTeachers(): Promise<void> { //listar profs, é um promisse tbm
    this.teachers = await this.teacherService.get<any[]>({ //será esperado uma chamda do service
      url: "http://localhost:3000/getAllTeachers", //o caminho no backend, getAllTeachers, pra buscar a lista de profs
      params: {

      }
    });
  }//fim da função que será carregada na tela quando ela for chamada

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este professor?")) { //confirmar se vc realmente quer deletar aquela informação
      await this.teacherService.delete<any>({
        url: `http://localhost:3000/deleteTeacher/${id}`,
        params: {

        }
      });
      await this.listTeachers(); //listar os profs
    }
  }


  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
