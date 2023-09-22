import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciop',
  templateUrl: './iniciop.page.html',
  styleUrls: ['./iniciop.page.scss'],
})
export class IniciopPage implements OnInit {

  constructor(private router: Router) { }

  irBuscarruta(){    
    this.router.navigate(['/buscruta']);
  }

  irAdmintomaderutas(){    
    this.router.navigate(['/admtomaderutas']);
  }

  irInforgen(){    
    this.router.navigate(['/infogen']);
  }
  irComentarios(){    
    this.router.navigate(['/coments']);
  }

  ngOnInit() {
  }

}
