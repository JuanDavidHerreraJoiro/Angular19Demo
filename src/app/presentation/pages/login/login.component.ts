import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidacionService } from '../../../shared/services/validacion.service';
import { MaterialModule } from '../../../shared/directives/material.module';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    RouterModule,
    MaterialModule, 
    ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public vs: ValidacionService,
  ) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  
  ngOnInit(): void {
    this.vs.recibirForm(this.loginForm);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  guardar(){
    if(this.loginForm.invalid || this.loginForm.pending){
      this.loginForm.markAllAsTouched();
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
