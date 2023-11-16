
import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repositories/user.repository';
import { LoginUserDto } from '../../dtos/user/login-user.dto';
import { TokenModel } from '../../models/token.model';

export class LoginUser implements UseCase<LoginUserDto, TokenModel> {

    constructor(private userRepository: UserRepository) { }

    execute(login:LoginUserDto): Observable<TokenModel> {
        return this.userRepository.login(login);
    }
}