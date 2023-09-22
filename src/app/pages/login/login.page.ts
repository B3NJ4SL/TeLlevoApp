import {Component, OnInit} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],    
})

export class LoginPage implements OnInit{

  usuario:string='';
  password:string='';
  
  



  constructor(private router: Router) { }

  irRegistro(){    
    this.router.navigate(['/registro']);
  }

  irMenu(){
    if (this.usuario=="admin" && this.password=="duoc")  {
      this.router.navigate(['/inicioc']);
    }else{
      if (this.usuario=="admin1" && this.password=="duoc1")  {
        this.router.navigate(['/iniciop']);
      }
    }
  }

  


  ngOnInit() {
  }

  

}
