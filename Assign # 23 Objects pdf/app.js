// Question # 01

// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
//   ];

//   itemsArray.forEach(item => {
//     item.totalPrice = parseInt(item.price) * parseInt(item.quantity);
//   });

//   itemsArray.forEach(item => {
//     console.log(`${item.name}: Price = ${item.price}, Quantity = ${item.quantity}, Total Price = ${item.totalPrice}`);
//   });

//   const totalCost = itemsArray.reduce((sum, item) => sum + item.totalPrice, 0);

//   console.log(`Total Cost of All Items: ${totalCost}`);

// Question # 02

// var info={
// fname:'Muhammad Ali',
// lname:'Raza',
// password:'ali@123',
// age:'21',
// gender:'Male',
// city:'Karachi',
// country:'Pakistan',
// }
// console.log(info.age,info.country);
// console.log( info.fname,info.lname);

// Question # 03

// Define a constructor function
// function Person(name, age, gender, city, country,profession) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
//     this.profession=profession;
//     this.introduce = function()
//      {
//       console.log(`Hi, my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}, ${this.country},My profession is ,${this.profession}`);
//     };
//   }

//   const person1 = new Person("Muhammad Ali", 21, "Male", "Karachi", "Pakistan","AI Engineer");
//   const person2 = new Person("Sara Khan", 25, "Female", "Lahore", "Pakistan","Software Engineer");
//   const person3 = new Person("John Doe", 30, "Male", "New York", "USA","Time pass");

//   person1.introduce();
//   person2.introduce();
//   person3.introduce();

// Question # 04

// function PopulationRecord(name, gender, address, education, profession) {
//   this.name = name;
//   this.gender = gender;
//   this.address = address;
//   this.education = education;
//   this.profession = profession;
// }

// let records = [];

// function addRecord() {
//   const name = document.getElementById("name").value;
//   const gender = document.querySelector('input[name="gender"]:checked').value;
//   const address = document.getElementById("address").value;
//   const education = document.getElementById("education").value;
//   const profession = document.getElementById("profession").value;

  
//   if (!name || !gender || !address || !education || !profession) {
//     alert("Please fill out all fields!");
//     return;
//   }

  
//   const newRecord = new PopulationRecord(
//     name,
//     gender,
//     address,
//     education,
//     profession
//   );

 
//   records.push(newRecord);


//   displayRecords();


//   document.getElementById("populationForm").reset();
// }


// function displayRecords() {
//   const recordsList = document.getElementById("recordsList");
//   recordsList.innerHTML = ""; 

//   records.forEach((record, index) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${
//       record.gender
//     }, Address: ${record.address}, Education: ${
//       record.education
//     }, Profession: ${record.profession}`;
//     recordsList.appendChild(listItem);
//   });
// }

// document.getElementById("addRecord").addEventListener("click", addRecord);
