import { Observable } from 'rxjs';
import { LoginUserDto } from '../dtos/user/login-user.dto';
import { TokenModel } from '../models/token.model';

export abstract class UserRepository {
  abstract login(loginInfo: LoginUserDto): Observable<TokenModel>;
  abstract logout(token: string): Observable<void>;
}
