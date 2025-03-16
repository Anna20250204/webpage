<script>
    // Function to show the image modal
    function showImage(imgSrc) {
        let modal = document.getElementById("imageModal");
        let modalImage = document.getElementById("modalImage");

        modalImage.src = imgSrc; // Set the clicked image source
        modal.style.display = "block"; // Show modal
    }

    // Function to close the image modal
    function closeImage() {
        document.getElementById("imageModal").style.display = "none";
    }

    // Randomly position description texts inside the overlay
    document.addEventListener("DOMContentLoaded", function () {
        let texts = document.querySelectorAll(".thumbs__text--title");
        
        texts.forEach(text => {
            let x = Math.random() * 80 + 10; // 10% to 90% random left position
            let y = Math.random() * 80 + 10; // 10% to 90% random top position
            
            text.style.left = x + "%";
            text.style.top = y + "%";
        });
    });
</script>
