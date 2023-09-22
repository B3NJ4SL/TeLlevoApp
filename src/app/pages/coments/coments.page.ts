import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.page.html',
  styleUrls: ['./coments.page.scss'],
})
export class ComentsPage implements OnInit {

  constructor(private router: Router) { }

  irIniciop(){    
    this.router.navigate(['/iniciop']);
  }
  ngOnInit() {
  }

}
