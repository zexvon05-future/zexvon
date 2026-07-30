// ==========================
// ZEXVON INTRO PART 2B
// ==========================

document.addEventListener("DOMContentLoaded", () => {

const intro = document.createElement("div");
intro.id = "zexvon-intro";

intro.innerHTML = `
<div class="intro-bg">

<div class="logo-wrap">

<img src="opening.png" alt="ZEXVON Opening" style="width:100vw;height:100vh;object-fit:cover;">

<div class="logo-title">ZEXVON</div>

<div class="logo-tagline">
TURNING IDEAS INTO REALITY
</div>

</div>

</div>
`;

document.body.appendChild(intro);

// Hide intro after 6 seconds
setTimeout(() => {
intro.classList.add("hide");

setTimeout(() => {
intro.remove();
},1200);

},6000);

});
