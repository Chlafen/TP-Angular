import { CvFilterModel } from "../cv-filter.model";
import { CvModel } from "../cv.model";


export class CvFilterSenior implements CvFilterModel {
    label: string = "Seniors"

    filter(cvs: CvModel[]): CvModel[] {
        return cvs.filter(cv => cv.age >= 40)
    }
}