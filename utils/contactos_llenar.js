const $contactTable = document.querySelector(".contacts__table");
const $contactColumns = Object.values($contactTable.children);

const request = async () => {
  const res = await fetch("https://portal-cesa.vercel.app/api/contact");
  const data = await res.json();
  return data.body;
};

const fill = async () => {
  const requestData = await request();
  requestData.forEach((requests) => {
    for (let i = 0; i < $contactColumns.length; i++) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      switch (i) {
        case 0:
          p.innerText = requests.firstName;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 1:
          p.innerText = requests.secondName;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 2:
          p.innerText = requests.firstLastname;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 3:
          p.innerText = requests.secondLastname;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 4:
          p.innerText = requests.email;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 5:
          p.innerText = requests.prefix;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 6:
          p.innerText = requests.phone;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 7:
          p.innerText = requests.cellphone;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
        case 8:
          p.innerText = requests.extension;
          div.appendChild(p);
          $contactColumns[i].appendChild(div);
          break;
      }
    }
  });
};

fill();
