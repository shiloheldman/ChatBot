var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+916363549133'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:varshithvh@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/916363549133'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
var resumeString = "<img src='images/resume_thumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Varshith V Hegde Resume.pdf</label></div><a href='assets/varshith_v_hegde_resume.pdf' download='varshith_v_hegde_resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/dir//Moodbidri+private+Bus+Stand,+Bus+Stand+Rd,+Mudbidri,+Karnataka+574227/@13.0639,74.9991985,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba4ab3d49331379:0x17be05cb5b69caa2!2m2!1d74.9957298!2d13.0680955?hl=en' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "был в сети " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Привет,<br><br>Я чатбот <span class='bold'><a class='alink'>ISLAMAI</a>.</span><br><br>Вы можете задавать мне вопросы!");
            }, 2000);
            break;
        
        

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
       
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.E degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C<br>PHP<br>Kotlin<br>Dart<br><br>CSS<br>HTML<br>JavaScript</span><br><br>I am well versed with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs</span><br>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.E degree in Computer Science Engineering from MITE Moodabidri<br>Passing Year : 2023<br><br>I have completed my PU from Excellent PU College Moodabidri<br>Passing Year:2019<br>Result:94%<br><br>I have completed my Secondary school from local school known as M K Shetty<br>Passing Year:2017");
            break;

        
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Varshithvhegde'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hello":
            sendTextMessage("Привет");
            sendTextMessage("<span class='sk'>отправь мне готовые ключевые слова<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "здраствуйте":
            sendTextMessage("Привет 👋🏻");
            sendTextMessage("<span class='sk'>отправь мне готовые ключевые слова<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "ку":
            sendTextMessage("Привет 👋🏻");
            sendTextMessage("<span class='sk'>отправь мне готовые ключевые слова<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        
        case "привет":
            sendTextMessage("Привет 👋🏻");
            sendTextMessage("<span class='sk'>отправь мне готовые ключевые слова<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
           

        case "Ты Ислам?":
            sendTextMessage("Нет, я чат бот созданный им");
            break;
        case "Как тебя зовут?":
            sendTextMessage("Я ISLAMAI");
            break;
        case "кто Ислам?":
            sendTextMessage("Ислам это веб-разработчик");
            break;
        
        case "у тебя есть сайт?":
            sendTextMessage("У меня не имеется сайта, но ты можешь чекнуть мой гитхаб <a target='_blank' href='https://github.com/shiloheldman'>Mars</a>");
            break;
        case "лучшая эскортница?":
            sendTextMessage("Конечно Адилет!")
            break;
       
        case "у тебя есть Инстаграм?":
            sendTextMessage("Да! вот мой Инстаграм <a target='_blank' href='https://www.instagram/marsioz'>Marsioz</a>");
            break;
        case "Где ты живешь?":
            sendTextMessage("Это секрет");
            break;
        case "Кто твой любимый исполнитель":
            sendTextMessage("Я люблю группу Агата Кристи,");
            break;
        case "у тебя есть друзья?":
        case "есть друзья":
            sendTextMessage("да, у меня очень много друзей!");
            break;
        case "input":
            setTimeout(()=>{
                // sendTextMessage("What a coincidence!");
                sendTextMessage("Привет "+name+"как дела?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Я НЕ ПОНИМАЮ ТЕБЯ");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
