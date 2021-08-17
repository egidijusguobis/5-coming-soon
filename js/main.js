import { ProgressBars } from "./components/progress-bar/ProgressBars.js";
import { Socials } from "./components/socials/Socials.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";

new ProgressBars ('.left-column', progressBarData);
new Socials('footer .socials', socialsData);
