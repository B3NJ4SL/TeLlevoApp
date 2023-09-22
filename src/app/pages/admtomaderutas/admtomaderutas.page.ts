import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admtomaderutas',
  templateUrl: './admtomaderutas.page.html',
  styleUrls: ['./admtomaderutas.page.scss'],
})
export class AdmtomaderutasPage implements OnInit {

  constructor(private router: Router) { }

  irIniciop(){    
    this.router.navigate(['/iniciop']);
  }

  ngOnInit() {
  }

}
