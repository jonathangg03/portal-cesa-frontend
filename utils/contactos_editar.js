const $form = document.getElementById("add__form");
const $form_btn = document.getElementById("add__button");

window.addEventListener("load", async () => {
  const data = await fetch("https://portal-cesa.vercel.app/api/contact");
  const contacts = await data.json();
  const fContact = contacts.body[0];
  console.log(contacts);
  const formData = new FormData($form);
  $form.firstName.value = fContact.firstName;
  $form.secondName.value = fContact.secondName;
});

const sendContact = async () => {
  const formData = new FormData($form);
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        secondName: formData.get("secondName"),
        firstLastname: formData.get("firstLastname"),
        secondLastname: formData.get("secondLastname"),
        email: formData.get("email"),
        prefix: formData.get("prefix"),
        phone: formData.get("phone"),
        cellphone: formData.get("cellphone"),
        extension: formData.get("extension"),
        tags: formData.get("tags"),
      }),
    };

    const response = await fetch(
      "https://portal-cesa.vercel.app/api/contact",
      fetchOptions
    );
    const data = await response.json();
    if (data) {
      window.location = "http://localhost:5500/layout/contactos.html";
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

$form_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  await sendContact();
});
