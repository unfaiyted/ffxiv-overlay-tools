
export const getCoord = (string: string) => {
    return string.split("|").map((item) => parseInt(item));
}

export const encodeCoords = (array: Array<number>) => {
    return array.join("|");
}

export const generateGuid = () => {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


// export const updateConfig = (overlays: Array<OverlayConfig>) => {
//     const CONFIG_PATH = "./overlays.conig.json";
//      const file = fs.readFileSync(CONFIG_PATH, 'utf8');
//
//     const json = JSON.parse(file);
//
//     json.overlays = overlays;
//
//     const string = JSON.stringify(json)
//
//     const fs.writeFileSync(CONFIG_PATH, string);
// }