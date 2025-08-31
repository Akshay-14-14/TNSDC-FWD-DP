const elements=document.querySelectorAll("section, .project-card, .skill-card");
const observer=new IntersectionObserver(entries=>
{
  entries.forEach(entry=> 
  {
    if (entry.isIntersecting) 
    {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
elements.forEach(el=>observer.observe(el));
const roles=["Web Developer","Web Designer","Freelancer"];
let i=0;
let j=0;
let currentRole="";
let isDeleting=false;
const speed=150;
const roleElement=document.getElementById("role");
function type()
{
    if (!isDeleting) 
    {
        currentRole=roles[i].substring(0,j+1);
        roleElement.textContent=currentRole;
        j++;
        roleElement.classList.add("fade-in");
        if(j===roles[i].length) 
        {
            isDeleting=true;
            setTimeout(type,1000); 
            return;
        }
    } 
    else 
    {
        currentRole=roles[i].substring(0,j-1);
        roleElement.textContent=currentRole;
        j--;
        if(j===0) 
        {
            isDeleting=false;
            roleElement.classList.remove("fade-in");
            i=(i+1)%roles.length; 
        }
    }
    setTimeout(type,speed);
}
type();
