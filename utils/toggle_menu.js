const $detailsList = document.querySelectorAll("details");

const expand = () => {
  $detailsList.forEach(($detail) => {
    $detail.removeAttribute("open");
  });
};

$detailsList.forEach(($detail) => {
  $detail.querySelector("summary").addEventListener("click", expand);
});
