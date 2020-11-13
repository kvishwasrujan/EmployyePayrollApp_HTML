class EmployeePayrollData{
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect!"
    }
    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary
    }
    get note(){
        return this._note
    }
    set note(note){
        this._note = note;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate = startDate
    }
    toString(){
        const options = { year: 'numeric',month: 'long',day: 'numeric',weekday:'long'}
        const empDate = this.startDate == undefined ?"undefined":this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+" name="+this.name+" salary="+this.salary+" gender="+this.gender+" start date:"+empDate+" profile pic="+this.profilePic+" gender="+this.gender+" department:"+this.department;
    }

}
function updateSalary(){
const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
})
}
function save(){
    let name = document.getElementById(name).value;
    let gender = document.getElementById(gender).value;
}