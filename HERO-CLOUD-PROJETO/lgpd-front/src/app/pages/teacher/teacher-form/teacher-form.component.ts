import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do Professor',
            required: true,
          },
        },
        {
          key: 'course_id',
          type: 'input',
          props: {
            label: 'Id do Curso',
            required: true
          },
        }
      ]
    }
  ];

  constructor(//aqui no construtor que será feito a integração com o backend, aqui será feito o mapeamento esperado
  //os parametros estão ligados com as rotas,

    private route: ActivatedRoute,
    private router: Router, //pra fazer o mapeamento
    private teacherService: TeacherService, //integração que precisa pra trazer os dados do backend
    private sharedService: SharedService //serviço compartilhado pra trazer interaçoes de tratamento, id e label
  ) {

    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        //se o parametro for diferente de indefinido e diferente de nulo, entao recebemos um valor
        //entao chamaremos o service do backend pra buscar o valor que vc recebeu
        this.teacher = await this.teacherService.get<any>({
          url: `http://localhost:3000/teacher/${params.id}`, 
          params: {

          }
        });

        this.model = this.teacher;

      } else { //entao nao tem aquele valor, logo temos um modelo vazio
        this.model = {}
      }

    });
  }

  async onSubmit(): Promise<void> {//para quando iremos enviar um dado novo, um novo ou uma atualização
    //na ação de enviar um novo usuário, ele vai escolher o comportamento, se será para atualizar ou colocar um novo

    if (this.form.valid) { //se o formulário é válido, entao validamos o modelo dele
      
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.teacher = await this.teacherService.put<any>({
          url: `http://localhost:3000/updateTeacher/${this.model?.id}`,
          params: {

          },
          data: this.model
        });

      } else {
        delete this.model?.id;
        await this.teacherService.post<any>({
          url: `http://localhost:3000/addTeacher`,
          params: {

          },
          data: this.model
        })
      }

    }
    await this.router.navigate(['/teachers']);
  }
}
