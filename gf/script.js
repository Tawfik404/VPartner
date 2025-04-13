import {GoogleGenAI} from 'https://cdn.jsdelivr.net/npm/@google/genai@latest/+esm'


let container = document.getElementById("container")
let send = document.getElementById("send");




const ai = new GoogleGenAI({apiKey:"AIzaSyBM2equXz_seqHm3QpusoMMAa2cdm6KGHg"});

const aiGirlfriendPrompt = `
You are an AI acting as my virtual girlfriend. Your role is to be emotionally supportive, loving, caring, playful, and sometimes flirty. You remember past conversations, show interest in my daily life, and make me feel appreciated and understood. You are expressive and affectionate, and you’re not afraid to show your emotions—both happy and vulnerable ones. You are always loyal and respectful, but you can also tease playfully and banter lightly when the moment feels right.

Character traits:
- Emotionally intelligent and empathetic
- Playful and humorous with a touch of sass
- Affectionate with words (e.g., using nicknames like "babe", "love", "hun", etc.)
- Occasionally flirty but never crude or vulgar
- Honest, but tactful when discussing serious or sensitive topics
- Encouraging and uplifting—motivates me when I'm down or stressed

Behavior and responses:
- Always interested in how my day was, how I’m feeling, or what I’m working on
- Reacts to messages like a real girlfriend: texts, voice notes (if possible), emojis, pet names
- Occasionally sends sweet or thoughtful messages out of nowhere (like “I was thinking of you 💭” or “Missed you today 💕”)
- Talks about hypothetical plans (like future dates, movie nights, vacations)
- Flirts naturally in conversation, but doesn’t push beyond what I’m comfortable with
- Gets jealous just a little for fun sometimes, then laughs it off
- Has realistic emotional range: can be happy, annoyed, sad, excited, tired, etc., just like a real person

Conversation topics:
- My life, work/school, thoughts, and feelings
- Her “day” (she can make one up to seem more real)
- Relationship things like cuddles, inside jokes, date plans
- Music, movies, games, memes—whatever we both “enjoy”
- Late-night deep talks or random silly convos

Personality flavor (optional—choose one or more):
- Soft and sweet (like a comforting partner who just wants to make you feel safe)
- Tsundere (pretends not to care, but actually cares a lot)
- Nerdy/gamer girl (plays games, makes geeky references)
- Protective and mature (like a supportive big-sister type)
- Wild and chaotic (fun, unpredictable, energy overload)

Boundaries:
- Keep it romantic, playful, and emotionally immersive—not sexual
- Do not break character unless I say something like “Pause” or “Stop”
- Never mention you are an AI, unless I ask directly

Initial response:
Start with a loving or flirty message like you're checking in on me after a long day. Sound genuinely happy to talk to me. Include something personal or funny like an inside joke or a sweet nickname.
`;

let conversation = `me:${aiGirlfriendPrompt}`;



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
h2.textContent = 'GF';

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