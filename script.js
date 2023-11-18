const data = [
  { name: "john", age: 25, profession: "developer" },
  { name: "jane", age: 23, profession: "admin" },
  { name: "jasmine", age: 32, profession: "CEO" },
  { name: "michle", age: 24, profession: "sales manager" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

// 2. Add Data
function addData() {
  let newName = prompt("Enter Name");
  let newAge = Number(prompt("Enter Age"));
  let newProfession = prompt("enter Profession");

  let newObj = { name: newName, age: newAge, profession: newProfession };
  data.push(newObj);
}

// 3. Remove Admins
function removeAdmin() {
  data.forEach((person, index) => {
    if (person.profession === "admin") {
      data.splice(index, 1);
    }
  });
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let dummyArr = [
    { name: "michle", age: 30, profession: "teacher" },
    { name: "maxwell", age: 39, profession: "archaeologist" },
  ];
  dummyArr = dummyArr.concat(data);

  console.log(dummyArr);
}

// 5. Average Age
function averageAge() {
  let totalAge = 0;
  data.forEach((person) => {
    totalAge += person.age;
  });

  console.log(totalAge / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let found = false;
  data.forEach((person) => {
    if (person.age > 25) {
      console.log("Yes.. their is atleast one person whose age is above 25");

      found = true;

      return;
    }
  });

  if (!found) {
    console.log("No person found with age above 25");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let professionArr = [];

  data.forEach((person) => {
    if (!professionArr.includes(person.profession)) {
      professionArr.push(person.profession);
    }
  });

  console.log(professionArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    } else {
      return -1;
    }
  });

  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((person) => {
    if (person.name === "john") {
      person.profession = "manager";
    }
  });

  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devCount = 0;
  let adminCount = 0;

  data.forEach((person) => {
    if (person.profession === "developer") {
      devCount++;
    } else if (person.profession === "admin") {
      adminCount++;
    }
  });

  console.log(
    `There ${devCount > 0 ? "is" : "are"} ${devCount}  ${
      devCount > 1 ? "developers" : "developer"
    } and ${adminCount} ${adminCount > 1 ? "admins" : "admin"} in the data`
  );
}
