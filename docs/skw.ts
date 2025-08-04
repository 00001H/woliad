const pnum = Number(document.head.getAttribute("data-pnum"));
const nav = document.createElement("div");
nav.classList.add("nav");
document.body.append(nav);
function mklink(to: string,text: string,disabled: boolean,title?: string){
    const a = document.createElement(disabled?"label":"a");
    if(!disabled){
        (a as HTMLAnchorElement).href = to;
    }
    a.textContent = text;
    if(title!==undefined){
        a.title = title;
    }
    if(disabled){
        a.setAttribute("disabled","true");
    }
    return a;
}
nav.append(mklink("..","s.d.fs",false,"siwa dis fisk"));
nav.append("//");
nav.append(mklink(`./${pnum-1}.html`,"suth'o",pnum<=0));
nav.append(mklink(`./${pnum+1}.html`,"sumo",document.head.hasAttribute("data-nonext")));
