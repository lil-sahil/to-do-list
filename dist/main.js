(()=>{"use strict";let e=()=>document.querySelector("#to-do-items"),t=document.querySelector(".add-to-do > button"),r=()=>document.querySelectorAll(".to-do-item"),o=e=>e.querySelectorAll(".priority > form > input"),l=()=>document.querySelectorAll(".projects-list > ul >li"),i=()=>document.querySelector(".projects-list > ul");const c=(()=>{let e=[];return{getToDoList:()=>e,updateToDoList:()=>{console.log(e),(()=>{if(!a.getCurrentSelectedProjectName())return 0;let t=[];t=e.filter((e=>e.project===a.getCurrentSelectedProjectName()));let r=0;for(const e of document.getElementsByClassName("date"))t[r].dueDate=e.value,r++;e=e.filter((e=>e.project!==a.getCurrentSelectedProjectName()));for(const r of t)e.push(r)})(),(()=>{if(!a.getCurrentSelectedProjectName())return 0;let t=[];t=e.filter((e=>e.project===a.getCurrentSelectedProjectName()));let r=0;for(const e of document.getElementsByClassName("description-form"))t[r].description=e.value,r++;e=e.filter((e=>e.project!==a.getCurrentSelectedProjectName()));for(const r of t)e.push(r)})(),(()=>{if(!a.getCurrentSelectedProjectName())return 0;let t=[];t=e.filter((e=>e.project===a.getCurrentSelectedProjectName()));let r=0;for(const e of document.getElementsByClassName("title"))t[r].title=e.value,r++;e=e.filter((e=>e.project!==a.getCurrentSelectedProjectName()));for(const r of t)e.push(r)})(),(()=>{if(!a.getCurrentSelectedProjectName())return 0;let t=[];t=e.filter((e=>e.project===a.getCurrentSelectedProjectName())),r().forEach(((e,r)=>{o(e).forEach((e=>{e.checked&&(t[r].priority=e.id)}))})),e=e.filter((e=>e.project!==a.getCurrentSelectedProjectName()));for(const r of t)e.push(r)})()},updateArray:t=>{e=t}}})(),a=(()=>{let e=1;const t=()=>{let e=[];return c.getToDoList().filter((t=>{e.push(t.project)})),[...new Set(e)]},r=()=>{let e="";return l().forEach((t=>{t.classList.contains("project-selected")&&(e=t.querySelector("input").value)})),e};return window.addEventListener("click",(()=>{i().addEventListener("click",(e=>{var t;e.target.parentNode.classList.contains("delete")&&(t=e.target.parentNode.previousElementSibling.value,c.updateArray(c.getToDoList().filter((e=>e.project!==t))),u.display(),n.render())}))})),i().addEventListener("click",(e=>{"LI"===e.target.nodeName&&(l().forEach((e=>{e.classList.remove("project-selected")})),e.target.classList.add("project-selected"),r(),u.display())})),document.querySelector(".add-project > button").addEventListener("click",(()=>{let t=`Project ${e.toString()}`;d.appendToDo(s(`${t}`,"Enter Task")),n.render(),e+=1})),{getCurrentSelectedProjectName:r,updateProjectName:()=>{let e=t();l().forEach((t=>{if(!e.includes(`${t.querySelector("input").value}`)){let r=t.querySelector("input").value;e.forEach((e=>{if(!(()=>{let e=[];return l().forEach((t=>{e.push(t.querySelector("input").value)})),e})().includes(`${e}`)){let t=e;c.updateArray(c.getToDoList().map((e=>(e.project===t&&(e.project=r),e))))}}))}}))},getUniqueProjectNames:t}})(),n=(()=>{const e=e=>{let t=document.createElement("li");return t.innerHTML=`\n        <input type = "text" value = "${e}" class = "project">\n        <div class = "delete"><i class="fas fa-trash-alt"></i></div>   \n      `,t};return{createProject:e,render:()=>{(()=>{for(;i().firstChild;)i().firstChild.remove()})(),a.getUniqueProjectNames().forEach((t=>{i().appendChild(e(t))}))}}})(),s=(e,t,r="Provide Description",o="2021-10-01",l="low")=>({project:e,title:t,description:r,dueDate:o,priority:l}),d=(()=>{t.addEventListener("click",(()=>{e(s(`${a.getCurrentSelectedProjectName()}`,"Enter Task")),u.display()})),window.addEventListener("click",(()=>{var e;a.updateProjectName(),c.updateToDoList(),u.setPriorityClass(),e=c.getToDoList(),console.log("Saving"),localStorage.setItem("dataframe",JSON.stringify(e))}));const e=e=>{c.getToDoList().push(e)},r=()=>{document.querySelectorAll(".to-do-item > .delete").forEach((e=>{e.addEventListener("click",(e=>{o(e.path[2].querySelector(".summary > .title-form > input").value),u.display()}))}))},o=e=>{let t=c.getToDoList().filter((t=>t.project===a.getCurrentSelectedProjectName()&&t.title!==e)),o=c.getToDoList().filter((e=>e.project!==a.getCurrentSelectedProjectName()));for(const e of t)o.push(e);c.updateArray(o),r()};return{appendToDo:e,deleteButton:r}})(),u=(()=>{const t=()=>{e().childNodes.forEach(((e,t)=>{o(e).forEach((t=>{!0===t.checked&"high"===t.id?e.classList.add("high-priority"):!0===t.checked&"high"!==t.id&&e.classList.remove("high-priority")}))}))};return{display:()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e()),c.getToDoList().forEach((t=>{t.project===a.getCurrentSelectedProjectName()&&e().appendChild((e=>{let t=e.title,r=e.description,o=e.dueDate,l=e.priority,i=document.createElement("div"),c="",a="";return"high"===l?(c='<input type="radio" id="high" name="priority" value="high" checked>',a='<input type="radio" id="low" name="priority" value="low">'):(c='<input type="radio" id="high" name="priority" value="high">',a='<input type="radio" id="low" name="priority" value="low" checked>'),i.innerHTML=`\n        <div class = "summary">\n          <div class = "title-form"> <input type = "text" value = "${t}" class = "title"> </div>\n          <div class = "date-form"> <input type = "date" value = "${o}" class = "date"> </div>\n        </div>\n\n        <div class = "description">\n          <input type = "text" value = "${r}" class = "description-form">\n        </div>\n\n        <div class = "priority">\n\n          <form>\n            ${c}\n            <label for="high">High</label><br>\n\n            ${a}\n            <label for="low">Low</label><br>\n          </form>\n        </div>      \n\n        <div class = "delete"><i class="fas fa-trash-alt"></i></div>\n      `,i.className+="to-do-item",i})(t))})),t(),document.querySelectorAll(".summary").forEach((e=>{e.addEventListener("click",(t=>{t.target.classList.contains("summary")&&("block"===e.nextElementSibling.style.display?e.nextElementSibling.style.display="none":e.nextElementSibling.style.display="block")}))})),r().forEach((e=>{e.addEventListener("mouseover",(()=>{e.lastElementChild.classList.add("show")})),e.addEventListener("mouseout",(()=>{e.lastElementChild.classList.remove("show")}))})),d.deleteButton()},setPriorityClass:t}})();(()=>{let e=localStorage.getItem("dataframe");e=JSON.parse(e),c.updateArray(e),n.render()})()})();