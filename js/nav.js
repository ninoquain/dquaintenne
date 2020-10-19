

function getDeviceType() {
    let deviceType;
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      deviceType = "tablette";
      //return "tablet";
    } else if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
       deviceType = "mobile";
      //return "mobile";
    } else {
      deviceType = "desktop";
      //return "desktop";
    }
     return deviceType;
  }
  //console.log(getDeviceType());

function createNav() {

  const divLargeDevice = document.getElementById('largeScreen');
  const divSmallDevice = document.getElementById('smallScreen');
        
  if (getDeviceType() == "mobile") {

    divLargeDevice.style.visibility = "hidden";

    
    
    
      
  } else if ((getDeviceType() == "desktop") || (getDeviceType() == "tablette")) {
    divSmallDevice.style.visibility = "hidden"; 
    
    
  }
}

