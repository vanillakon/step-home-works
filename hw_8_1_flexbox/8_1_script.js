function box_width(){
//явно не самое оптимальное решение (((

  let all_titles = document.querySelectorAll('.box_title');
  for (let elem of all_titles){
    elem.style.paddingTop = elem.clientHeight / 2 - 8 + 'px';
  }
  let outs = document.querySelectorAll('.box_title p');
  for (let out of outs){
   out.innerHTML = `${out.parentElement.clientWidth} X ${out.parentElement.clientHeight}`;
}
  window.addEventListener('resize', function   (event){
   for (let out of outs){
   out.innerHTML = `${out.parentElement.clientWidth} X ${out.parentElement.clientHeight}`;
    }
  });
}
