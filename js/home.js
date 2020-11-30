window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
})
const createInnerHtml=()=>{
   const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th>"
   let empPayrollList = createEmployeePayrollJson();
   let innerHtml = `${headerHtml}`;
   for(const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
        <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <!--
                <td><div class="dept-label">${empPayrollData._department[0]}</div>
                    <div class="dept-label">${empPayrollData._department[1]}</div>
                </td>
                -->
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="assets/icons/delete-black-18dp.svg">
                    <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
        document.querySelector('#table-display').innerHTML = innerHtml;
        //this line can be added outside for loop as well
   }
}
const getDeptHtml = (depList)=>{
    let deptHtml = '';
    for(const dept of depList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
const createEmployeePayrollJson = ()=>{
    let empPayrollLocalList = [
        {
            _name:'Konda Srujan',
            _gender:'male',
            _department:['Engineering','Finance'],
            _salary:'500000',
            _startDate:'16 Oct 2014',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:'assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Amarpa Shashanka',
            _gender:'female',
            _department:['Sales'],
            _salary:'600000',
            _startDate:'27 Oct 2014',
            _note:'',
            _id: new Date().getTime()+1,
            _profilePic:'assets/profile-images/Ellipse -1.png'
        },
        {
            _name:'Keerthi Kumar',
            _gender:'male',
            _department:['Sales','Finance'],
            _startDate:'27 Nov 2014',
            _note:'',
            _salary:'400000',
            _id: new Date().getTime()+2,
            _profilePic:'assets/profile-images/Ellipse -3.png'
        }
    ]
    return empPayrollLocalList;
}