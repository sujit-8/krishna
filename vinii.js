const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
const audio=new Audio();
audio.src="https://audio.jukehost.co.uk/UPStqcz71PO6qUdB1PLWzaOi3qiRH5LD"