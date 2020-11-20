Final Project (in progress...)

Screen time reports let us know how much time we spend online (on our phones). But what does your screen time look like quantified and visualized in different ways?

For this project I am going to create a browser extension that tracks scrolling depth as you scroll through arbitrary content on the internet designated amount of time (2 min?) and are notified when time is up.
How far down you scrolled on the page is recorded (in pixels), which is then calculated along with your personal screen time report (input? tbd) to provide how “far” you scroll in a week/day). This data is reported along with some visualization (ex: an image/gif of a person running alongside the number of feet or miles scrolled) to connect it to the physical world.

Inspiration for this extension:
- Compulsive need for a steady stream of new content at our fingertips
- Content addiction sustained throughout the day in small doses
- Should this be considered “wasted time” or not? Procrastination or productive?
- Our online engagement because of emotional responses and algorithmically targeted content, but often just boredom.
- “Your captive attention is worth billions to them in advertising and subscription revenue” (Ian Bogost, This Is How Your Fear and Outrage Are Being Sold for Profit)

The general structure:

  1. Introductory popup/modal when you initialize the extension.
  2. Measuring page scrolling with a notification once time is up
    a. How I plan to measure page scrolling:
      https://scrolldepth.parsnip.io/
    b.
  3. Results/display page
