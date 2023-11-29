import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


//tudo oq vc for compartilhar entre os módulos do frontend vc irá colocar aqui no shared.module
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  exports: [
    FontAwesomeModule,
    FormlyBootstrapModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
