let today = new Date();
let this_month = today.getMonth();
const month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
document.getElementById("this-month").textContent = month_list[this_month];
