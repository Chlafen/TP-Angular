import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserRepository } from '../../repositories/user.repository';


export class LogoutUser implements UseCase<string, void> {
  constructor(private userRepository: UserRepository) {}

  execute(token:string): Observable<void> {
    return this.userRepository.logout(token);
  }
}
