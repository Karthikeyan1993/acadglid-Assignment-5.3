var Employees={};
Employee={
  name:'Karthikeyan.K',
  age:24,
  salary:40000,
  address:{city:'Pune',state:'Maharashtra',pincode:411015}
};
//personalInfo will print Employee object in console
var personalInfo=function() {
  console.log('Employee Name :'+Employee.name);
  console.log('Employee Age :'+Employee.age);
  console.log('Employee Salary:'+Employee.salary);
  console.log('Employee Address');
  console.log('City :'+Employee.address.city);
  console.log('State :'+Employee.address.state)
  console.log('Pinecode :'+Employee.address.pincode);
}

personalInfo();
