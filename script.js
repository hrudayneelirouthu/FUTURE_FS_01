document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  alert("Message sent!");
});
