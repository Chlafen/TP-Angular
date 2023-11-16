import { Mapper } from 'src/base/mapper';
import { TokenEntity } from '../entities/token.entity';
import { TokenModel } from 'src/app/domain/models/token.model';

export class UserImplementationRepositoryMapper extends Mapper<TokenEntity, TokenModel> {
    override mapFrom(param: TokenEntity): TokenModel {
        let expiresAt = new Date(param.created);
        expiresAt.setSeconds(expiresAt.getSeconds() + param.ttl);
        return {
            token: param.id,
            expiresAt: expiresAt,
        };
    }
    override mapTo(param: TokenModel): TokenEntity {
        throw new Error('Method not implemented.');
    }
}
