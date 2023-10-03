export class Cv {
  id!: number
  fname!: String
  lname!: String
  age!: number
  cin!: number
  job!: String
  path!: String
  about!: String
  constructor(
    id: number,
    fname: String,
    lname: String,
    age: number,
    cin: number,
    job: String,
    path: String,
    about: String
  ){
    this.id = id
    this.fname = fname
    this.lname = lname
    this.age = age
    this.cin = cin
    this.job = job
    this.path = path
    this.about = about
  }
}
