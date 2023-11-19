import { Mapper } from 'src/base/mapper';
import { CvModel } from 'src/app/domain/models/cv.model';
import { CvEntity } from '../entities/cv-entity';


export class CvImplementationRepositoryMapper extends Mapper<CvEntity, CvModel> {
    override mapFrom(param: CvEntity): CvModel {
        return {
            id: param.id,
            fname: param.name,
            lname: param.firstname,
            age: param.age,
            cin: param.cin,
            job: param.job,
            path: "/assets/images/"+param.path,
            about: "i work as a " + param.job,
            embauche: false,
        };
    }
    override mapTo(param: CvModel): CvEntity {
        return {
            id: param.id,
            name: param.fname,
            firstname: param.lname,
            age: param.age,
            cin: param.cin,
            job: param.job,
            path: param.path,
        };
    }
}
