import { UserRepository } from "src/app/domain/repositories/user.repository";
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT } from 'src/app/app.config';
import { Injectable } from '@angular/core';
import { LoginUserDto } from "src/app/domain/dtos/user/login-user.dto";
import { TokenModel } from "src/app/domain/models/token.model";
import { TokenEntity } from "./entities/token.entity";
import { UserImplementationRepositoryMapper } from "./mappers/user-repository.mapper";

@Injectable({
    providedIn: 'root',
})
export class UserlRepositoryHttpImp extends UserRepository {
    uri = 'users';
    mapper = new UserImplementationRepositoryMapper();
    constructor(private http: HttpClient) {
        super();
    }
    override login(loginInfo: LoginUserDto): Observable<TokenModel> {
        let url = ENDPOINT + this.uri + '/login';
        return this.http.post<TokenEntity>(url, loginInfo).pipe(
            map((tokenEntity: TokenEntity) => this.mapper.mapFrom(tokenEntity))
        );
    }
    override logout(token: string): Observable<void> {
        let url = ENDPOINT + this.uri + '/logout' + '?access_token=' + token;  
        return this.http.post<void>(url, null);
    }
}