document.getElementById("btn_Calculate").addEventListener("click", function () {
  // income
  const incomeAmount = document.getElementById("income_field").value;
  const income = parseInt(incomeAmount);
  // expense
  const foodAmount = document.getElementById("Food_field").value;
  const foodExpense = parseInt(foodAmount);

  const rentAmount = document.getElementById("Rent_field").value;
  const rentExpense = parseInt(rentAmount);

  const clothesAmount = document.getElementById("Clothes_field").value;
  const clothesExpense = parseInt(clothesAmount);
  // total Expense
  const totalExpense = foodExpense + rentExpense + clothesExpense;
  // total Balance
  const totalBalance = income - totalExpense;
  // show user
  const expenseAmount = (document.getElementById("Total_expense").innerText =
    totalExpense);
  const expense = parseInt(expenseAmount);

  const balanceAmount = (document.getElementById("Balance_amount").innerText =
    totalBalance);
  const balance = parseInt(balanceAmount);
});

document.getElementById("save_btn").addEventListener("click", function () {
  const save_field = document.getElementById("Save_field").value;
  const savings = parseInt(save_field);

  const balanceAmount = document.getElementById("Balance_amount").innerText;
  const balance = parseInt(balanceAmount);

  const saving = (balance / 100) * save_field;
  const savingAmount = (document.getElementById("Saving_Amount").innerText =
    saving);

  const remainingBalance = (document.getElementById(
    "Remaining_Balance"
  ).innerText = balance - saving);

  saving = "";
});
