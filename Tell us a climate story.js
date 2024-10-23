document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const files = fileInput.files;

    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const uploadedImages = document.getElementById("uploadedImages");
            const img = document.createElement("img");
            img.src = event.target.result;
            uploadedImages.appendChild(img);
        };
        reader.readAsDataURL(files[0]);
    } else {
        alert("Please upload a valid image file.");
    }
});