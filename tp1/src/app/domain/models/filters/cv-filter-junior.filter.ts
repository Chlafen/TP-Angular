import { CvFilterModel } from "../cv-filter.model";
import { CvModel } from "../cv.model";


export class CvFilterJunior implements CvFilterModel {
    label: string = "Junior"

    filter(cvs: CvModel[]): CvModel[] {
        return cvs.filter(cv => cv.age < 40)
    }
}