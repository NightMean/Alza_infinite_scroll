<br/>

<p align="center">
Readme in <a href="translation/sk/README.md"><strong>Slovak language</strong></a>
</p>

# Alza - Infinite Scroll (Auto-Pagination)

A userscript for Alza that enables infinite scrolling. It automatically loads the next page of products as you scroll down, removing the need to click "Load more".

## Features

-   **Seamless Infinite Scroll**: Automatically clicks the "Load more" (*Ďalšie*, *Načíst další*, etc.) button when you reach the bottom of the list.
-   **Multi-Region Support**: Fully compatible with all active Alza domains.

## Supported Websites

-   **Alza.sk** (Slovakia)
-   **Alza.cz** (Czech Republic)
-   **Alza.de** (Germany)
-   **Alza.at** (Austria)
-   **Alza.hu** (Hungary)

## Installation

1.  Make sure you have a UserScript manager installed:

    -   [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    -   [Violentmonkey](https://violentmonkey.github.io/)
    -   [Greasemonkey](https://www.greasespot.net/)

2.  Click **[Install here](https://raw.githubusercontent.com/NightMean/Alza_infinite_scroll/main/alza_autopager.user.js)**
3.  Confirm the installation in your Userscript manager.
4.  Enjoy infinite scrolling on Alza!

## How it Works

The script uses the modern `IntersectionObserver` API to efficiently detect when the "Load more" button enters the viewport. It automatically clicks the button when you scroll near the bottom, ensuring a smooth experience without wasting system resources or slowing down your browser.

## Donations
To support me you can use link below:

<a href="https://www.buymeacoffee.com/nightmean" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 200px !important;" ></a>

## License

This project is licensed under the **MIT** License.