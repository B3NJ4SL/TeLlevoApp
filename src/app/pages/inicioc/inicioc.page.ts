import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioc',
  templateUrl: './inicioc.page.html',
  styleUrls: ['./inicioc.page.scss'],
})
export class IniciocPage implements OnInit {

  constructor(private router: Router) { }

  irRegistroruta(){    
    this.router.navigate(['/registroruta']);
  }
  irAdminruta(){    
    this.router.navigate(['/adminrutas']);
  }
  irInfomes(){    
    this.router.navigate(['/informes']);
  }
  irGanancias(){    
    this.router.navigate(['/ganancia']);
  }

  ngOnInit() {
  }

}
