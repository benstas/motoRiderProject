function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".gallery2" + shadowSelector + "{width: 90vw;display: flex;overflow-x: scroll;padding: 20px;}.eventRow2" + shadowSelector + "{width: 100%;display: grid;grid-template-columns: auto auto auto;grid-gap: 40px;padding: 10px;flex: none;}.eventCard2" + shadowSelector + "{height: 25rem;width: 25rem;filter: contrast(80%);transition: transform 0.5s;border-radius: 360px;text-align: center;justify-content: center;}.gallery2" + shadowSelector + " div" + shadowSelector + " img" + shadowSelector + "{width: 100%;height: 100%;object-fit: cover;border-radius: 360px;}.gallery2" + shadowSelector + "::-webkit-scrollbar{display: none;}.wrap2" + shadowSelector + "{display: flex;align-items: center;justify-content: center;margin: 10% auto;}.eventCard2:hover" + shadowSelector + "{filter: contrast(100%);cursor: pointer;transform: scale(1.1);z-index: 1;text-align: center;}.back2" + shadowSelector + "{width: 50px;cursor:pointer;margin: 40px;filter: invert(1);}.forward2" + shadowSelector + "{width: 50px;cursor:pointer;margin: 40px;transform: rotate(180deg);filter: invert(1);}@media (max-width:770px) {.back2" + shadowSelector + "{display: none;}.forward2" + shadowSelector + "{display: none;}.eventCard2" + shadowSelector + "{height: 15rem;width: 15rem;filter: contrast(80%);transition: transform 0.5s;border-radius: 360px;text-align: center;justify-content: center;}.gallery2" + shadowSelector + "{width: 90vw;overflow-x: scroll;padding: 20px;}.eventRow2" + shadowSelector + "{width: 200%;display: grid;grid-template-columns: auto auto auto;grid-gap: 20px;padding: 20px;flex: none;}}.instructor" + shadowSelector + "{background-color: rgb(17, 13, 54);height: 100vh;width: 100vw;display: flex;}.eventCard2" + shadowSelector + " h2" + shadowSelector + "{bottom: 50%;position: relative;color: white;font-size: 3.1rem;}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];