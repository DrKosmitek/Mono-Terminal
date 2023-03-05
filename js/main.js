var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 0);
  textarea.focus();
}, 0);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {

    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
        git = commands.length;
        addLine("<span class='green'>Mono@Industries</span><span class='white'>:</span><span class='blue'>~/Mono/Terminal/Prompt$</span><span class='white2'> " + command.innerHTML + "</span>", "no-animation", 0, "4px");
        commander(command.innerHTML.toLowerCase().split(" "));
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }

function commander(cmd) {
  switch (cmd[0].toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin");
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2");
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
          break;
     case "radio":
        addLine("Opening Racist Radio", "color2");
        setTimeout(function () {
             window.open('http://radio.editz.xyz/public/rock_radio');
       }, 1000);
         break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2");
      addLine("<br>", "command");
      break;
Tab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 0);
      break;
    case "test":
      addLine(`<h1>${cmd[1]}</h1>`)
      break;
    default:
      addLine("<span class=\"error\">Command Not Found.</span>.</span>", "error", 0);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
