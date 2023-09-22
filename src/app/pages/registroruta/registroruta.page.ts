import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registroruta',
  templateUrl: './registroruta.page.html',
  styleUrls: ['./registroruta.page.scss'],
})
export class RegistrorutaPage implements OnInit {

  constructor(private router: Router) { }
  
  irInicioc(){    
    this.router.navigate(['/inicioc']);
  }

  ngOnInit() {
  }

}
