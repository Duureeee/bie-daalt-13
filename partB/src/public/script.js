const form = document.getElementById("shortenForm");
const longUrlInput = document.getElementById("longUrl");
const expiresAtInput = document.getElementById("expiresAt");
const message = document.getElementById("message");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  message.textContent = "";
  result.classList.add("hidden");
  result.innerHTML = "";

  const payload = {
    longUrl: longUrlInput.value.trim()
  };

  if (expiresAtInput.value) {
    payload.expiresAt = new Date(expiresAtInput.value).toISOString();
  }

  try {
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.error || "Something went wrong";
      return;
    }

    result.classList.remove("hidden");
    result.innerHTML = `
      <p>Short URL:</p>
      <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
      <p>Click count: ${data.clickCount}</p>
    `;
  } catch (error) {
    message.textContent = "Server алдаа гарлаа.";
  }
});
