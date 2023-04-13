




// Run js on the remove page to enable / disable toggles
const toggleResize = () => {
    document.documentElement.classList.add("resizeHandle");
}


 // document.addEventListener("onOverlayStateUpdate", function (e) {
 //            if (!e.detail.isLocked) {
 //                displayResizeHandle();
 //            } else {
 //                hideResizeHandle();
 //            }
 //        });
// Send and overlay state update!

const unlockEvent = new CustomEvent("onOverlayStateUpdate", { detail: { isLocked: false } });
document.dispatchEvent(unlockEvent)
