function startConfetti() {
    const colors = ["blue", "green", "yellow", "red", "purple", "pink"];
    for (let i = 0; i < 200; i++) {
      let confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = Math.random() * window.innerHeight + 'px';
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.background = randomColor;
      confetti.style.animationDelay = Math.random() * 2 + 's';
      document.body.appendChild(confetti);
    }
}
  