const chat_message = document.getElementById("chatmsg")
const Input = document.getElementById("userinput")
const Send_btn = document.getElementById("SendButton")
//----------------sb ko call krlia
// SendButton.addEventListener('click', () => { (jb srf ek hi event call krna ho)
function sndMsg() {
  const text = userinput.value;
  if (!text) return;
  //-----------------uservalue show krwana ab 
  const userMsg = document.createElement('div') // ye div create hua lkn screen pr nh hai abhi
  userMsg.classList.add('user', 'msg') //yaha is tareeke se div ko class dedi
  userMsg.textContent = text // user is div me type krega
  // console.log(textContent);
  chatmsg.appendChild(userMsg) //is div ko call krdia ab ye screen pr dikhega , user ka msg dikhega send krte hi
      userinput.value = ('') // msg send hote input khaali

  setTimeout(() => {
    let botreply = "WHAT! 🤔💭"
    // if () {//tolowercase kr k bot ko ayega tou wo hr tarah ki spelling pr reply dega

    // } 
    if (text.toLowerCase().includes('hello')) {
      botreply = "hey! How Are You?"
    } else if (text.toLowerCase().includes('im good')) {
      botreply = "What do you wants to Know? about store or contact us"
    }else if (text.toLowerCase().includes('what about you')) {
      botreply = "i am also fine"
    }
    else if (text.toLowerCase().includes('im fine')) {
      botreply = "What do you wants to Know? about store or contact us"
    }
    else if (text.toLowerCase().includes('hey')) {
      botreply = "hey! How Are You"
    } else if (text.toLowerCase().includes('tell me about your store')) {
      botreply = "A clothes shop or clothes store is any shop which sells items of ready-made clothing. A small shop which sells expensive or designer clothing may be called a boutique."
    } else if (text.toLowerCase().includes('about store')) {
      botreply = "A clothes shop or clothes store is any shop which sells items of ready-made clothing. A small shop which sells expensive or designer clothing may be called a boutique."
    }
    else if (text.toLowerCase().includes('contact')) {
      botreply = "call us at: 0312-5986878 , email at : ano18sha@gmail.com"
    } else if (text.toLowerCase().includes('thankyou')) {
      botreply = "Your Welcome reach us for more info , have a good day ALLAH HAFIZ"
    }
    const botmsg = document.createElement('div')
    botmsg.classList.add('botreply', 'msg')
    botmsg.textContent = botreply
    chatmsg.appendChild(botmsg)
    }, 1000)
}

// btn click pr sen
SendButton.addEventListener('click', sndMsg)
//enter pr km krega
userinput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    sndMsg();
  }
}
)

// }
// )
