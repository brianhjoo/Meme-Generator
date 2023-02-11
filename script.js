const form = document.querySelector('form');
const url = document.querySelector('#imageURL');
const topTxtInput = document.querySelector('#toptext');
const bottomTxtInput = document.querySelector('#bottomtext');
const memes = document.querySelector('.memes');


function addMeme(url) {
  const html = `<img src=${url} class="image" alt="meme">`;
  const div = document.createElement('div');
  div.className = 'meme';
  div.innerHTML = html;
  div.append(addTopText());
  div.append(addBottomText());
  memes.append(div);
}

function addTopText() {
  const topText = topTxtInput.value;
  const div = document.createElement('div');
  div.className = 'top-text';
  div.innerText = topText;
  return div;
}

function addBottomText() {
  const bottomText = bottomTxtInput.value;
  console.log(bottomText);
  const div = document.createElement('div');
  div.className = 'bottom-text';
  div.innerText = bottomText;
  return div;
}


form.addEventListener('submit', e => {
  e.preventDefault();
  if (url.value) addMeme(url.value);
  form.reset();
});

memes.addEventListener('click', e => {
  if (e.target.classList.contains('image')) {
    e.target.parentElement.remove();
  }
});

