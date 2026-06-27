import wixWindow from 'wix-window';

const BOX29_SELECTOR = "#box29";
const SIDE_PADDING = 10;

$w.onReady(function () {
    // Run once on load
    resizeBox29();
    
    // Listen for browser window resizing
    wixWindow.onResize(() => {
        resizeBox29();
    });
});

function resizeBox29() {
    wixWindow.getBoundingRect()
        .then((windowInfo) => {
            // windowInfo.window.width gives the actual browser viewport width
            const viewportWidth = windowInfo.window.width;
            const newWidth = Math.max(0, viewportWidth - (SIDE_PADDING * 2));

            // Set positions and dimensions dynamically
            $w(BOX29_SELECTOR).x = SIDE_PADDING;
            $w(BOX29_SELECTOR).changeSize(newWidth, $w(BOX29_SELECTOR).height);
        })
        .catch((err) => {
            console.error("Failed to fetch window bounds:", err);
        });
}