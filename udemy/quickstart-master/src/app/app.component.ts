import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
})

export class AppComponent  { 
  private currentUser:User = { username: "Test", email: "test@test.com"}

  private hideEmail:boolean = false

  private users:Array<User> = [
    { username: "User1", email: "user1@test.com" },
    { username: "User2", email: "user2@test.com" },
    { username: "User3", email: "user3@test.com" },
    { username: "User4", email: "user4@test.com" },
    { username: "User5", email: "user5@test.com" },
  ]

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
