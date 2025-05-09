//Global Variable
let courceName = "javaScript";

function practiceScope() {
  //Function Scope
  let topic ="Variables";
  console.log(courceName+"  - "+ topic);

  if(true) {
    //Block Scope
    let detail = "Exploring scopes";

    console.log(detail)
  }

  // console.log(detail);
}

practiceScope()