import { CvModel } from "./cv.model"
export interface CvFilterModel {
    label: string 
    filter(cvs: CvModel[], query?:string): CvModel[]
}

