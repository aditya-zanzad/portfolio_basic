const aboutBtn = document.getElementById("btn1");
const projectsBtn = document.getElementById("btn2");
const experienceBtn = document.getElementById("btn3");
const contactBtn = document.getElementById("btn4");
const faceimage = document.getElementById("profile_image");
const switchbtn = document.getElementById("switch");
const logbtn = document.getElementById("logbtn");
const body = document.querySelector("body");
const name = document.getElementById("name");
const cornerBtn = document.querySelectorAll(".top-left, .top-right, .bottom-left, .bottom-right");
const topleft = document.querySelector(".top-left");
const topright = document.querySelector(".top-right");
const bottomleft = document.querySelector(".bottom-left");
const bottomright = document.querySelector(".bottom-right");
const details1 = document.getElementById("details1");
const details2 = document.getElementById("details2");
const details3 = document.getElementById("details3");
const details4 = document.getElementById("details4");
const btnname = document.querySelectorAll(".btn-name1 , .btn-name2 , .btn-name3 , .btn-name4");
const profile_image = document.getElementById("profile_image");

const downloadCvBtn = document.querySelectorAll("#downloadCvBtn");

downloadCvBtn.forEach(button => {
    button.addEventListener("click", () => {
        const cvUrl = "../path/to/your/cv.pdf"; // Update the path to your CV file
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Aditya_Zanzad_CV.pdf"; // Name of the downloaded file
        link.click();
    });
});

topleft.addEventListener("click", () => {
    faceimage.src = "../public/images/profile3.png";
    faceimage.style.width = "400px";  // Adjust width
    faceimage.style.height = "380px"; // Adjust height
    
    // Open the details element
    details1.open = true;

    // Close the details element after 4 seconds (4000 milliseconds)
    setTimeout(() => {
        details1.open = false;
    }, 4000);
});

bottomleft.addEventListener("click", () => {
    faceimage.src = "../public/images/profile2.png";
    faceimage.style.width = "400px";  // Adjust width
    faceimage.style.height = "380px"; // Adjust height

     // Open the details element
     details2.open = true;

     // Close the details element after 4 seconds (4000 milliseconds)
     setTimeout(() => {
         details2.open = false;
     }, 4000);
});

topright.addEventListener("click", () => {
    faceimage.src = "../public/images/profile4.png";
    faceimage.style.width = "400px";  // Adjust width
    faceimage.style.height = "380px"; // Adjust height

     // Open the details element
     details3.open = true;

     // Close the details element after 4 seconds (4000 milliseconds)
     setTimeout(() => {
         details3.open = false;
     }, 4000);

});

bottomright.addEventListener("click", () => {
    faceimage.src = "../public/images/profile5.png";
    faceimage.style.width = "400px";  // Adjust width
    faceimage.style.height = "380px"; // Adjust height

     // Open the details element
     details4.open = true;

     // Close the details element after 4 seconds (4000 milliseconds)
     setTimeout(() => {
         details4.open = false;
     }, 4000);
});

const buttons = [topleft, topright, bottomleft, bottomright];
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Reset image to default for non-topleft buttons after 5 seconds
        
            
            faceimage.style.width = "380px";  // Maintain size
            faceimage.style.height = "400px"; // Maintain size
    
    });
});

logbtn.addEventListener("click", () => {
    switchbtn.checked = !switchbtn.checked;
    console.log(switchbtn.checked ? "true" : "false");
    if (switchbtn.checked === true) {
        body.style.backgroundColor = "#2a2929";
        name.style.color = "white";
        btnname.forEach((btn) => {
            btn.style.color = "white";
        })
        body.style.border = "1px rgb(255, 68, 31)";
        cornerBtn.forEach((btn) => {
            btn.style.border = "1px solid white";
        });
        profile_image.style.boxShadow="0  0 0 0";
        profile_image.style.border="1px solid white";
    } else {
        body.style.backgroundColor = "white";
        name.style.color = "black";
        btnname.forEach((btn) => {
            btn.style.color = "black";
        });
        body.style.border = "1px solid black";
        cornerBtn.forEach((btn) => {
            btn.style.border = "1px solid black";
        });
        profile_image.classList.add('shadow-2xl');
    }
});
