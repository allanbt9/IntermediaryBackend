//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  //Implementar essa classe inteira
  faPencil = faPencil;
  faTrash = faTrash;

  courses: any[] = [];

  constructor(private courseService: CourseService) { } //não precisa do sharedService

  async ngOnInit(): Promise<void> {
    await this.listCourses(); //faz uma lista de todos os cursos

  }

  async listCourses(): Promise<void> {
    this.courses = await this.courseService.get<any[]>({
      url: "http://localhost:3000/getAllCourses",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este curso?")) {
      await this.courseService.delete<any>({
        url: `http://localhost:3000/deleteCourse/${id}`,
        params: {

        }
      });
      await this.listCourses();
    }
  }

  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
