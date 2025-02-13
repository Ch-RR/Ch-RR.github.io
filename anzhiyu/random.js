var posts=["2025/02/13/hello-world/","2025/01/24/test/","2025/02/07/旋量代数与李群、李代数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };