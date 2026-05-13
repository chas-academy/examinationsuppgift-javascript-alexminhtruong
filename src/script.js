const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceEl = document.getElementById("balance");

function getAmount(value) {
	const amount = Number(value);
	return Number.isFinite(amount) ? amount : null;
}

function isValidInput(desc, amountRaw) {
	if (!desc.trim() || !amountRaw.trim()) return false;
	return getAmount(amountRaw) !== null;
}

function updateBalance(change) {
	const current = Number(balanceEl.textContent) || 0;
	balanceEl.textContent = String(current + change);
}

function addTransaction(type) {
	const desc = descInput.value;
	const amountRaw = amountInput.value;

	if (!isValidInput(desc, amountRaw)) return;

	const amount = getAmount(amountRaw);
	const list = type === "income" ? incomeList : expenseList;
	const label = type === "income" ? "Inkomst" : "Utgift";
	const change = type === "income" ? amount : -amount;

	const item = document.createElement("li");
	item.textContent = `${desc} - ${amountRaw} kr (${label})`;
	list.appendChild(item);

	updateBalance(change);
	descInput.value = "";
	amountInput.value = "";
}

incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"));
