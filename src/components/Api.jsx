// 5 dummy user data points
const homeData = [
  { id: 1, name: "Prem", email: "john@example.com", age: 28, city: "New York", job: "Software Engineer" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34, city: "London", job: "Product Manager" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", age: 25, city: "San Francisco", job: "Data Scientist" },
  { id: 4, name: "Sarah Wilson", email: "sarah@example.com", age: 31, city: "Berlin", job: "UX Designer" },
  { id: 5, name: "David Brown", email: "david@example.com", age: 29, city: "Toronto", job: "DevOps Engineer" }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Promise - A Promise is something that will complete later, not immediately.

// setTimeout waits for ms milliseconds, then calls resolve().

export const getUsers = async () => {
  await delay(800);
  return homeData;
};

export const getUserById = async (id) => {
  await delay(500);
  return homeData.find(user => user.id === parseInt(id));
};
