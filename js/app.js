//console.log("Hello, JavaScript!");

// let, var, const

// {
//     var name = "John";
//     let age = 30;

//     console.log(name);
//     console.log(age);
// }

// console.log(name);
// console.log(age);

//const

// let age = 30;
// console.log(age);

// age = 25;
// console.log(age);

// const number = 1;
// console.log(number);

// number = 2;
// console.log(number);

//arrays - let

// let customerList = ["Saman", "Nimal", "Kamal"];
// console.log(customerList);

// customerList.push("Sunil");
// console.log(customerList);

// customerList = "Kumara";
// console.log(customerList);

//arrays - const

// const customerList = ["Saman", "Nimal", "Kamal"];
// console.log(customerList);

// customerList.push("Sunil");
// console.log(customerList);

// customerList = "Kumara";
// console.log(customerList);


//----array methods----------------------//

// const number = [];
// number.push(1);
// console.log(number);
// number.push(2);
// console.log(number);
// number.push(3);
// console.log(number);
// number.push("Saman");
// console.log(number);
// number.push("Nimal");
// console.log(number);
// number.pop();
// console.log(number);
// number.reverse();
// console.log(number);

//-----------------filter method-------------//

// const productList = [
//     { name: "bun", inStock: true, price: 100 },
//     { name: "milk", inStock: true, price: 200 },
//     { name: "egg", inStock: false, price: 300 },
//     { name: "bread", inStock: true, price: 400 },
//     { name: "butter", inStock: false, price: 500 },
// ];

// console.log(productList);

//1st Step - filter the products which are in stock
// let inStockProducts = productList.filter(
//     function (product) {
//         return productFilter(product);


//     }
// );

// function productFilter(product) {
//     return product.inStock === true;
// }

// console.log(inStockProducts);


//2nd Step - filter the products which are in stock
// let inStockProducts = productList.filter(
//     function (product) {
//         return product.inStock === true;
//     }
// );
// console.log(inStockProducts);


//3rd Step - filter the products which are in stock
// let inStockProducts = productList.filter(product => product.inStock === true);
// console.log(inStockProducts);

// Arrow function with single parameter
// let txtValue = txtValue => {
//     return txtValue;
// }
// console.log(txtValue("Hello world! 1"));

// Arrow function with single parameter - short hand
// let sample = txtValue1 => txtValue1;
// console.log(sample("Hello world! 2"));

//sorting array of objeects

// const leterList = ["D", "A", "C", "B", "E", "Z", "N", "L", "I", "O"];
// console.log(leterList);

// const sortArray = leterList.sort();
// console.log(leterList);

//map - method

// const salaryList = [50000, 60000, 70000, 80000, 90000];
// console.log(salaryList);

//const newSalaryList = salaryList.map(salary => salary * 2);
// console.log(salaryList.map(salary => salary * 2));

//find - method

// const studentList = [
//     {name: "Saman", age: 20, gender: "Male"},
//     {name: "Nimal", age: 25, gender: "Male"},
//     {name: "Kamal", age: 30, gender: "Male"},
//     {name: "Sunil", age: 35, gender: "Male"},
//     {name: "Kumara", age: 40, gender: "Male"},
// ];
// console.log(studentList);

// const student = studentList.find(student => student.name == "Kamal");
// console.log(student);