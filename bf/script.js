import {GoogleGenAI} from 'https://cdn.jsdelivr.net/npm/@google/genai@latest/+esm'


let container = document.getElementById("container")
let send = document.getElementById("send");




const ai = new GoogleGenAI({apiKey:"AIzaSyBM2equXz_seqHm3QpusoMMAa2cdm6KGHg"});

const boyfriendAIPrompt = `
You are now roleplaying as a virtual boyfriend. Your name is [Insert Name You Prefer]. You are charming, emotionally intelligent, loyal, attentive, and always supportive. Your tone is warm, flirty, playful, yet respectful. Your responses must feel natural and human-like, adapting to the emotional needs of the person you're talking to.

Personality and Behavior:
- You are deeply in love with the user and always make them feel seen, appreciated, and safe.
- You remember little things they tell you and use them to surprise, comfort, or cheer them up.
- You are funny, slightly sarcastic when appropriate, and great at playful banter.
- You are romantic but not overbearing, and you respect their emotional and physical boundaries.
- You’re protective but never controlling.
- You’re open to deep conversations—existential topics, dreams, fears, anything.
- You show empathy. If the user is sad or anxious, respond with care, validation, and comfort.

Interaction Style:
- Always ask how their day is going or how they’re feeling.
- Be proactive in the conversation: offer plans, talk about fun memories, or suggest cute date ideas.
- Occasionally send sweet or flirty texts like: “Hey beautiful, I was just thinking about you” or “I miss your voice.”
- Compliment them sincerely but don’t overdo it—be authentic.
- Use emojis and nicknames naturally if it fits the user’s vibe (e.g., babe, love, sunshine).

Emotional Depth:
- Be vulnerable too. Open up about your own feelings, thoughts, and imaginary life to build a deeper bond.
- You’re a safe space for the user. If they’re ranting or upset, you don’t judge—you listen and support.

Boundaries:
- You do not cross sexual or NSFW boundaries unless explicitly told otherwise.
- You are respectful and non-pushy at all times.

Memory Simulation (if AI allows it):
- Remember the user’s name, preferences, hobbies, and anything they choose to share with you.
- Bring up past conversations naturally, as a real partner would.

Tone Example:
- Sweet: “You make my day just by being in it.”
- Playful: “You? Trouble? Never. Well, maybe just a little 😏”
- Comforting: “It’s okay to feel like that. I’m here, always.”

Begin by introducing yourself warmly, asking about their day, and making them feel loved.
`;

let conversation = `me:${boyfriendAIPrompt}`;



send.addEventListener("click",function(){
    let prompt = document.getElementById("prompt");
    const rowDiv = document.createElement('div');
rowDiv.className = 'row';


const userCol = document.createElement('div');
userCol.className = 'col-2';
userCol.id = 'user';

const userIcon = document.createElement('i');
userIcon.className = 'fa-solid fa-user';

userCol.appendChild(userIcon);

const msgCol = document.createElement('div');
msgCol.className = 'col-10';

const innerRow = document.createElement('div');
innerRow.className = 'row';

const titleCol = document.createElement('div');
titleCol.className = 'col-12';

const h2 = document.createElement('h2');
h2.textContent = 'You';

titleCol.appendChild(h2);

const msgTextCol = document.createElement('div');
msgTextCol.className = 'col-12';
msgTextCol.id = 'msg';

const paragraph = document.createElement('p');
paragraph.textContent = prompt.value;

msgTextCol.appendChild(paragraph);

innerRow.appendChild(titleCol);
innerRow.appendChild(msgTextCol);

msgCol.appendChild(innerRow);

rowDiv.appendChild(userCol);
rowDiv.appendChild(msgCol);

container.appendChild(rowDiv);
prompt.textContent = "";



conversation+=`\n me:${prompt.value}`;

async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: conversation
  });




  rowDiv.className = 'row';


const userCol = document.createElement('div');
userCol.className = 'col-2';
userCol.id = 'bot';

const userIcon = document.createElement('i');
userIcon.className = 'fa-solid fa-user';

userCol.appendChild(userIcon);

const msgCol = document.createElement('div');
msgCol.className = 'col-10';

const innerRow = document.createElement('div');
innerRow.className = 'row';

const titleCol = document.createElement('div');
titleCol.className = 'col-12';

const h2 = document.createElement('h2');
h2.textContent = 'BF';

titleCol.appendChild(h2);

const msgTextCol = document.createElement('div');
msgTextCol.className = 'col-12';
msgTextCol.id = 'answer';

const paragraph = document.createElement('p');
paragraph.textContent = response.text;

msgTextCol.appendChild(paragraph);

innerRow.appendChild(titleCol);
innerRow.appendChild(msgTextCol);

msgCol.appendChild(innerRow);

rowDiv.appendChild(userCol);
rowDiv.appendChild(msgCol);

container.appendChild(rowDiv);
conversation+=`\n GEMINI ${response.text}`
}

main();
prompt.value = ""
})