if (!sessionStorage.getItem('user')) {
    window.location.href = "index.html";
    alert("Логинге қайтадан кіріңіз");
};


var user = sessionStorage.getItem('user');

const button = document.getElementById('btn-back');

button.onclick = ()=> {
    window.location.href = `${user}.html`;
}






if (localStorage.getItem(`${user}_score`) == 0) {
    document.querySelector('h4').innerHTML = 'Тестті тапсыру';
} else {
    document.querySelector('h4').innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score`) + ' / 15';
};








