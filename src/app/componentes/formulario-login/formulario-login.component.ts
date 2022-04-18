import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  hide = true;
  login:any;
  usuario:string = "";
  password:string = "";
  loading:boolean =false;


  form:FormGroup;

  constructor(private router: Router, private loginService: LoginServiceService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
        {
          email:["",[Validators.required, Validators.email]],
          password:["",[Validators.required, Validators.minLength(3)]]
        }
      )
  }

  onSubmit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login));
  }

  get Email(){
    return this.form.get("email"); 
  }

  get Password(){
    return this.form.get("password");
  }

  volverHome(){
    this.router.navigate([''])
  }

  logIn(): void {
    this.loginService.LogIn();
    this.volverHome();
  
  }

  logOut(): void {
    this.loginService.LogOut();
  }

  logState():void{
    this.loginService.LogState();
  }

  
//login walter

  logInWalter() {
    this.loading = true;
    const user = {email: this.form.value.email, password: this.form.value.password};
    this.loginService.login(user).subscribe( data => {
      
      this.loginService.setToken(data.token);
      if(data.token !== null){
        this.logIn();
      }
     this.loading= false; 
    });
    
    
  }


}
