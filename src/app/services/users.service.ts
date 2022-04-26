import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApi } from 'src/environments/environment';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserService(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${baseApi.users}`)
  }

  getUserByIdService(id: number): Observable<UserModel>{
    return this.http.get<UserModel>(`${baseApi.users}` + id)
  }

  deleteUserService(id: number): Observable<UserModel>{
    return this.http.delete<UserModel>(`${baseApi.users}`+id)
  }
  
  postUserService(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${baseApi.users}`, user)
  }
  
  //  -------------------------------------------------------
  putUserService(user: UserModel){
    return this.http.put<UserModel>(`${baseApi.users}` + user.id, user)
  }
}
