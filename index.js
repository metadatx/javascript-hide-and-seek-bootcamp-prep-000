function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll('.ranked-list li')
  for(var rank of ranks){
    rank.innerHTML = (parseInt(rank.innerHTML) + n).toString()
  }
}

function deepestChild(){
  var parent = document.querySelector("#grand-node");
    
    while(parent.children.length > 0){
      parent = parent.children[0]
    }
    
    return parent
}