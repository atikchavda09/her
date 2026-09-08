function celebrate() {

    const message = document.getElementById("message");

    message.innerHTML = "✨ Your wish is on its way... ❤️ ✨";

    for (let i = 0; i < 60; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️", "💖", "✨", "💕", "🌸"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration = 2 + Math.random() * 3;

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}