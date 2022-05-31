console.log("main.js 已启动")



getCSS.onclick = () => {
    const request = new XMLHttpRequest();//readyState = 0
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {//为了能执行2 onreadystatechange代替onload事件，必须要写其中一个事件
        //才能完成readystate的2，3，4，别问为什么我也不知道
        //https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
        console.log(request.readyState)
        if (request.readyState === 4) { //当readyState===4时，证明请求的东西已经下载完成，就可以开始操作请求的东西了
        if (request.status >= 200 && request.status < 300) {//request.status大概像状态码的东西，200-299是请求成功，200以下300以上请求失败
            // 创建 style 标签
          const style = document.createElement("style"); //请求成功了就创建一个style标签，把请求的css内容填入style标签，再放入head标签里就可以在HTML执行了
          // 填写 style 内容
          style.innerHTML = request.response;
          // 插到头里面
          document.head.appendChild(style);
        } else {
          alert("加载 CSS 失败");
        }
      }
    };
    request.send(); // readyState = 2
  };




  getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "/yinRu.js");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if (request.status >= 200 && request.status < 300){              
                const script = document.createElement("script");
                script.innerHTML = request.response;
                document.body.appendChild(script);
            }else{
                alert("加载 JS 失败");
            }
        }
    }
    request.send();
  }


  
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "/dongTai.html");
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            if (request.status >= 200 && request.status < 300){             
                const div = document.createElement("div");
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }else{
                alert("加载 html 失败");
            }
        }
    }
    request.send();
  }



getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "/33.xml");
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            if (request.status >= 200 && request.status < 300){             
               const dom = request.responseXML;   //ajax可以直接返回XML的内容        
               console.log('XML的所有内容是：');
               console.log(dom);
               const text = dom.getElementsByTagName("warning")[0].textContent;  //因为同HTML一样是document，
               //可以用dom的方法，找到warning的元素，此时找到的元素是一个伪数组，所以要给下标[0]
               //然后通过textContent属性获得里面的文本
               console.log(text.trim());
            }else{
                alert("加载 XML 失败");
            }
        }
    }
    request.send();
  }


  getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", "/44.json");
    request.onreadystatechange = ()=>{       
        if(request.readyState === 4){
            if (request.status >= 200 && request.status < 300){             
                const object = JSON.parse(request.response);
                console.log(object)
            }else{
                alert("加载 JSON 失败");
            }
        }
    }
    request.send();
  }




  let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n+=1
    }
  };
  request.send();
};

