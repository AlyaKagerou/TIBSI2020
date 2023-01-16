var element = document.body;

function ubahMode(){
    element.classList.toggle("dark");
    if (element.classList.contains('dark')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','light');
    }
}
var theme = localStorage.getItem("theme");
if(theme == 'dark'){
    element.classList.add("dark");
}