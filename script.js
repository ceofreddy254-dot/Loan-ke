const translations = {
  en: { greeting: "Hello", entered: "You entered" },
  lg: { greeting: "Gyebale Ko", entered: "Okozeewo" },
  luo: { greeting: "Atyen", entered: "I ketye" },
  te: { greeting: "Ejok", entered: "Iponoke" },
  rk: { greeting: "Oraire ota", entered: "Wakateire" },
};

document.getElementById("saccoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const lang = document.getElementById("language").value;

  const text = translations[lang] || translations["en"];
  document.getElementById("result").textContent = `${text.greeting}, ${name}! ${text.entered}: ${amount} UGX`;
});