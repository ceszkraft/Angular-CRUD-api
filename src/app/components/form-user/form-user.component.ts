import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  users: UserModel[]
  user: UserModel = {
    id: 0,
    name: 'teste',
    password: 'cc'
  }

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
    
  }

  getUsers(){
    this.service.getUserService().subscribe((data: UserModel[]) => {
      console.log(data);
      this.users = data
      
    })
  }
  
  getUserById(id: number){
    this.service.getUserByIdService(id).subscribe((id: UserModel) => {
      console.log(this.user = id)
    })
  }

  postUser(user: UserModel){
    this.service.postUserService(user)
    .subscribe((userObj: UserModel) => {
      this.user = userObj
      this.getUsers()
    })
  }

  putUser(){
    return this.service.putUserService(this.user)
    .subscribe((res: any) =>{
      console.log(res);
      this.getUsers()
      
    })
  }

  deleteUser(id: number){
   this.service.deleteUserService(id).subscribe(res => {
     console.log(res);
     this.getUsers()
   }) 
  }

}


