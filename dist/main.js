(()=>{"use strict";let e=()=>document.querySelector("#to-do-items"),t=document.querySelector(".add-to-do > button"),i=()=>document.querySelectorAll(".to-do-item"),o=e=>e.querySelectorAll(".priority > form > input");const l=(()=>{let e=[];const l=t=>{e.push(t)};t.addEventListener("click",(()=>{l(((e,t,i="Provide Description",o="2021-10-01",l="low")=>({project:"Project 1",title:"Enter Task",description:i,dueDate:o,priority:l}))()),r(),s.display(),u()})),window.addEventListener("click",(()=>{r(),s.setPriorityClass()}));const r=()=>{a(),d(),n(),c()},n=()=>{let t=0;for(const i of document.getElementsByClassName("title"))e[t].title=i.value,t++},a=()=>{let t=0;for(const i of document.getElementsByClassName("date"))e[t].dueDate=i.value,t++},d=()=>{let t=0;for(const i of document.getElementsByClassName("description-form"))e[t].description=i.value,t++},c=()=>{i().forEach(((t,i)=>{o(t).forEach((t=>{t.checked&&(e[i].priority=t.id)}))}))},u=()=>{document.querySelectorAll(".to-do-item > .delete").forEach((e=>{e.addEventListener("click",(e=>{m(e.path[2].querySelector(".summary > .title-form > input").value,e.path[2].querySelector(".description > input").value),s.display(),u()}))}))},m=(t,i)=>{console.log(t),console.log(i),e=e.filter((e=>e.title!==t))};return{getToDoList:()=>e,appendToDo:l}})(),s=(()=>{const t=()=>{e().childNodes.forEach(((e,t)=>{o(e).forEach((i=>{i.id===l.getToDoList()[t].priority&&(i.checked=!0,"high"===i.id?e.classList.add("high-priority"):e.classList.remove("high-priority"))}))}))};return{display:()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e()),l.getToDoList().forEach((t=>{e().appendChild((e=>{let t=e.title,i=e.description,o=e.dueDate,l=document.createElement("div");return l.innerHTML=`\n        <div class = "summary">\n          <div class = "title-form"> <input type = "text" value = "${t}" class = "title"> </div>\n          <div class = "date-form"> <input type = "date" value = "${o}" class = "date"> </div>\n        </div>\n\n        <div class = "description">\n          <input type = "text" value = "${i}" class = "description-form">\n        </div>\n\n        <div class = "priority">\n\n          <form>\n            <input type="radio" id="high" name="priority" value="high">\n            <label for="high">High</label><br>\n\n            <input type="radio" id="low" name="priority" value="low">\n            <label for="low">Low</label><br>\n          </form>\n        </div>      \n\n        <div class = "delete"><i class="fas fa-trash-alt"></i></div>\n      `,l.className+="to-do-item",l})(t))})),t(),document.querySelectorAll(".summary").forEach((e=>{e.addEventListener("click",(t=>{t.target.classList.contains("summary")&&("block"===e.nextElementSibling.style.display?e.nextElementSibling.style.display="none":e.nextElementSibling.style.display="block")}))})),i().forEach((e=>{e.addEventListener("mouseover",(()=>{e.lastElementChild.classList.add("show")})),e.addEventListener("mouseout",(()=>{e.lastElementChild.classList.remove("show")}))}))},setPriorityClass:t}})()})();