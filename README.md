# Ontkerkelijking in Nederland

GitHub Pages:  https://morena1996.github.io/Programmeerproject/

Product demo: https://youtu.be/IOfk0inRnvA
------------
Probleemstelling
----------------

"(...), de ontkerkelijking zet in een razend tempo door, (...)", is op 27 juni 2017 te lezen in Trouw. Hoe zit het met de ontkerkelijking van Nederland en wat is het verband tussen kerkbezoek en de kerkelijke gezindten waartoe men zichzelf rekent? Ik heb een datavisualisatie gemaakt die deze zaken laat zien. Deze datavisualisatie kan helderheid omtrent dit onderwerp bieden voor o.a. parochies, lagere overheden en mensen die, net als ik, geïnteresseerd zijn in dit onderwerp. 

Oplossing
---------

Door middel van o.a. een kaart van Nederland met daarop zichtbaar het aantal kerkgangers per provincie, gelinkt aan een *bar chart* met de kerkelijke gezindte van de op de kaart geselecteerde provincie, wilde ik antwoord geven op bovenstaand vraagstuk. Echter heb ik halverwege het project besloten om de data voor de *bar chart* en de kaart om te wisselen (zie verslag). De derde *linked view* bestaat uit een *liquid fill gauge* (zoals deze: http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6) (was voorheen een *pie chart* in dit bestand, maar dit lijkt me leuker en uitdagender, dus heb het aangepast) waarin het percentage gehuwden per provincie wordt weergegeven.

Hieronder zie je een schermafbeelding van de pagina. 

![](docs/programmeerproject2.png)
![](docs/programmeerproject3.png)



Randvoorwaarden
---------------
Voor mijn project gebruik ik louter data van het Centraal Bureau voor de Statistiek, die te vinden zijn op www.cbs.nl. De data download ik hiervandaan in CSV format en zal ik met behulp van een zelfgeschreven functie converteren naar JSON format. Met deze laatste heb ik veel gewerkt tijdens Data Processing en daarom vind ik dit een prettig format om ook nu te gebruiken. 

Lijst van de *external components* waar ik gebruik van maak:
* D3.js (http://d3js.org/d3.v3.min.js)
* d3-tip (http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js)






 