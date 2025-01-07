const affirmations = [
    { text: "You are capable of amazing things.", category: "confidence" },
    { text: "Gratitude brings abundance.", category: "gratitude" },
    { text: "Every step forward is progress.", category: "motivation" },
    { text: "Your potential is endless.", category: "confidence" },
    { text: "Kindness creates harmony.", category: "motivation" }
];   

    const button = document.getElementById('new-affirmation');
    const affirmationBox = document.getElementById('affirmation-box');
    const categoryDropdown = document.getElementById('category');

    button.addEventListener('click', () => {
        const selectedCategory = categoryDropdown.value;

        const filteredAffirmations = selectedCategory === 'all'
             ? affirmations
            : affirmations.filter(a => a.category === selectedCategory);

            if (filteredAffirmations.length === 0) {
                affirmationBox.textContent = "No affirmations available for this category";
                return;
            } 
            
            const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
            affirmationBox.textContent = filteredAffirmations[randomIndex].text;
 });        
         





    