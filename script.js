var socialBar=document.querySelector("#socials");
var contactButton=document.querySelector("#nav_contact");


var socials_visible = false;


function reveal(e){
	e.preventDefault();
	if(!socials_visible){
		socialBar.setAttribute("style","transform: translateY(-200px); transition: transform 0.7s ease");
		socials_visible=true;
	}
	else{
		socials_visible=false;
		socialBar.setAttribute("style","transform: translateY(+200px); transition: transform 0.7s ease-in");
	}
}


contactButton.onclick = reveal;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});