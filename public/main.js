const openMenu = document.querySelector('.openMenu');

const closeMenu = document.querySelector('.closeMenu');
const mobMenu = document.querySelector('.menu');

const links = document.querySelectorAll('header a');

const light = document.querySelectorAll('.light');
const dark = document.querySelectorAll('.dark');

openMenu.addEventListener('click', () => {
  mobMenu.classList.remove('translate-x-[200%]');
});

closeMenu.addEventListener('click', () => {
  mobMenu.classList.add('translate-x-[200%]');
});

links.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu.click();
  });
});

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const themeCheck = () => {
  if (userTheme == 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    light.forEach((item) => {
      item.classList.remove('hidden');
    });
    return;
  }
  dark.forEach((item) => {
    item.classList.remove('hidden');
  });
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    light.forEach((item) => {
      item.classList.add('hidden');
    });
    dark.forEach((item) => {
      item.classList.remove('hidden');
    });
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  dark.forEach((item) => {
    item.classList.add('hidden');
  });
  light.forEach((item) => {
    item.classList.remove('hidden');
  });
};

dark.forEach((item) => {
  item.addEventListener('click', () => {
    themeSwitch();
  });
});

light.forEach((item) => {
  item.addEventListener('click', () => {
    themeSwitch();
  });
});

themeCheck();

/* Star Animation */
/* Credits: https://codepen.io/Hyperplexed/pen/YzeOLYe */

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
  star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

  star.style.animation = 'none';
  star.offsetHeight;
  star.style.animation = '';
};

for (const star of document.getElementsByClassName('magic-star')) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}
