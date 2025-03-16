document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".thumbs__text--title");
    const positions = [];

    texts.forEach(text => {
        let x, y, overlapping;
        do {
            x = Math.random() * 80 + 10; 
            y = Math.random() * 80 + 10; 

            
            overlapping = positions.some(pos => 
                Math.abs(pos.x - x) < 10 && Math.abs(pos.y - y) < 10
            );

        } while (overlapping);

        positions.push({ x, y });
        text.style.left = x + "%";
        text.style.top = y + "%";
    });
});

function showImage(imgSrc) {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");

    modalImage.src = imgSrc;
    modal.style.display = "block";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

