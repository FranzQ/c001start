let cursor = 1
let blockId = 1
var imgs =  'https://www.ionibbles.com/eps/S02/B02E0'
var post = [
  {
    comments: [],
    caption: "We love music and we know you do too. But have you ever wondered the role of technology behind the harmonious music you enjoy everyday? How laborious was music creation in the past decades? Grab a drink and tone your volume to soprano for the first episode of this season as one of Ghana's finest music producers, Kojo Steve disseminates the inside out of music production! This is not a pitch.",
  },
  {
    comments: [],
    caption: " If you haven't built your dream home yet, this episode might be what you've been waiting for all your life! Sit back and enjoy this thrilling episode as Daniel and Appiah discuss the influence of tech on homes from construction to full home automation including the use of AR and VR for design, engineering and construction of the home. We are also happy to announce a new nib, Samuel Appiah-Kubi, a software engineer at Microsoft as he joins the panel for the first time.",
  }
  ,
  {
    comments: [],
    caption: " We asked 10 random active listeners of the I/O Nibbles Tech Podcast to share their foresight on the nature of technology in the next decade. Do you concur to their thoughts? Do you have other views on the subject? Let us know in the comment section on Youtube",
  },
  {
    comments: [],
    caption: "Autonomous TroTro vs Self Driving Uber, who wins? And which would you prefer? Enjoy the ride with Appiah and Daniel as they drive us across the terrain of groundbreaking innovations of transport systems. Enjoy!",
  },
  {
    comments: [],
    caption: "Would you allow a robot to inject you? Is managing patient info on cloud safe? Would AI making drug prescription to patients safe? Is remote surgical operations possible? This and much more is discussed in this episode.",
  },
  {
    comments: [],
    caption: "What does 5G mean for you? What would be its effect on me, self-driving planes, land base services, industrial applications, streaming and intense VR gaming? Is it just speed? Sir Cynoc Boahene, a Google engineer who has worked on Google Duo and currently Google Search, also the founder of CodeAfrique breaks down the complexities of the 5G technology with long lost Andy Korshie, the veteran nib!",
  }  
]

function prev()
{
    if(cursor > 1)
    {
        cursor--;
        readData();
      }
    limitChk();
}

function next()
{        
    if(cursor < 7)
    {
        cursor++;
        readData();
    }
    limitChk();
}

function readData() {
  document.getElementById("imgDisp").src = imgs + cursor + '.jpg';
  document.getElementById("cap").innerHTML = post[cursor - 1].caption;
  document.getElementById("stackComms").innerHTML = null;
  var cPool = post[cursor - 1].comments;
  cPool.forEach(function (item, index) {
    if (item.value.length >= 1) {
      var clone = document.getElementById("defBlock").cloneNode(true);
      clone.removeAttribute("hidden");
      clone.id = "block" + blockId.toString();
      clone.children[1].children[1].id = "blockComm" + blockId.toString();
      clone.children[1].children[1].innerHTML = item.value;
      blockId++;
      document.getElementById("stackComms").appendChild(clone);
    }
  });
  limitChk();
}

function comment() {
  comm = document.getElementById("txtBoxComment").value.trim();
  if (comm.length >= 1) {
    post[cursor - 1].comments.push({
      key:   "comment",
      value: comm
  });
  document.getElementById("txtBoxComment").value = null;
  readData()
  document.getElementById("stackComms").scrollIntoView();
  }
}

function limitChk(){
  document.getElementById("btnNext").style.display = "block";
  document.getElementById("btnPrev").style.display = "block";
if (cursor >= 6) {
  document.getElementById("btnNext").style.display = "none";
  document.getElementById("btnPrev").style.display = "block";
}
else if (cursor <= 1) {
  document.getElementById("btnPrev").style.display = "none";
  document.getElementById("btnNext").style.display = "block";
}
}

window.onload = readData;

var defBox = document.getElementById("txtBoxComment");
defBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btnSubmitComment").click();
  }
});

