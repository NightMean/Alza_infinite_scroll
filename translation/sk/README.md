# Alza - Nekonečné načítavanie (Auto-Pagination)

Použivateľský skript pre Alzu, ktorý umožňuje nekonečné načítavanie. Automaticky načíta ďalšiu stránku produktov, keď sa posúvate nadol, čím eliminuje potrebu klikať na "Ďalšie".

## Funkcie

-   **Plynulé nekonečné rolovanie**: Automaticky klikne na tlačidlo "Ďalšie", keď dosiahnete koniec zoznamu.
-   **Podpora viacerých regiónov**: Plne kompatibilné so všetkými doménami Alza.

## Podporované stránky

-   **Alza.sk** (Slovensko)
-   **Alza.cz** (Česko)
-   **Alza.de** (Nemecko)
-   **Alza.at** (Rakúsko)
-   **Alza.hu** (Maďarsko)

## Inštalácia

1.  Uistite sa, že máte nainštalovaného správcu skriptov:
    -   [Tampermonkey](https://www.tampermonkey.net/) (Odporúčané)
    -   [Violentmonkey](https://violentmonkey.github.io/)
    -   [Greasemonkey](https://www.greasespot.net/)

2.  Kliknite **[Inštalovať tu](https://raw.githubusercontent.com/NightMean/Alza_infinite_scroll/main/alza_autopager.user.js)**
3.  Potvrďte inštaláciu vo vašom správcovi.
4.  Užite si nekonečné rolovanie na Alze!

## Ako to funguje

Skript využíva moderné API `IntersectionObserver` na efektívne zistenie, kedy sa tlačidlo "Ďalšie" objaví na obrazovke. Automaticky naň klikne, keď sa priblížite ku koncu stránky, čím zabezpečí plynulý zážitok bez spomaľovania prehliadača.

## Príspevky
Ak ma chcete podporiť, môžete použiť odkaz nižšie:

<a href="https://www.buymeacoffee.com/nightmean" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="width: 200px !important;" ></a>

## Licencia

Tento projekt je licencovaný pod licenciou **MIT**.