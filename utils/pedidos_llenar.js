const $requestTable = document.querySelector(".requests__table");
const $requestColumns = Object.values($requestTable.children);

const request = async () => {
  const res = await fetch("https://portal-cesa.vercel.app/api/request");
  const data = await res.json();
  return data.body;
};

const fill = async () => {
  const requestData = await request();
  requestData.forEach((requests) => {
    for (let i = 0; i < $requestColumns.length; i++) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      switch (i) {
        case 0:
          p.innerText = requests.client;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
        case 1:
          p.innerText = requests.name;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
        case 2:
          p.innerText = requests.phone;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
        case 3:
          p.innerText = requests.date;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
        case 4:
          p.innerText = requests.attendant;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
        case 5:
          p.innerText = requests.detail;
          div.appendChild(p);
          $requestColumns[i].appendChild(div);
          break;
      }
    }
  });
};

fill();
