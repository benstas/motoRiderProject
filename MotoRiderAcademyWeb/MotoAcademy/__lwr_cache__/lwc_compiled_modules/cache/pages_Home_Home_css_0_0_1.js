function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return [".site", shadowSelector, " {overflow-x: hidden;background-color: white;}header", shadowSelector, "{width: 100vw;height: 11vh;background-color: black;color: rgb(255, 255, 255);font-weight: 400;font-size: 20px;z-index: 1;filter: grayscale(100%);}.slds-hide", shadowSelector, " {display: none;}.navbutton", shadowSelector, " a", shadowSelector, "{text-decoration: none !important;color: white;}.slds-show", shadowSelector, " {display: block;}.coursesMenu", shadowSelector, "{position: absolute;z-index: 1;font-size: 1rem;left: 11rem;top: 11vh;width: 10rem;}.coursesMenu", shadowSelector, " li", shadowSelector, "{background-color: aqua;}.slds-show", shadowSelector, " ul", shadowSelector, " {list-style: none;padding: 0;}.slds-show", shadowSelector, " ul", shadowSelector, " li", shadowSelector, " {padding: 10px;}.slds-show", shadowSelector, " ul", shadowSelector, " li", shadowSelector, " a", shadowSelector, " {text-decoration: none;color: black;}header", shadowSelector, " img", shadowSelector, "{width: 5vw;height: auto;}header", shadowSelector, " .navbutton", shadowSelector, "{height: 4vh;margin-top: 4vh;}header", shadowSelector, " .join", shadowSelector, "{background-color: rgb(180, 107, 17);width: 3vw;text-align: center;border-radius: 8px;}.page1", shadowSelector, " .slide", shadowSelector, "{width: 100vw;}.page2", shadowSelector, " {width: 100vw;color: rgb(115, 115, 115);text-align: center;padding-bottom: 10rem;padding-top: 3rem;background-color: #eeeeee;}.entry", shadowSelector, "{width: 100%;height: 30vh;margin-bottom: 5vh;}.page2", shadowSelector, " h1", shadowSelector, "{font-size: 4rem;padding: 2rem;}.page2", shadowSelector, " h3", shadowSelector, "{font-size: 2rem;padding: 2rem;}.page2", shadowSelector, " p", shadowSelector, "{font-size: 1rem;padding: 1rem;}.row1", shadowSelector, "{display: flex;gap: 1rem;flex-wrap: wrap;padding: 1rem;margin-top: 8rem;color: white;}.card1", shadowSelector, "{background: black;flex-grow: 1;flex-basis: 300px;margin: 1rem;border-radius: 12px;position: relative;transition: margin-top 1s ease-in-out;height: 70vh;}.middle", shadowSelector, " {margin-top: 5rem;}.card1", shadowSelector, " img", shadowSelector, "{height: 100%;object-fit: cover;border-radius: 12px;}.card1", shadowSelector, " h1", shadowSelector, "{position: relative;bottom: 40%;font-size: 5rem;text-align: center;}.page3", shadowSelector, " {background-image: url('/public/assets/b1.jpg');background-size: cover;filter: grayscale(50%);background-position: 70% 30%;}.row4", shadowSelector, "{display: flex;gap: 0.1rem;flex-wrap: wrap;color: rgb(115, 115, 115);text-align: center;}.card4", shadowSelector, "{flex-grow: 1;flex-basis: 49vw;text-align: center;font-size: 3rem;}.card4", shadowSelector, " img", shadowSelector, "{width: 100%;object-fit: cover;height: 100vh;}.card4", shadowSelector, " p", shadowSelector, "{font-size: 2rem;text-align: justify;color: rgb(159, 157, 157);margin-top: 5rem;padding: 3rem;}.card4", shadowSelector, " h2", shadowSelector, "{font-size: 4rem;color: white;margin: 2rem;text-align: center;}.page4", shadowSelector, "{width: 100vw;height: 200vh;background-image: url('/public/assets/back26.jpg');background-size: cover;background-repeat: no-repeat;color: rgb(96, 93, 93);text-align: center;text-align: center;}.siteevent", shadowSelector, "{height: 90vh;width: 100vw;display: flex;padding-top: 4rem;}.gallery", shadowSelector, "{width: 90vw;display: flex;overflow-x: scroll;padding: 20px;}.eventRow", shadowSelector, "{width: 100%;display: grid;grid-template-columns: auto auto auto;grid-gap: 40px;padding: 10px;flex: none;}.eventCard", shadowSelector, "{background-color: white;color: rgb(115, 115, 115);height: 70vh;filter: grayscale(100%);transition: transform 0.5s;border-radius: 25px;text-align: center;}.eventCard", shadowSelector, " h2", shadowSelector, "{font-size: 2rem;}.eventCard", shadowSelector, " p", shadowSelector, "{font-size: 1.2rem;}.gallery", shadowSelector, " div", shadowSelector, " img", shadowSelector, "{width: 100%;height: 35%;object-fit: cover;border-top-left-radius: 25px;border-top-right-radius: 25px;}.gallery", shadowSelector, "::-webkit-scrollbar{display: none;}.wrap", shadowSelector, "{display: flex;align-items: center;justify-content: center;margin: 10% auto;}.eventCard:hover", shadowSelector, "{filter: grayscale(0);cursor: pointer;transform: scale(1.08);z-index: 1;}.back", shadowSelector, "{width: 50px;cursor:pointer;margin: 40px;filter: invert(1);}.forward", shadowSelector, "{width: 50px;cursor:pointer;margin: 40px;transform: rotate(180deg);filter: invert(1);}@media (max-width:770px) {.gallery", shadowSelector, " div", shadowSelector, "{width: 100vw;display: grid;padding: 10px;flex: none;}.gallery", shadowSelector, " div", shadowSelector, " img", shadowSelector, "{width: 75%;height: 90%;filter: grayscale(100%);transition: transform 0.5s;}}.form", shadowSelector, "{display: flex;flex-wrap: wrap;color: black;}.inputs", shadowSelector, " .inputbox", shadowSelector, "{flex-grow: 1;flex-basis: 45vw;font-size: 1rem;}.callbackcard", shadowSelector, "{margin-top: 10vh;}.inputs", shadowSelector, "{margin-bottom: 7rem;margin-top: 7rem;}.inputbox", shadowSelector, "{padding: 1rem;}.courseButton", shadowSelector, " {height: 7vh;width: 28vw;font-size: 2rem;color: white;}.page4", shadowSelector, " h1", shadowSelector, "{font-size: 4rem;color: aliceblue;margin: 3rem;}.page4", shadowSelector, " p", shadowSelector, "{font-size: 2rem;color: rgb(141, 145, 149);}.leadSendButton", shadowSelector, "{background-color: aliceblue;width: 10rem;height: 4rem;font-size: 2rem;justify-content: center;}.slds-input", shadowSelector, "{height: 4rem;}.page5", shadowSelector, "{background-image: url('/public/assets/y4.jpg');background-size: cover;background-repeat: no-repeat;}.ins", shadowSelector, "{position: relative;}.gallery2", shadowSelector, "{width: 90vw;display: flex;overflow-x: scroll;padding: 20px;}.eventRow2", shadowSelector, "{width: 100%;display: grid;grid-template-columns: auto auto auto;grid-gap: 40px;padding: 10px;flex: none;}.eventCard2", shadowSelector, "{height: 25rem;width: 25rem;filter: contrast(80%);transition: transform 0.5s;border-radius: 360px;text-align: center;justify-content: center;}.gallery2", shadowSelector, " div", shadowSelector, " img", shadowSelector, "{width: 100%;height: 100%;object-fit: cover;border-radius: 360px;}.gallery2", shadowSelector, "::-webkit-scrollbar{display: none;}.wrap2", shadowSelector, "{display: flex;align-items: center;justify-content: center;margin: 10% auto;}.eventCard2:hover", shadowSelector, "{filter: contrast(100%);cursor: pointer;transform: scale(1.1);z-index: 1;text-align: center;}.back2", shadowSelector, "{width: 50px;cursor:pointer;margin: 40px;filter: invert(1);}.forward2", shadowSelector, "{width: 50px;cursor:pointer;margin: 40px;transform: rotate(180deg);filter: invert(1);}@media (max-width:770px) {.back2", shadowSelector, "{display: none;}.forward2", shadowSelector, "{display: none;}.eventCard2", shadowSelector, "{height: 15rem;width: 15rem;filter: contrast(80%);transition: transform 0.5s;border-radius: 360px;text-align: center;justify-content: center;}.gallery2", shadowSelector, "{width: 90vw;overflow-x: scroll;padding: 20px;}.eventRow2", shadowSelector, "{width: 200%;display: grid;grid-template-columns: auto auto auto;grid-gap: 20px;padding: 20px;flex: none;}}.instructor", shadowSelector, "{height: 100vh;width: 100vw;display: flex;}.eventCard2", shadowSelector, " h2", shadowSelector, "{bottom: 50%;position: relative;color: white;font-size: 3.1rem;}.row5", shadowSelector, "{display: flex;gap: 1.1rem;flex-wrap: wrap;color: black;text-align: center;}.card5", shadowSelector, "{flex-grow: 1;flex-basis: 300px;text-align: center;margin: 1rem;font-size: 2rem;background-color: rgb(255, 255, 255);height: 60vh;}.card5", shadowSelector, " img", shadowSelector, "{width: 100%;object-fit: cover;height: 44vh;}.page6", shadowSelector, "{color: white;}.mapArea", shadowSelector, "{width: 100vw;height: 60vh;}.mapArea", shadowSelector, " h1", shadowSelector, "{font-size: 2rem;}.row6", shadowSelector, "{display: flex;flex-wrap: wrap;color: black;text-align: center;height: 100%;}.card6", shadowSelector, "{flex-grow: 1;flex-basis: 300px;text-align: center;font-size: 4rem;background-color: rgb(255, 255, 255);padding-top: 2rem;}.card6", shadowSelector, " img", shadowSelector, "{width: 100%;height: 100%;object-fit: cover;padding: 1rem;}.footer", shadowSelector, "{width: 100vw;height: 35vh;background-color: rgb(5, 21, 35);}.row2", shadowSelector, "{display: flex;gap: 1rem;flex-wrap: wrap;padding-top: 3rem;margin-bottom: 3rem;}.card2", shadowSelector, "{flex-grow: 1;flex-basis: 200px;text-align: center;}.card2", shadowSelector, " img", shadowSelector, "{height: 10vh;object-fit: cover;}"].join('');
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];