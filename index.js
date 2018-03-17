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
  var nList = document.querySelectorAll("#grand-node div")
  return nList[nList.length-1]
}