const btn = document.querySelector('.app__btn'),
  title = document.querySelector('.app__title'),
  content = document.querySelector('.app__content'),
  api = 'https://api.adviceslip.com/advice',
  randomNum = () => Math.round(Math.random() * 224);

const getAdvice = async () => {
  try {
    const num = randomNum();
    const res = await fetch(`${api}/${num}`);
    const { slip } = await res.json();
    title.textContent = `ADVICE #${slip.id}`;
    content.textContent = `“${slip.advice}”`;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', () => {
  getAdvice();
});
