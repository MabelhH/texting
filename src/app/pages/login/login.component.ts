import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
   formRegister!:FormGroup;
   constructor(private usuarioservice:UsuarioService , private router:Router){
     this.formRegister = new FormGroup({
       usermane: new FormControl(),
       password: new FormControl(),
      
     })
   }
 

   ngOnInit(): void {
    
   }

  login(){
    console.log(this.formRegister.value) 
    this.router.navigate(['/mensage'])
    localStorage.setItem('forms',JSON.stringify(this.formRegister.value))
   
  }
  
  
}
