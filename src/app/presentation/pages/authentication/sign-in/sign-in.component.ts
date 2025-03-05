import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../shared/directives/material.module';
import { ValidacionService } from '../../../../shared/services/validacion.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    CommonModule, 
    RouterModule, 
    MaterialModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public vs: ValidacionService,
  ) {

    this.signInForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.vs.correoPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  
  ngOnInit(): void {
    this.vs.recibirForm(this.signInForm);
  }

  guardar(){
    if(this.signInForm.invalid || this.signInForm.pending){
      this.signInForm.markAllAsTouched();
      return;
    }

    /*this.cliente = {...this.signInForm.value};
    this.cliente.barrioId = this.dato.id;
    
    this.clienteService.post(this.cliente)
      .subscribe(cliente => {
        if(cliente) {
          this.signInForm.reset();
        }
      });*/
  }
}
