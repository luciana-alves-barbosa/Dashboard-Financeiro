let saldo = 0;

const saldoEl = document.getElementById("saldo");
const lista = document.getElementById("lista-transacoes");
const form = document.getElementById("form-transacao");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);

  saldo += valor;

  saldoEl.textContent = `Saldo: R$ ${saldo.toFixed(2)}`;

  const li = document.createElement("li");

  li.textContent = `${descricao}: R$ ${valor.toFixed(2)}`;

  // Cor dinâmica (top 🔥)
  li.style.color = valor < 0 ? "red" : "green";

  lista.appendChild(li);

  form.reset();
});