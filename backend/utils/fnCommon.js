function getDateTime(str = false) {
  const date = str ? new Date(str) : new Date();
  const res =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0") +
    " " +
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0") +
    ":" +
    String(date.getSeconds()).padStart(2, "0");
  return res;
}

function sortFactory(prop) {
  return (a, b) => a[prop].localeCompare(b[prop]);
}

export { getDateTime, sortFactory };
