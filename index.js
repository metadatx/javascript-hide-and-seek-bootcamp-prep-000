function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll('.ranked-list li')
  for(var rank in ranks){
    rank.text = (parseInt(rank.innerHTML) + n)
  }
}