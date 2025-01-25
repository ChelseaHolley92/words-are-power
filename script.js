const affirmations = [
    { text: "You are capable of amazing things.", category: "confidence" },
    { text: "Gratitude brings abundance.", category: "gratitude" },
    { text: "Every step forward is progress.", category: "motivation" },
    { text: "Your potential is endless.", category: "confidence" },
    { text: "Kindness creates harmony.", category: "motivation" },
    { text: "You will be successful.", category: "career" },
    { text: "You are a money magnet.", category: "career" },
    { text: "You are loved.", category: "love" },
    { text: "You are appreciated.", category: "love" }

];   
function saveName() {
    const nameInput = document.getElementById('userName').value.trim();
    if (nameInput !== "") {
        localStorage.setItem('userName', nameInput);
        updateAffirmation();
    } else {
        alert("Please enter your name.");
    }
}
    
    function updateAffirmation() {
        let name = localStorage.getItem('userName') || "You";
        console.log("Updated name:", name);
        let affirmationBox = document.getElementById('affirmation-box');
        affirmationBox.innerText = `${name}, your daily affirmation will appear here.`;
    }

    document.addEventListener("DOMContentLoaded", updateAffirmation);

    const button = document.getElementById('new-affirmation');
    const affirmationBox = document.getElementById('affirmation-box');
    const categoryDropdown = document.getElementById('category');

        button.addEventListener('click', () => {
        const selectedCategory = categoryDropdown.value;
        let name = localStorage.getItem('userName') || "You";

        const filteredAffirmations = selectedCategory === 'all'
             ? affirmations
            : affirmations.filter(a => a.category === selectedCategory);

            if (filteredAffirmations.length === 0) {
                affirmationBox.textContent =  `${name}, No affirmations available for this category`;
                return;
            }  else {
             const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
            affirmationBox.textContent = `${name}, filteredAffirmations[randomIndex].text`;
            }
        });    
       
            
         





    