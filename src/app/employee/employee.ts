export class Employee {
    empNo:number;
    firstname:string;
    lastName:string;

    constructor(empno: number,firstName:string,lastName:string){
        this.empNo = empno;
        this.firstname = firstName;
        this.lastName = lastName;
    }
}