function emailMe() {
    window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
}
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const contacts_dic = document.querySelector('.contacts-div');

    const linkedInButton = document.querySelector('.l-div');
    const gitHubButton = document.querySelector('.g-div');

    linkedInButton.addEventListener('click',()=>{ // This will take you to my 'LinkedIn' portfolio : 
        window.open('https://www.linkedin.com/in/baghdad-boulali-40a650264/');
    })
    gitHubButton.addEventListener('click',()=>{ // This will take your to my 'GitHub' portfolio : 
        window.open('https://github.com/Baghdad19');
    })
    var appears = false;

    
    menu.addEventListener('click',()=>{
        if(!appears) {
            nav.style.display='block';
            contacts_dic.style.cssText='display:flex !important;';
            appears = true;
        } else {
            nav.style.display='none';
            appears = false;
            contacts_dic.style.display='none';
        }
    })
});
