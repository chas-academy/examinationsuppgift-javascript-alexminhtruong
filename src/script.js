const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceEl = document.getElementById("balance");

function updateBalance(change) {
	const current = Number(balanceEl.textContent) || 0;
	balanceEl.textContent = String(current + change);
}

function addTransaction(type) {
	const desc = descInput.value.trim();
	const amountText = amountInput.value.trim();
	const amount = Number(amountText);

	if (!desc || !amountText || !Number.isFinite(amount)) return;

	const list = type === "income" ? incomeList : expenseList;
	const label = type === "income" ? "Inkomst" : "Utgift";
	const change = type === "income" ? amount : -amount;

	const item = document.createElement("li");
	item.textContent = `${desc} - ${amountText} kr (${label})`;
	list.appendChild(item);

	updateBalance(change);
	descInput.value = "";
	amountInput.value = "";
}

incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));
