const hero = document.getElementById("heroImage");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  hero.style.transform =
    `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.03)`;
});

document.addEventListener("mouseleave", () => {
  hero.style.transform =
    "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
});
