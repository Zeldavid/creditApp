// db.js
module.exports = () => {
  const data = { users: [] };
  let paidCredit;
  // Create 20 users
  for (let i = 0; i < 20; i++) {
    let randomBoolean = Math.random() > 0.5 ? "Approved" : "Rejected";
    let randomLoan =
      randomBoolean === "Approved"
        ? Math.floor((Math.random() + 0.1) * 100000)
        : 0;
    if (randomLoan != 0) {
      paidCredit = Math.random() > 0.2 ? true : false;
    } else {
      paidCredit = false;
    }
    data.users.push({
      id: i,
      name: `user${i}`,
      email: `user${i}@email.com`,
      loan: randomLoan,
      stateLoan: randomBoolean,
      isLoanpayed: paidCredit
    });
  }
  return data;
};
