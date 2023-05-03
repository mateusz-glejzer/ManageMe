import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  projects: string[] = ['manageMe', 'facebook', 'olx'];

  constructor(public fb: FormBuilder) { }

  projectsForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.projectsForm.value))
  }

}
