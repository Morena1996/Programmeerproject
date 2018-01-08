# Programmeerproject

Probleemstelling
-----------------

"(...), de ontkerkelijking zet in een razend tempo door, (...)", is op 27 juni 2017 te lezen in Trouw. Hoe zit het met de ontkerkelijking van Nederland, is er binnen vijf jaar aanzienlijk veel veranderd, hoe is religie verdeeld over de provincies en wat is het verband tussen kerkbezoek en de kerkelijke gezindten waartoe men zichzelf rekent? Ik wil een datavisualisatie maken die deze zaken laat zien. Deze datavisualisatie kan helderheid omtrent dit onderwerp bieden voor o.a. parochies, lagere overheden en mensen die, net als ik, geïnteresseerd zijn in dit onderwerp. 

Oplossing
--------

Door middel van o.a. een kaart van Nederland met daarop zichtbaar het aantal kerkgangers per provincie, gelinkt aan een *bar chart* met de kerkelijke gezindte van de op de kaart geselecteerde provincie, ga ik antwoord geven op bovenstaand vraagstuk. Verder kan de gebruiker met behulp van een *drop down* het gewenste jaar selecteren en is er op de pagina een tabel te vinden waarin per jaar (2010 of 2015) de informatie over kerkbezoek en kerkelijke gezindte van de gelesecteerde provincie terug te vinden zijn. De derde *linked view* bestaat uit een *pie chart* waarin, afhankelijk van de selectie die de gebruiker maakt met behulp van een *check box*, de verdeling van huishoudens met of zonder kinderen ofwel de verdeling van de burgerlijke staat in de op de kaart selecteerde provincie wordt weergegeven. 

Randvoorwaarden
-------------
Voor mijn project gebruik ik louter data van het Centraal Bureau voor de Statistiek, die te vinden is op www.cbs.nl. De data download ik hiervandaan in CSV format en zal ik met behulp van een zelfgeschreven functie converteren naar JSON format. Met deze laatste heb ik veel gewerkt tijdens Data Processing en daarom vind ik dit een prettig format om ook nu te gebruiken. 

Lijst van de *external components* waar ik gebruik van maak:
* D3.js (http://d3js.org/d3.v3.min.js)
* d3-tip (http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js)
* SVG.js (https://github.com/svgdotjs/svg.js/)
* d3.chart (https://github.com/misoproject/d3.chart)
* d3pie (https://github.com/benkeen/d3pie)
* d3-bar (https://github.com/tj/d3-bar)
 