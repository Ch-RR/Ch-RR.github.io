var posts=["2025/01/25/hello-world/","2025/01/24/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };