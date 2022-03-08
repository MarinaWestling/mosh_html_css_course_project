const collapsibles = document.querySelectorAll('.collapsible');
const domainList = document.querySelectorAll('.domain-lookup__prices')[0];
const domainChildren = domainList.children;

Object.values(domainChildren).forEach(child=>{
  child.addEventListener('click', ()=>{
    if(child.firstElementChild.tagName === "SPAN"){
      Object.values(domainChildren).forEach((element)=>{
        element.firstElementChild.classList.remove("badge");
        element.firstElementChild.classList.remove("badge--secondary");
      });
      child.firstElementChild.classList.add("badge");
      child.firstElementChild.classList.add("badge--secondary");
    }
  });
});

// console.log(typeof domainChildren);

collapsibles.forEach((item)=>
item.addEventListener("click", function(){
  this.classList.toggle("collapsible--expanded");
}));
