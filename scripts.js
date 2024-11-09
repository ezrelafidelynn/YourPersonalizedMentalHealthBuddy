function getBotResponse(userMessage) {
    const emotion = document.getElementById('emotion-select').value;
    let botResponse = '';

    if (userMessage.toLowerCase().includes('what should I do') || userMessage.toLowerCase().includes('advice')) {
        switch (emotion) {
            case 'happy':
                botResponse = "That's fantastic! Keep doing what makes you happy, and maybe share your positivity with others!";
                break;
            case 'sad':
                botResponse = "When you're feeling sad, it can help to talk to someone you trust or engage in activities you enjoy. Consider journaling your feelings.";
                break;
            case 'anxious':
                botResponse = "For anxiety, try grounding techniques like deep breathing or focusing on your surroundings. It might also help to talk to a friend.";
                break;
            case 'angry':
                botResponse = "If you're feeling angry, find a safe way to express it, like writing it down or doing some physical activity. It's okay to take a break.";
                break;
            case 'stressed':
                botResponse = "To manage stress, prioritize self-care. Take breaks, practice mindfulness, or engage in hobbies that relax you.";
                break;
            default:
                botResponse = "It's okay to seek help. Consider talking to someone who can provide support.";
        }
    } else if (userMessage.includes('vent') || userMessage.includes('share')) {
        botResponse = "I'm here to listen. Please tell me what's on your mind.";
    } else if (userMessage.toLowerCase().includes('mood journal')) {
        botResponse = "Let's reflect! What moment made you smile today?";
    } else if (userMessage.toLowerCase().includes('gratitude')) {
        botResponse = "What are three things you are grateful for today?";
    } else if (userMessage.toLowerCase().includes('self-care')) {
        botResponse = "Remember to hydrate! Have you had enough water today?";
    } else if (userMessage.toLowerCase().includes('breathe')) {
        botResponse = "Let's take a minute to breathe together. Inhale for 4 seconds, hold for 4, and exhale for 4.";
    } else if (userMessage.toLowerCase().includes('cognitive restructuring')) {
        botResponse = "What negative thought are you experiencing? Let's reframe it together.";
    } else {
        switch (emotion) {
            case 'happy':
                const happyResponses = [
                    "That's wonderful! Keep shining bright!",
                    "I love that energy! Stay positive!",
                    "It's great to see you happy! Spread that joy!",
                ];
                botResponse = happyResponses[Math.floor(Math.random() * happyResponses.length)];
                break;
            case 'sad':
                const sadResponses = [
                    "I'm truly sorry to hear that. It's okay to feel this way.",
                    "Sadness is a part of life. I'm here for you.",
                    "It's perfectly fine to feel sad sometimes. Let's talk about it.",
                ];
                botResponse = sadResponses[Math.floor(Math.random() * sadResponses.length)];
                break;
            case 'anxious':
                const anxiousResponses = [
                    "Anxiety can be challenging. Remember to breathe deeply.",
                    "It's tough to deal with anxiety. Take it one step at a time.",
                    "You're not alone in feeling anxious. I'm here to help.",
                ];
                botResponse = anxiousResponses[Math.floor(Math.random() * anxiousResponses.length)];
                break;
            case 'angry':
                const angryResponses = [
                    "It's completely normal to feel angry. Let's find a way to express it.",
                    "Anger is a valid emotion. Try to channel it positively.",
                    "Feeling angry? It's important to talk about it in a healthy way.",
                ];
                botResponse = angryResponses[Math.floor(Math.random() * angryResponses.length)];
                break;
            case 'stressed':
                const stressedResponses = [
                    "Stress can be overwhelming. Make sure to take care of yourself.",
                    "It's okay to feel stressed. Let's find some ways to relax.",
                    "Remember to take breaks. Self-care is crucial during stressful times.",
                ];
                botResponse = stressedResponses[Math.floor(Math.random() * stressedResponses.length)];
                break;
            default:
                botResponse = "How can I assist you today?";
        }
    }
    return botResponse;
}

document.getElementById('send-button').onclick = function() {
    const userInput = document .getElementById('user-input').value;
    const emotion = document.getElementById('emotion-select').value;
    const botResponse = getBotResponse(userInput, emotion);
    
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.textContent = userInput;
    document.getElementById('chat-window').appendChild(userMessageElement);
    
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'bot-message';
    botMessageElement.textContent = botResponse;
    document.getElementById('chat-window').appendChild(botMessageElement);
    
    document.getElementById('user-input').value = '';
}; 

function initChatbot() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = '';
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'bot-message';
    welcomeMessage.textContent = "Hello! I'm here to support you. How are you feeling today?";
    chatWindow.appendChild(welcomeMessage);
}

window.onload = initChatbot;