function Mirror() {
    let pathname;
    let hostname;
    let url;
    pathname = window.location.pathname;
    hostname = window.location.hostname;
    // if (hostname === '域名，不带https://协议')
    if (hostname === 'aabbj.com') { //如果是主站
      // url = "域名，带https://协议" + pathname;
      url = "https://flurrychan.github.io" + pathname; //就跳转到镜像站的同名页面
      window.alert("即将为您跳转至镜像站");
      window.location.href = url;
    }
    else if(hostname === 'flurrychan.github.io') {
      url = "https://aabbj.com" + pathname;
      window.alert("当前为镜像站，即将返回主站");
      window.location.href = url;
    }
    else {
      window.alert("本地调试，无需跳转");
    }
  }