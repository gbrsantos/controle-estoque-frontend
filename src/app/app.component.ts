import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  topicos = ['Angular', 'React', 'Vue'];
  userModel = new User('NomePessoa', 'nmpessoa@email.com' , 123456, 'Vue', 'tarde', true);

  submeterForm(){
    console.log(this.userModel);
    
  }
}
