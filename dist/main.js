!function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var o=function(e){var t=document.getElementById("screen").children[0],a=t.children[0];"true"===e.target.dataset.showing?(t.classList.remove("show-modal"),a.classList.remove("show-placement"),t.classList.add("hidden"),a.classList.add("hidden"),e.target.dataset.showing="false"):(t.classList.remove("hidden"),a.classList.remove("hidden"),t.classList.add("show-modal"),a.classList.add("show-placement"),e.target.dataset.showing="true")},n=function e(t){"add"===t?(addEventListener("keydown",i),addEventListener("keyup",s),document.getElementById("quit-button").addEventListener("click",(function(){window.gameData.quit=!0,e("remove"),E()}))):"remove"===t&&(removeEventListener("keydown",i),removeEventListener("keyup",s),document.getElementById("canvas").remove(),document.getElementById("quit-button").remove())};function i(e){switch(e.keyCode){case 32:return void(window.gameData.pressedKeys.space=!0);case 65:return void(window.gameData.pressedKeys.a=!0);case 66:return void(window.gameData.pressedKeys.b=!0);case 67:return void(window.gameData.pressedKeys.c=!0);case 68:return void(window.gameData.pressedKeys.d=!0);case 69:return void(window.gameData.pressedKeys.e=!0);case 70:return void(window.gameData.pressedKeys.f=!0);case 71:return void(window.gameData.pressedKeys.g=!0);case 72:return void(window.gameData.pressedKeys.h=!0);case 73:return void(window.gameData.pressedKeys.i=!0);case 74:return void(window.gameData.pressedKeys.j=!0);case 75:return void(window.gameData.pressedKeys.k=!0);case 76:return void(window.gameData.pressedKeys.l=!0);case 77:return void(window.gameData.pressedKeys.m=!0);case 78:return void(window.gameData.pressedKeys.n=!0);case 79:return void(window.gameData.pressedKeys.o=!0);case 80:return void(window.gameData.pressedKeys.p=!0);case 81:return void(window.gameData.pressedKeys.q=!0);case 82:return void(window.gameData.pressedKeys.r=!0);case 83:return void(window.gameData.pressedKeys.s=!0);case 84:return void(window.gameData.pressedKeys.t=!0);case 85:return void(window.gameData.pressedKeys.u=!0);case 86:return void(window.gameData.pressedKeys.v=!0);case 87:return void(window.gameData.pressedKeys.w=!0);case 88:return void(window.gameData.pressedKeys.x=!0);case 89:return void(window.gameData.pressedKeys.y=!0);case 90:return void(window.gameData.pressedKeys.z=!0);case 188:return void(window.gameData.pressedKeys[","]=!0);case 190:return void(window.gameData.pressedKeys["."]=!0)}}function s(e){switch(e.keyCode){case 32:return void(window.gameData.pressedKeys.space=!1);case 65:return void(window.gameData.pressedKeys.a=!1);case 66:return void(window.gameData.pressedKeys.b=!1);case 67:return void(window.gameData.pressedKeys.c=!1);case 68:return void(window.gameData.pressedKeys.d=!1);case 69:return void(window.gameData.pressedKeys.e=!1);case 70:return void(window.gameData.pressedKeys.f=!1);case 71:return void(window.gameData.pressedKeys.g=!1);case 72:return void(window.gameData.pressedKeys.h=!1);case 73:return void(window.gameData.pressedKeys.i=!1);case 74:return void(window.gameData.pressedKeys.j=!1);case 75:return void(window.gameData.pressedKeys.k=!1);case 76:return void(window.gameData.pressedKeys.l=!1);case 77:return void(window.gameData.pressedKeys.m=!1);case 78:return void(window.gameData.pressedKeys.n=!1);case 79:return void(window.gameData.pressedKeys.o=!1);case 80:return void(window.gameData.pressedKeys.p=!1);case 81:return void(window.gameData.pressedKeys.q=!1);case 82:return void(window.gameData.pressedKeys.r=!1);case 83:return void(window.gameData.pressedKeys.s=!1);case 84:return void(window.gameData.pressedKeys.t=!1);case 85:return void(window.gameData.pressedKeys.u=!1);case 86:return void(window.gameData.pressedKeys.v=!1);case 87:return void(window.gameData.pressedKeys.w=!1);case 88:return void(window.gameData.pressedKeys.x=!1);case 89:return void(window.gameData.pressedKeys.y=!1);case 90:return void(window.gameData.pressedKeys.z=!1);case 188:return void(window.gameData.pressedKeys[","]=!1);case 190:return void(window.gameData.pressedKeys["."]=!1)}}function r(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t,a,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keys=t,this.x=a,this.y=o}var t,a,o;return t=e,(a=[{key:"update",value:function(){var e=!1;this.keys.forEach((function(t){window.gameData.pressedKeys[t]&&(e=!0)})),!window.gameData.healthRecovering&&window.gameData.streak%10==0&&window.gameData.streak>0&&(window.gameData.healthRecovering=!0,window.gameData.health=Math.min(20,window.gameData.health+1),setTimeout((function(){return window.gameData.healthRecovering=!1}),500)),this.draw(e)}},{key:"draw",value:function(e){var t,a=window.gameData,o=a.health,n=a.streak,i=a.wpm,s=a.canvasWidth,r=a.canvasHeight,d=this.keys.join("");window.ctx.lineWidth=5,window.ctx.fillStyle="#FFF",window.ctx.strokeStyle="#FFF",window.ctx.font="60px Arial",window.ctx.fillText("".concat(i," WPM"),s/2.5,.125*r),window.ctx.fillStyle="#111",window.ctx.fillRect(.725*s,.065*r,250,50),window.ctx.fill(),window.ctx.fillStyle="#0F0",window.ctx.fillRect(.725*s,.065*r,10*o,50),window.ctx.fill(),window.ctx.strokeRect(.725*s,.065*r,250,50),window.ctx.fillStyle="#FFF",window.ctx.fillText("".concat(o),.925*s,.125*r),window.ctx.font="40px Arial",window.ctx.fillText("Streak: ".concat(n),.84*s,.2*r),"qaz"===d?t="rgba(28, 68, 183,0.95)":"wsx"===d?t="rgba(242, 145, 0,0.95)":"edc"===d?t="rgba(0, 141, 48,0.95)":"rfvbgt"===d?t="rgba(244, 96, 0,0.95)":"space"===d?t="rgba(131, 0, 217,0.95)":"yhnmju"===d?t="rgba(189, 47, 46,0.95)":"ik,"===d?t="rgba(197, 71, 194,0.95)":"ol."===d?t="rgba(51, 193, 243,0.95)":"p"===d&&(t="rgba(5, 190, 142,0.95)");var l="space"===d?.05*s*2:.05*s;window.ctx.beginPath(),window.ctx.moveTo(this.x,this.y),window.ctx.lineTo(this.x+l,this.y),window.ctx.lineTo(this.x+l,this.y+.05*s),window.ctx.lineTo(this.x,this.y+.05*s),window.ctx.lineTo(this.x,this.y),window.ctx.stroke(),t&&e&&(window.ctx.fillStyle=t,window.ctx.fillRect(1.005*this.x,1.005*this.y,.9*l,.05*s*.9),window.ctx.fill()),window.ctx.beginPath(),window.ctx.moveTo(this.x+l/2,.3*r),window.ctx.lineTo(this.x+l/2,this.y),window.ctx.stroke(),window.ctx.beginPath(),window.ctx.moveTo(.275*s,.15*r),window.ctx.lineTo(.275*s,.25*r),window.ctx.stroke()}}])&&r(t.prototype,a),o&&r(t,o),e}(),l=["I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power thats inside Pokemon Gotta catch em all Its you and me I know its my destiny Pokemon Oh youre my best friend In a world we must defend Pokemon Gotta catch em all A heart so true Our courage will pull us through You teach me and Ill teach you Pokemon Gotta catch em all Gotta catch em all Every challenge along the way With courage I will face I will battle every day To claim my rightful place Come with me the time is right Theres no better team Arm in arm well win the fight Its always been our dream Pokemon Gotta catch em all Its you and me I know its my destiny Pokemon Oh youre my best friend In a world we must defend Pokemon Gotta catch em all A heart so true Our courage will pull us through You teach me and Ill teach you Pokemon Gotta catch em all Gotta catch em all Gotta catch em all Gotta catch em all Gotta catch em all Pokemon Gotta catch em all Its you and me I know its my destiny Pokemon Oh youre my best friend In a world we must defend Pokemon Gotta catch em all A heart so true Our courage will pull us through You teach me and Ill teach you Pokemon Gotta catch em all Gotta catch em all Pokemon abcdefg hijklmnop qrs tuv wx y and z","Is this the real life Is this just fantasy Caught in a landslide, no escape from reality Open your eyes, look up to the skies and see Im just a poor boy, I need no sympathy Because Im easy come, easy go, little high, little low Any way the wind blows doesnt really matter to me, to me Mama, just killed a man Put a gun against his head, pulled my trigger, now hes dead Mama, life had just begun But now Ive gone and thrown it all away Mama, ooh, didnt mean to make you cry If Im not back again this time tomorrow Carry on, carry on as if nothing really matters Too late, my time has come Sends shivers down my spine, bodys aching all the time Goodbye, everybody, Ive got to go Gotta leave you all behind and face the truth Mama, ooh Any way the wind blows I dont wanna die I sometimes wish Id never been born at all I see a little silhouetto of a man Scaramouche, Scaramouche, will you do the Fandango Thunderbolt and lightning, very, very frightening me Galileo Galileo, Galileo Galileo, Galileo Figaro magnifico But Im just a poor boy, nobody loves me Hes just a poor boy from a poor family Spare him his life from this monstrosity Easy come, easy go, will you let me go Bismillah No, we will not let you go Let him go Bismillah We will not let you go Let him go Bismillah We will not let you go Let me go Will not let you go Let me go Will not let you go Never, never, never, never let me go Ah No, no, no, no, no, no, no Oh, mamma mia, mamma mia Mamma mia, let me go Beelzebub has a devil put aside for me, for me, for me So you think you can stone me and spit in my eye So you think you can love me and leave me to die Oh, baby, cant do this to me, baby Just gotta get out, just gotta get right outta here Ooh Ooh, yeah, ooh, yeah Nothing really matters, anyone can see Nothing really matters Nothing really matters to me Any way the wind blows abcdefg hijklmnop qrs tuv wx y and z","To be, or not to be, that is the question Whether tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them. To die to sleep, No more and by a sleep to say we end The heartache and the thousand natural shocks That flesh is heir to tis a consummation Devoutly to be wishd. To die, to sleep To sleep, perchance to dreamay, theres the rub For in that sleep of death what dreams may come, When we have shuffled off this mortal coil, Must give us pause theres the respect That makes calamity of so long life. For who would bear the whips and scorns of time, The oppressors wrong, the proud mans contumely, The pangs of disprizd love, the laws delay, The insolence of office, and the spurns That patient merit of the unworthy takes, When he himself might his quietus make With a bare bodkin ? Who would fardels bear, To grunt and sweat under a weary life, But that the dread of something after death, The undiscovered country, from whose bourn No traveller returns, puzzles the will, And makes us rather bear those ills we have Than fly to others that we know not of ? Thus conscience does make cowards of us all, And thus the native hue of resolution Is sicklied over with the pale cast of thought, And enterprises of great pitch and moment With this regard their currents turn awry And lose the name of action.","Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them, but when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang, and although his airbending skills are great, he has a lot to learn before he is ready to save anyone. But I believe Aang can save the world."],h=["Its OK to have all of your eggs in one basket as long as you can control what happens to that basket"],w=["Yes, You re right that it is not an easy speed to achieve. But if you don t know what your goals are, you can t aim for them.","MR STARK, I DONT FEEL SO GOOD. No I will do you one better WHY IS GAMORA. I AM GROOT. I AM STEVE ROGERS. GET LOST, SQUIDWARD."],c=["Okay so Ill book a ticket on some garbage airline. I dont want to name an actual airline so lets make one up, lets just call it like Delta Airlines ok","Change will not come if we wait for some other person or some other time. We are the ones we have been waiting for. We are the change that we seek. BO","Everyone Fails At Who They Are Supposed To Be Thor. A Measure Of A Person, Of A Hero, Is How Well They Succeed At Being Who They Are. Avengers Endgame"],u=["Us humans are always close to destruction, Life itself is but a series of close calls. I mean, how would you know you were alive unless you knew you could die. Donald Glover ."],m=["Twinkle, twinkle, little star How I wonder what you are Up above the world so high Like a diamond in the sky Twinkle, twinkle little star How I wonder what you are Twinkle, twinkle, little little star","Space is big. Really big. You just won t believe how vastly, hugely, mindbogglingly big it is. I mean, you may think it is a long way down the road to the chemist s, but that is just peanuts to space."],g=["Space the final frontier. These are the voyages of the starship Enterprise. Its five year mission to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no man has gone before. Star Trek"],y=["The last ever dolphin message was misinterpreted as a surprisingly sophisticated attempt to do a double backwards somersault through a hoop whilst whistling the Star Spangled Banner but in fact the message was this So long and thanks for all the fish"],v=["Ive always wondered why we are here on this island. If there are any other worlds out there, why did we end up on this one. And suppose there are other worlds, then ours is just a little piece of something much greater. So we could have just as easily ended up somewhere else"],p=["If you mix the mashed potatoes and sauce, you can t separate them later. It s forever. The smoke comes out of Daddy s cigarette, but it never goes back in. We cannot go back. That is why it s hard to choose. You have to make the right choice. As long as you don t choose, everything remains possible."];function f(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(t){var a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.char=t.toLowerCase()," "===this.char?a=window.gameData.goalPos.space[0]:"qaz".includes(this.char)?a=window.gameData.goalPos.qaz[0]:"wsx".includes(this.char)?a=window.gameData.goalPos.wsx[0]:"edc".includes(this.char)?a=window.gameData.goalPos.edc[0]:"rfvbgt".includes(this.char)?a=window.gameData.goalPos.rfvbgt[0]:"yhnmju".includes(this.char)?a=window.gameData.goalPos.yhnmju[0]:"ik,".includes(this.char)?a=window.gameData.goalPos["ik,"][0]:"ol.".includes(this.char)?a=window.gameData.goalPos["ol."][0]:"p".includes(this.char)&&(a=window.gameData.goalPos.p[0]),this.x=a,this.y=.3*window.gameData.canvasHeight,this.speed=window.gameData.wpm/10,this.hit=!1,this.missed=!1}var t,a,o;return t=e,(a=[{key:"update",value:function(){this.y+=this.speed;var e=Math.abs(this.y-.85*window.gameData.canvasHeight)<22,t=" "===this.char?window.gameData.pressedKeys.space:window.gameData.pressedKeys[this.char];!this.hit&&e&&t&&(this.hit=!0,window.gameData.streak+=1,window.gameData.typedString+=this.char);var a=this.y-.85*window.gameData.canvasHeight>22;this.missed||this.hit||!a||(this.missed=!0,window.gameData.streak=0,window.gameData.health-=1,window.gameData.typedString+="*"),22===Math.floor(this.y-.85*window.gameData.canvasHeight)&&(window.gameData.traveledString+=this.char),this.draw()}},{key:"draw",value:function(){window.ctx.lineWidth=5,window.ctx.font="30px Arial",window.ctx.fillStyle="#FFF",window.ctx.strokeStyle="#FFF";var e=" "===this.char?.05*window.gameData.canvasWidth*2:.05*window.gameData.canvasWidth;window.ctx.fillRect(this.x,this.y,e,.05*window.gameData.canvasWidth),window.ctx.fill(),this.hit||this.missed?this.hit?(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#0F0"):this.missed&&(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#F00"):(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#000"),window.ctx.strokeRect(this.x,this.y,e,.05*window.gameData.canvasWidth);var t=" "===this.char?"SPACE":this.char.toUpperCase(),a=" "===this.char?this.x+e/7:this.x+e/3,o=" "===this.char?this.y+e/3:this.y+e/1.5;window.ctx.fillText(t,a,o)}}])&&f(t.prototype,a),o&&f(t,o),e}();function D(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.char=t.toLowerCase(),this.x=.55*window.gameData.canvasWidth,this.y=.175*window.gameData.canvasHeight,this.speed=window.gameData.wpm/10,this.hit=!1,this.missed=!1}var t,a,o;return t=e,(a=[{key:"update",value:function(){this.x-=this.speed;var e=Math.abs(this.x-.25*window.gameData.canvasWidth)<25,t=" "===this.char?window.gameData.pressedKeys.space:window.gameData.pressedKeys[this.char];!this.hit&&e&&t&&(this.hit=!0);var a=this.x-.235*window.gameData.canvasWidth<15;this.missed||this.hit||!a||(this.missed=!0),this.draw()}},{key:"draw",value:function(){window.ctx.lineWidth=5,window.ctx.font="30px Arial",window.ctx.fillStyle="#FFF",window.ctx.strokeStyle="#FFF";var e=.03*window.gameData.canvasWidth;window.ctx.fillRect(this.x,this.y,e,.03*window.gameData.canvasWidth),window.ctx.fill(),this.hit||this.missed?this.hit?(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#0F0"):this.missed&&(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#F00"):(window.ctx.fillStyle="#000",window.ctx.strokeStyle="#000"),window.ctx.strokeRect(this.x,this.y,e,.03*window.gameData.canvasWidth);var t=" "===this.char?"␣":this.char.toUpperCase(),a=this.x+e/3,o=this.y+e/1.5;window.ctx.fillText(t,a,o)}}])&&D(t.prototype,a),o&&D(t,o),e}(),x=function(){var e=new(window.AudioContext||window.webkitAudioContext);function t(){var t=e.createBufferSource();t.buffer=window.soundChoice.buffer;var a=e.createGain();a.gain.value=window.gameSounds.volume,t.connect(a).connect(e.destination),t.start(0)}t()};function S(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var I=function(e){var t=document.getElementById("screen"),a=document.createElement("canvas");a.id="canvas",a.width=innerWidth,a.height=innerHeight,t.appendChild(a);var o=document.createElement("h3");o.id="quit-button",o.textContent="QUIT",t.appendChild(o),window.ctx=a.getContext("2d"),window.gameData={health:25,healthRecovering:!1,streak:0,wpm:"endless"===e?20:e,typedString:"",traveledString:"",attemptedString:"",soundFX:window.soundChoice.str,canvasWidth:a.width,canvasHeight:a.height,pressedKeys:{a:!1,b:!1,c:!1,d:!1,e:!1,f:!1,g:!1,h:!1,i:!1,j:!1,k:!1,l:!1,m:!1,n:!1,o:!1,p:!1,q:!1,r:!1,s:!1,t:!1,u:!1,v:!1,w:!1,x:!1,y:!1,z:!1,",":!1,".":!1,space:!1},goalPos:{qaz:[.05*a.width,.85*a.height],wsx:[.15*a.width,.85*a.height],edc:[.25*a.width,.85*a.height],rfvbgt:[.35*a.width,.85*a.height],space:[.45*a.width,.85*a.height],yhnmju:[.6*a.width,.85*a.height],"ik,":[.7*a.width,.85*a.height],"ol.":[.8*a.width,.85*a.height],p:[.9*a.width,.85*a.height]},quit:!1,finishTime:"endless"===e?"endless":Date.now()+6e4+8e3},n("add");var i,s,r=[];r.push.apply(r,S(function(){var e=[];for(var t in window.gameData.goalPos){var a="space"===t?["space"]:t.split(""),o=window.gameData.goalPos[t][0],n=window.gameData.goalPos[t][1];e.push(new d(a,o,n))}return e}())),"endless"===e&&(i=setInterval((function(){window.gameData.wpm+=2}),1e4)),function t(){0===window.gameData.health||window.gameData.quit||Date.now()>=window.gameData.finishTime?(clearInterval(i),i=0,clearInterval(D),D=0,cancelAnimationFrame(t),window.gameData.quit||(n("remove"),function(){var e=document.getElementById("screen"),t=document.createElement("div");t.id="results-div";var a=document.createElement("button");a.textContent="Return to Home",a.id="return-home",a.addEventListener("click",(function(){a.remove(),t.remove(),E()})),e.appendChild(a);var o=window.gameData.typedString.length>=window.gameData.attemptedString.length,n=document.createElement("h3");n.textContent="THE RESULTS ARE IN ...",n.style.margin="0.25vh auto",n.style.width="fit-content",t.appendChild(n);var i=document.createElement("h2");i.textContent=o?"YOU PASSED":"YOU FAILED",i.style.color=o?"forestgreen":"indianred",i.style.fontSize="3.3vw",i.style.margin="1vh auto",i.style.marginBottom="2.5vh",i.style.width="fit-content",t.appendChild(i);var s=document.createElement("h3");s.textContent="Trial Speed: ".concat(window.gameData.wpm," WPM"),s.style.color="#333",s.style.margin="1vh auto",s.style.width="fit-content",t.appendChild(s);var r=document.createElement("div");r.id="results-str";for(var d=0,l=0,h=10,w=function(e){var t=window.gameData.attemptedString[e].toUpperCase(),a=window.gameData.typedString[e],o=document.createElement("h4");if(o.textContent=" "===t?"␣":t,o.style.display="inline-block"," "===t&&(o.style.marginLeft="0.35vw",o.style.marginRight="0.35vw"),a&&t===a.toUpperCase()?(o.style.color="forestgreen",l+=1,d=Math.max(d,l)):a?(o.style.color="indianred",l=0):o.style.color="rgba(245,245,245,0.75)",400===e)return o.textContent=". . .",setTimeout((function(){return r.appendChild(o)}),h),"break";setTimeout((function(){return r.appendChild(o)}),h),h+=10},c=0;c<window.gameData.attemptedString.length;c++){if("break"===w(c))break}var u=document.createElement("h3");u.textContent="Longest Streak: ".concat(d),u.style.color="#333",u.style.margin="1vh auto",u.style.width="fit-content",t.appendChild(u);var m=document.createElement("h3");m.textContent="Text:",m.style.color="#333",m.style.margin="1vh auto",m.style.width="fit-content",t.appendChild(m),t.appendChild(r),e.appendChild(t)}())):("endless"===e&&Date.now()-C>9950&&(clearInterval(D),D=setInterval(x,1e3/(5*window.gameData.wpm/60)),C=Date.now()),requestAnimationFrame(t));window.ctx.clearRect(0,0,innerWidth,innerHeight),r.forEach((function(e){e.update()}))}(),"endless"===e?s=l[Math.floor(Math.random()*l.length)]:20===e?s=h[Math.floor(Math.random()*h.length)]:25===e?s=w[Math.floor(Math.random()*w.length)]:30===e?s=c[Math.floor(Math.random()*c.length)]:35===e?s=u[Math.floor(Math.random()*u.length)]:40===e?s=m[Math.floor(Math.random()*m.length)]:45===e?s=g[Math.floor(Math.random()*g.length)]:50===e?s=y[Math.floor(Math.random()*y.length)]:55===e?s=v[Math.floor(Math.random()*v.length)]:60===e&&(s=p[Math.floor(Math.random()*p.length)]),window.gameData.attemptedString=s;var f=s.split("");"endless"===e&&(f=f.concat(f));for(var D,T=1e3/(5*window.gameData.wpm/60),I=T+4e3,K=function(){var e=f.shift();setTimeout((function(){return r.push(new b(e))}),I),setTimeout((function(){return r.push(new k(e))}),I),I+=T};f.length;)K();"no-sound"!==window.gameData.soundFX&&(D=setInterval(x,T));var C=Date.now();!function(e){var t=document.getElementById("screen"),a=document.createElement("h3");a.id="countdown-hide",a.textContent="3";var o=document.createElement("h3");o.id="countdown-hide",o.textContent="2";var n=document.createElement("h3");n.id="countdown-hide",n.textContent="1";var i=document.createElement("h3");i.id="countdown-hide",i.textContent="Type!",t.appendChild(a),t.appendChild(o),t.appendChild(n),t.appendChild(i),setTimeout((function(){a.id="countdown-show"}),e),setTimeout((function(){a.remove(),o.id="countdown-show"}),2*e),setTimeout((function(){o.remove(),n.id="countdown-show"}),3*e),setTimeout((function(){n.remove(),i.id="countdown-show"}),4*e),setTimeout((function(){i.remove()}),5*e)}(T)},E=function(){var e=document.getElementById("screen"),t=document.createElement("div");t.id="trials-div",e.appendChild(t);for(var a=20;a<=60;a+=5){var o=document.createElement("h2");o.textContent="".concat(a," WPM"),o.classList.add("trials");var n=60+3*a,i=275-3*a;if(o.style.backgroundColor="rgba(".concat(n,", ").concat(i,", 0, 0.55)"),o.addEventListener("click",r(a)),t.appendChild(o),60===a){var s=document.createElement("h2");s.textContent="Endless Mode",s.classList.add("trials"),s.style.backgroundColor="rgba(255, 0, 0, 0.65)",s.style.width="95%",s.style.fontSize="2.8vw",s.addEventListener("click",r("endless")),t.appendChild(s)}}function r(e){return function(){var t=document.getElementById("trials-div");t&&t.remove(),I(e)}}},K=function(e){var t=e.target.value;t&&(window.soundChoice={str:t,buffer:window.gameSounds[t]},x())};window.addEventListener("DOMContentLoaded",(function(){document.getElementById("placement").addEventListener("click",o),function(){var e={click:"./src/media/sounds/click.mp3",hihat:"./src/media/sounds/hihat.mp3",bass:"./src/media/sounds/bass.mp3",water:"./src/media/sounds/water.mp3"};for(var t in window.gameSounds={},e)a(t,e[t]);function a(e,t){var a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="arraybuffer";var o=new(window.AudioContext||window.webkitAudioContext);a.onload=function(){o.decodeAudioData(a.response,(function(t){window.gameSounds.volume=2,window.gameSounds[e]=t,window.soundChoice={str:"click",buffer:window.gameSounds.click}}))},a.send()}}(),document.getElementById("switch").addEventListener("click",K),document.querySelector("#vol-bar").addEventListener("input",(function(){window.gameSounds.volume=this.value})),E()}))}]);
//# sourceMappingURL=main.js.map