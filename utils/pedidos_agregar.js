const $form = document.getElementById("add__form");
const $form_btn = document.getElementById("add__button");

const sendContact = async () => {
  const formData = new FormData($form);
  const date = formData.get("date").replace("T", " - ");
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client: formData.get("client"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        date: date,
        attendant: formData.get("attendant"),
        detail: formData.get("detail"),
      }),
    };

    const response = await fetch(
      "https://portal-cesa.vercel.app/api/request",
      fetchOptions
    );
    const data = await response.json();
    if (data) {
      window.location = "http://localhost:5500//layout/pedidos.html";
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

$form_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  await sendContact();
});
