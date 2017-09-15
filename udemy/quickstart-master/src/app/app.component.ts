import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
})

export class AppComponent  { 
  private currentUser:User = { username: "Test", email: "test@test.com"}

  private hideEmail:boolean = false

  private toggleEmail() {
    return this.hideEmail = !this.hideEmail
  }

  private changeEmail(newEmail:string) {
    this.currentUser.email = newEmail
  }

  //deprecated
  private keyPress(event:KeyboardEvent) {
    if(event.keyCode == 13) {
      var inputElement = <HTMLInputElement>event.target
      this.changeEmail(inputElement.value)
    }
  }
}

interface User {
  username:string,
  email:string
}
