import { CvFilterModel } from "../cv-filter.model";
import { CvModel } from "../cv.model";


export class CvFilterName implements CvFilterModel {
    label: string = "Name"
    query: string = ""

    filter(cvs: CvModel[],): CvModel[] {
        return cvs.filter(cv => {
            let fullname = cv.fname + " " + cv.lname
            fullname = fullname.toLowerCase()
            return fullname.includes(this.query.toLowerCase()) // fullname LIKE %query%
        })
    }
}