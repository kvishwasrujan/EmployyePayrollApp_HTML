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
        let newDate = new Date(startDate[2],startDate[1],startDate[0]);
        let startDateCompare = dates.compare(newDate,new Date());
        if(startDateCompare<=0) this._startDate = newDate;
        else throw 'Start Date incorrect';
    }
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
let employees=new Array();
let employeeData = new EmployeePayrollData();

function save() {
    try {
        const output = document.querySelector('.salary-output');

        let names = document.getElementById('name').value;
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(names)) employeeData.name=names;
        else throw "Name is Incorrect!";

        employeeData.profilePic = getRadioValue(document.getElementsByName('profile'));
        employeeData.gender = getRadioValue(document.getElementsByName('gender'));
        employeeData.department = getCheckBoxValue(document.getElementsByClassName('checkbox'));
        employeeData.salary = output.textContent;

        let start=new Array();
        start.push(document.getElementById('day').value);
        start.push(document.getElementById('month').value);
        start.push(document.getElementById('year').value);
        let newDate = new Date(start[2],start[1],start[0]);
        if(newDate<=new Date()) employeeData.startDate = newDate;
        else throw 'Start Date incorrect';

        employeeData.notes = document.getElementById('notes').value;
        console.log(employeeData);
    }
    catch (exception) {
        console.error(exception);
    }
    employees.push(employeeData);
    console.log(employees);
    createAndUpdateStorage(employeeData);
}

function getRadioValue(radios) {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
function getCheckBoxValue(boxes) {
    let boxlist = new Array();
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            boxlist.push(boxes[i].value)
        }
    }
    return boxlist;
}

function createAndUpdateStorage(employeeData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList!=undefined){
        employeePayrollList.push(employeeData);
    }else{
        employeePayrollList=[employeeData];
    }
    console.log(employeePayrollList);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}
