PlayerEvents.loggedIn(event => {

function getTime(message) {
    let time = new Date().getHours();
    let timeGreeting = "Hellooo"; // fallback

         if (time < 12) {timeGreeting = "good morning";} 
    else if (time < 18) {timeGreeting = "good afternoon";} 
    else                    {timeGreeting = "good evening";}

    return message.replace("TIME", timeGreeting);
}

function getName(message) {
    if (Math.random() > 0.5)
    {
        const name = event.player.getName().getString();
        return message.replace("NAME", name);
    }
    return message.replace("NAME", "");
}

function getEmojicon(message) {
    const emojicons = ["", "^-^", "^_^", ":D", "^^", "^.^", "^v^", "^w^"];
    let emojicon = emojicons[Math.floor(Math.random() * emojicons.length)];
    return message.replace("EMOJI", emojicon);
}

function getIrlTime(message) {
    if (Math.random() > 0.5)
    {
        let time = new Date().getHours();
        return message.replace("IRLTIME", "its " + time + "am");
    }
    return message.replace("IRLTIME", "");
}

function randomWelcome() {
    const welcomes = [
        "TIME, welcome to gearbound NAME EMOJI",
        "TIME NAME EMOJI",
        "Glad to have you back NAME EMOJI",

        "Hi NAME EMOJI (says server)",
        "Hello NAME EMOJI",
        "Eyy hello NAME EMOJI",

        "Hey welcome back NAME EMOJI",
        "Eyyy welcome back NAME EMOJI",

        "Welcome back NAME EMOJI",
        "Welcome back to GearBound NAME EMOJI",
        "Welcome back NAME, toooo GearBound  EMOJI",

        "Sup NAME, welcome back EMOJI",
    ];

    const pleaseSleep = [
        "Hey pls sleep IRLTIME",
        "please take care of you IRLTIME",
        "please dont stay up to late IRLTIME",
        "how about you call it a day? IRLTIME",
        "hey just wonna let you know its late IRLTIME",
        "hi hello, please consider getting a rest IRLTIME"
    ];

    let time = new Date().getHours(); 
    let text = "";
    if(time < 5) {
        text = pleaseSleep[Math.floor(Math.random() * pleaseSleep.length)];
    }
    else
    {
        text = welcomes[Math.floor(Math.random() * welcomes.length)];
    }

    if (text.includes("IRLTIME")) { text = getIrlTime(text); }
    if (text.includes("TIME"))    { text = getTime(text); } 
    if (text.includes("NAME"))    { text = getName(text); }
    if (text.includes("EMOJI"))   { text = getEmojicon(text); }

    event.player.tell(" ");
    event.player.tell(["         ", Text.gold(text)]);
    event.player.tell(" ");
}

if (!event.player.stages.has("starting_items")) {
    event.player.stages.add("starting_items");

    event.player.give("ftbquests:book");

    event.player.tell([" "]);
    event.player.tell(["Welcome to ", Text.gold("GearBound Season 0.4!")]);
    event.player.tell(["This season is a modified version of CABIN"]);
    event.player.tell(["so a huge shout out to them"]);
    event.player.tell([" "]);
    event.player.tell(["if you have issues let us know on ", Text.gold("discord").underlined().clickOpenUrl("[https://discord.gg/WAvBpBqd9u](https://discord.gg/WAvBpBqd9u)").hover("Click to open"), " or ", Text.gold("stoat").underlined().clickOpenUrl("[https://stt.gg/dwvt4Sra](https://stt.gg/dwvt4Sra)").hover("Click to open")]);
    event.player.tell(["but for now,"]);
    event.player.tell(["wish you good luck and have fun creating!"]);
    event.player.tell([" "]);
} else {
    randomWelcome();
}
})