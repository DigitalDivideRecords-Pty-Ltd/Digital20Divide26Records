// Digital Divide Records — Base44 database configuration
//
// The demo & contact forms save straight into your Base44 database.
// To activate them:
//   1. Open your Base44 dashboard → "API" page.
//   2. Create an API key and paste it below between the quotes.
const BASE44_CONFIG = {
  APP_ID: "6ac69ca83c38de10e6bdb50c",
  API_KEY: "PASTE_YOUR_API_KEY_HERE",
};

async function createRecord(entityName, data) {
  const res = await fetch(
    "https://app.base44.com/api/apps/" + BASE44_CONFIG.APP_ID + "/entities/" + entityName,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + BASE44_CONFIG.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Request failed (" + res.status + ")");
  return res.json();
}

// Wires one form to one entity. Shows a success card on success,
// an inline error on failure, and a busy state while submitting.
function handleFormSubmit(formId, entityName, busyLabel, successHtml) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    const errEl = form.querySelector(".form-error");
    if (errEl) errEl.textContent = "";
    btn.disabled = true;
    btn.textContent = busyLabel;
    const data = {};
    new FormData(form).forEach(function (value, key) { data[key] = value; });
    createRecord(entityName, data)
      .then(function () {
        const card = document.createElement("div");
        card.className = "success-card";
        card.innerHTML = successHtml;
        form.replaceWith(card);
      })
      .catch(function () {
        if (errEl) errEl.textContent = "Something went wrong — please try again.";
        btn.disabled = false;
        btn.textContent = original;
      });
  });
}