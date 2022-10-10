function darkMode(){
    const dark = '#121212';
    const offWhite = '#f5f5f5';
    const black = "black";
    var buttons = document.getElementsByClassName('Buttons');
    var element = document.querySelector('#Buttons');
    if (element.innerHTML == 'Dark Mode'){
        // Setting to dark mode
        element.innerHTML = 'Light Mode';
        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = dark;
            buttons[i].style.boxShadow = "0px 8px 10px 5px rgba(255,255,255,0.1)";
        }
        element.style.color = offWhite; // Changes the button text
        document.body.style.backgroundColor = dark; // Dark Background
        document.body.style.color = offWhite; // Changes the whole page text
    }else{
        // Setting to light mode
        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = offWhite;
            buttons[i].style.boxShadow = "0px 8px 10px 5px rgba(0,0,0,0.2)";
        }
        element.innerHTML = 'Dark Mode';
        element.style.color = black;
        document.body.style.backgroundColor = offWhite;
        document.body.style.color = black;
    }
}