const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums
}

const [first, second] = boxify(1, 3);

// console.log(boxify(1, 3));

const student = {
  name: "Omor Faruk",
  age: 20,
  programmingLanguage: ['JavaScript', 'Java']
};

const [firstProgrammingLanguage, secondProgrammingLanguage] = student.programmingLanguage;

// Object Destructuring
const employee = {
  id: 12345,
  age: 21,
  name: {
    first: "John",
    last: "Doe",
    middle: "M"
  },
  department: {
    name: "Engineering",
    role: "Software Developer",
    manager: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1234567890"
    }
  }
};

const { id, age } = employee;
const { name, role } = employee.department;
const { email } = employee?.department?.manager;
