console.log("main.js 已启动")
const request = new XMLHttpRequest();

function fengZhuang(fn,src,string){   //封装
  request.open("GET", src); 
  request.onreadystatechange = () => {
    if(request.readyState === 4){
        if (request.status >= 200 && request.status < 300){              
           fn();          
        }else{
            alert("加载"+ string +"失败");
        }
    }
};
    request.send();
};

getCSS.onclick = () => {
  fengZhuang(()=>{
        const style = document.createElement("style"); 
        style.innerHTML = request.response;
        document.head.appendChild(style);
  },"/style.css","css");
};

  getJS.onclick = ()=>{
    fengZhuang(()=>{
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    },"/yinRu.js","JS");
  }

  
  getHTML.onclick = ()=>{
    fengZhuang(()=>{
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    },"/dongTai.html","HTML");
  };



getXML.onclick = ()=>{
    fengZhuang(()=>{
      const dom = request.responseXML; 
      console.log('XML的所有内容是：');
      console.log(dom);
      const text = dom.getElementsByTagName("warning")[0].textContent;  
      console.log(text.trim());
    },"/33.xml","XML");
  }


  getJSON.onclick = ()=>{
    fengZhuang(()=>{
      const object = JSON.parse(request.response);
      console.log(object);
    },"/44.json","JSON");
  }




  let n = 1;
getPage.onclick = () => {
  fengZhuang(()=>{
    const array = JSON.parse(request.response);
    array.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.id;
      xxx.appendChild(li);
    });
    n+=1
  },`/page${n+1}`,"page(下一页)")
};
