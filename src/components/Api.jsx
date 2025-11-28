// 5 dummy user data points
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    city: "New York",
    job: "Software Engineer"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 34,
    city: "London",
    job: "Product Manager"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 25,
    city: "San Francisco",
    job: "Data Scientist"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    age: 31,
    city: "Berlin",
    job: "UX Designer"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    age: 29,
    city: "Toronto",
    job: "DevOps Engineer"
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getUsers = async () => {
  await delay(800); // Simulate network delay
  return dummyData;
};

export const getUserById = async (id) => {
  await delay(500);
  return dummyData.find(user => user.id === parseInt(id));
};

export default { getUsers, getUserById };
