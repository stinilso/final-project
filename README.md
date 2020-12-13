***The Scroll Calculator***


The Scroll Calculator is a Google Chrome extension that tracks and reports users' scrolled distance over a finite period of time. The extension is initiated when users click the "Calculate my scroll!" button at the bottom of their screen, and their results are displayed at the end of a five minute timer. The goal of this extension is to demonstrate to users how much they are scrolling when they are browsing the internet, and connect this virtual distance (pixels) to a more familiar physical distance (feet).

The inspiration for this project came from what we learned and discussed in DIG 245 about how engrossing the internet is because of the vast, varied, and altogether endless amount of content there is; and it's largely curated to enthrall users personally. Online engagement can be addictive because of our psychological and emotional responses as well as algorithmically targeted content, but often boredom is the cause for compulsive content yearning. By using the scroll calculator, users can see how 'far' they go on their favorite web pages. The results modal window prompts them to question how far they might scroll in a week and imagine how much content they must take in. This is not meant to critique whether this time is wasted or productive, but rather a tool to help users be more  mindful of their internet use.

This extension was built using the JavaScript library jQuery, and includes a manifest file, a content script, the popup’s HTML and CSS pages, and some other supporting files. For the final pixels-to-feet calculation I used the unit conversion estimate from https://www.justintools.com/unit-conversion/length.php?k1=pixels&k2=feet. This extension was coded in Atom and is currently published on Github.



To use this extension:

- Click on the green "Code" button near the top of this page and download the ZIP file for this repository.
- Unzip the file.
- Go to chrome://extensions, the chrome extension manager page (you can also get there by clicking the puzzle piece icon in the upper right corner of the browser and then clicking "Manage Extensions").
- Click the toggle switch in the upper right to enable Developer Mode.
- Click the "Load Unpacked" button.
- Select the entire unzipped folder containing this extension.
- Click the puzzle piece icon in the upper right corner of the browser, and pin *The Scroll Calculator* to the extensions bar. The icon for this extension should now be visible, and directions will appear when clicked.
- Refresh any tab/window or open a new one for the extension's button to be visible.
- Click the button to begin!
