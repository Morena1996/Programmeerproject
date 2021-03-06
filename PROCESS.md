

# dag 1

Vandaag heb ik aan mijn *project proposal* gewerkt en deze ingeleverd. 

# dag 2

Vandaag heb ik mijn data gevonden op www.cbs.nl. Ik heb de data gedownload in CSV format en opgeschoond. Hierna heb ik een functie geschreven om de data van CSV naar JSON te converteren en de data geconverteerd naar JSON format.


# day 3

Toen vandaag de data volledig bruikbaar was, kon ik beginnen met het eerste figuur: de staafdiagram. Ik heb de code geschreven voor een staafdiagram die data gebruikt voor slechts een provincie en slechts een jaar en moet nog uitvinden hoe ik de staafdiagram zo programmeer dat de gebruiker kan kiezen tussen het weergeven van data uit 2010 of data uit 2015 en een provincie kan selecteren. Hier wil ik morgen hulp over vragen.

Een ander probleem waar ik tegenaan liep was dat mijn browser mijn data niet helemaal goed wilde laden. Nadat ik een medewerker had gevraagd om hulp, vonden we een klein detail in mijn JavaScript bestand dat de error veroorzaakte. Dit was snel opgelost.

# dag 4

Vandaag ben ik ziek thuis gebleven.

# dag 5

Vandaag heb ik de tweede visualisatie gemaakt: de *gauge*. Ik had problemen met het positioneren van de *gauge*, maar daarnaast was het vrij snel gedaan met behulp van dit voorbeeld: http://bl.ocks.org/brattonc/5e5ce9beee483220e2f6. Ik heb ook geprobeerd kleine dingetjes aan de staafdiagram te verbeteren, zoals dat niet alle cijfers te zien waren als je over de staven *hovert* met je muis. Dit is helaas nog niet helemaal gelukt.


# dag 6

Vandaag was mijn plan om de derde visualisatie te maken: de kaart. Door de enorme chaos op Science Park (het dak is eraf geblazen) en ik geen vragen heb kunnen stellen de hele dag, heb ik vandaag niet alles kunnen af krijgen wat ik wilde. Ik vond het ook moeilijk te bedenken waar te beginnen, aangezien ik nooit een visualisatie met een kaart heb gemaakt. Google hielp me niet heel erg met dit onderwerp en ik hoopte dat iemand van de staff me kon helpen met starten. Iets anders dat ik vandaag had willen vragen is hoe ik de staafdiagram en *gauge* het beste in een HTML kan zetten, want daar ging steeds iets niet goed mee. Dit zal ik tot maandag moeten uitstellen.



# dag 7

Vandaag voelde ik me nog steeds niet goed, maar ik moest de tijd inhalen die ik ben verloren vorige week en tevens komt de deadline van vrijdag steeds dichterbij. Mijn plan voor vandaag is om alles in een HTML bestand te krijgen en te beginnen aan de kaart van Nederland. 

Ik ben vandaag tegen een vervelend probleem aangelopen: de reden dat op dag 6 mijn webpagina het niet deed als ik beide figuren in een HTML zette, is dat ik voor de *gauge* versie v3 gebruik van D3 en voor de staafdiagram versie v4... Ik zal dus de code van de staafdiagram zó moeten wijzigen, dat ik hierbij ook versie 3 kan gebruiken. Ik heb een staff lid gevraagd of ik twee verschillende versies van d3 in een html kan gebruiken en zij vertelde mij dat dit eigenlijk niet kan. Dus ik heb wat functies in de JavaScript code van de staafdiagram gewijzigd zodat het wel werkt. 

Vervolgens kwam ik nog een probleem tegen: mijn data voor de kaart van Nederland (de gemiddelde frequentie van kerkbezoeken per provincie) is niet bruikbaar! De verschillen tussen de provincies zijn wat deze dataset betreft zo klein, dat het helemaal geen zin heeft om dit op deze manier weer te geven. Alle provincies zouden alsnog dezelfde kleur krijgen op de kaart... Dus moest ik iets wijzigen in het ontwerp. Ik heb het gefikst door data te gebruiken over de verschillende religies per provincie. Nu zal de kaart het percentage inwoners per provincie aangeven dat zichzelf tot een kerkelijke gezindte rekent. De staafdiagram zal nu de data weergeven over de frequentie in kerkbezoeken.

Ik heb ook een svg kaart gevonden voor Nederland, maar ik ben nog bezig om deze bruikbaar te maken voor mijn webpagina.


# dag 8

Vandaag kwam ik erachter dat de SVG kaart die ik gisteren toch niet bruikbaar is voor mijn probleem. Dus ik ben weer een poos verder gaan zoeken voor een andere, maar vond alleen bruikbare die geld kostten. Ik heb de staff om hulp gevraagd en werd verwezen naar www.datamap.github.io.

Ik kwam er ook achter dat mijn browser mijn script niet goed wilde laden, omdat het laadde wat nog in de cache zat. Ik kwam erachter hoe *hard refresh* werkt en toen was dit ook snel opgelost.

Ik ben ook verder gegaan met mijn staafdiagram veranderen van v3 naar v4, wat toch meer werk bleek te zijn omdat ik steeds errors bleef krijgen. Dit is nu gelukt.


# dag 9 

Vandaag heb ik geprobeerd de * incomplete alpha version *  van mijn project af te krijgen. De interactie is helaas nog niet gelukt. Wel is alle data geprepareerd en zijn twee van de drie visualisaties af. Ik probeerde de interactie te fiksen, maar kwam erachter dat ik beter eerst had kunnen beginnen met de kaart, want als de gebruiker op de kaart klikt worden pas de barchart en de *gauge* weergegeven... 


# dag 10
Vandaag heb ik me ingelezen in TopoJSON en gekeken of dit een optie was om de kaart van Nederland mee te vormen. Ik heb de afgelopen weken flink wat lopen af googlen voor deze kaart en ook de staff vragen gesteld, maar steeds was er wel weer iets anders waarom de gevonden kaart niet bruikbaar was. TopoJSON leek me een goede optie, omdat ik in het TopoJSON bestand, dat de paden bevat om de provincies te tekenen, ook heel makkelijk zelf data kan toevoegen als eigenschappen per provincie. 

Vervolgens heb ik geprobeerd een mouseover functie toe te voegen, maar dit ging niet meteen heel gemakkelijk. Ik deed er lang over om erachter te komen hoe ik bepaalde data selecteer uit het TopoJSON bestand om deze te gebruiken voor de mouseover functionaliteit. Ik heb nooit eerder gewerkt met TopoJSON. Uiteindelijk is dit wel gelukt.

# dag 11
Vandaag ben ik ziek naar huis gegaan.

# dag 12

Vandaag ben ik verder gegaan met de opmaak en de positionering van mijn web pagina. 

# dag 13
Vandaag ben ik bezig geweest mijn repository op te schonen en heb ik geprobeerd de *drop down* te fiksen voor de staafdiagram te maken. In deze *drop down* kan de gebruiker het jaar selecteren waarvan data wordt weergegeven (2010 of 2015). Dit lukte, maar in de HTML waar de andere visualisaties ook in zitten verdween de *drop down*. Ik heb dit nog niet kunnen oplossen.


# dag 14
Vandaag heb ik niet veel kunnen doen en ben ik ziek naar huis gegaan.


# dag 15

Vandaag ben ik ziek thuisgebleven.

# dag 16

Vandaag ben ik ziek naar huis gegaan.


# dag 17
Vandaag heb ik de tooltip toegevoegd aan de kaart van Nederland. Dit duurde lang, omdat ik veel errors kreeg. Ik heb naar een aantal voorbeelden gekeken op internet, maar toen ik er een geïmplementeerd had kreeg ik het volgende probleem: de tooltip werkte wel voor het html bestand waarin alleen de kaart stond. Maar toen ik de kaart toevoegde aan het html bestand waar ook de bar chart en de gauge in staan, werkte de tooltip ineens niet  meer… Ik kreeg een error over pageX en pageY. Ik heb de html bestanden vergeleken en gekeken of ik iets over het hoofd zag waarom het in het ene wel en in het andere niet werkte, maar kon niks vinden. Ook na veel google werk en een vraag aan de staff kwam ik er niet uit. Uiteindelijk heb ik de gauge en de bar chart toegevoegd aan het html bestand waar de map wel in werkte en ben ik hierin verder gaan werken. 

# dag 18
Vandaag heb ik de data die ik wil weergeven met de kaart van Nederland, aan de kaart gekoppeld. De provincie kleurt nu naar het percentage van de inwoners dat zichzelf in die provincie tot een kerkelijke gezindte rekent. Het duurde lang voordat dit lukte. Eerst had ik de informatie over welke kleuren bij welke kwantielen horen in de css file staan en in JavaScript een functie geschreven die vervolgens elke path op de kaart de juiste kleur geeft. Dit kostte al veel tijd en heb ik met behulp van voorbeelden op internet kunnen fiksen. Iemand van de staff vertelde mij toen dat mijn code er heel erg op vooruit zou gaan als ik het anders zou doen, namelijk als de informatie niet in de css zou staan, omdat dit je code minder herbruikbaar maakt. Dus heb ik het toen zo omgeschreven dat alles in het JavaScript bestand staat. 

# dag 19
Vandaag heb ik de interactiviteit van mijn visualisaties gefikst. Dit heb ik gedaan door de drie functies voor de verschillende visualisaties elkáár te laten aanroepen. Ik heb eerst een functionaliteit toegevoegd waarbij de bar chart wordt weergegeven wanneer de gebruiker op de kaart een provincie selecteert. Het probleem waar ik hierbij op stuitte was dat bij een muisklik de juiste bar chart wel werd weergegeven, maar dat als er op een andere provincie werd geklikt, de oude bar chart bleef staan. Om dit op te lossen heb ik de functie removeBarchart geschreven, die de oude bar chart verwijdert. Dit lukte eerst niet, omdat ik de variabele naam “chart” als argument meegaf (dit werkt niet bij d3.select.remove()). Toen ik de id van het svg element gebruikte, lukte het wel.

# dag 19

Vandaag heb ik mijn verslag geschreven en de README.md gefikst.

&nbsp;

# Extra tijd:
-------------

&nbsp;

# dag 1
Vandaag heb het bestand “ontkerkelijking.js” opgesplitst in allemaal aparte bestanden waarin elk een functie staat. Ik heb een main.js aangemaakt waarin alle functies worden aangeroepen. Ik weet nog niet precies wat er wel en wat er niet in de main.js moet staan, dus dat was iets waar ik tegenaan liep. Ik heb hier een beetje mee lopen worstelen en besloot uiteindelijk om vrijdag maar aan Gosia te vragen wat er precies in de main.js moet staan.

# dag 2
Vandaag heb ik de data zo aangepast zodat deze ook nog geschikt is voor de visualisatie als er een checkbox wordt toegevoegd. Daarna ben ik gaan zoeken naar een voorbeeld voor een check box. Ik vond dit voorbeeld: https://bl.ocks.org/Lulkafe/c77a36d5efb603e788b03eb749a4a714. Waar ik bij het implementeren van de check box tegenaan liep was dat de twee check boxes allebei worden gemaakt door twee keer, apart van elkaar, de functie checkbox aan te roepen. Dit betekent dat de check boxes (2010 en 2015) op geen enkele manier gelinkt zijn. Dit was nodig omdat ik probeerde te programmeren dat als ik de ene check box aan klik, bij de andere het vinkje verdwijnt.

# dag 3
Vandaag heb ik nog een hele tijd aan de check boxes geprobeerd te werken. Ik heb het probleem van gisteren opgelost. Eerst leek het onoplosbaar met de code die ik nu had en dus zocht ik opnieuw naar een voorbeeld van een d3 checkbox op internet, maar ik vond niets dat paste bij mijn probleem. Uiteindelijk heb ik het probleem opgelost door het hele svg element te verwijderen als de gebruiker op de andere checkbox klinkt dan die die is aangevinkt en opnieuw het svg element te laden. Dit leek op dit moment de enige oplossing. 
Toen liep ik tegen het volgende probleem aan: als de ene checkbox was aangevinkt en de gebruiker klikt op de andere checkbox, dan moet de kaart opnieuw weergegeven worden, maar dan met andere data. Dus ik probeerde in code op te schrijven dat het svg element van de kaart bij een klik op 2015 geleegd moet worden en weer opnieuw de functie om de map te laden aan te roepen, maar dan met andere data, namelijk van 2015. Dit lukte heel lang niet, omdat de map niet opnieuw kon laden als ik het svg element (de div in de html) had verwijderd. Dus heb ik van alles geprobeerd om dit probleem op te lossen. Uiteindelijk deed ie het, maar dan werd de kaart op een andere plek geladen. Dit is uiteindelijk ook na een hoop gepriegel gefikst. De check box werkt! Yes!

Ook heb ik een voorbeeld gevonden voor de drop down voor de gauge: http://bl.ocks.org/jfreels/6734823

# dag 4
Vandaag heb ik geprobeerd de drop down te implementeren. Ik kwam een aantal problemen tegen, zoals dat hij de data voor de gauge niet goed laadde nadat de gebruiker op de drop down heeft geklikt. Dit probleem bleek voort te komen uit het feit dat de functie loadMap twee keer werd aangeroepen, een keer met de goede data en een keer met oude data waarin de nieuwe data voor de dropdown nog niet stond. Dit heb ik opgelost door een functie (loadDropdown)  te schrijven die de switch regelt door o.a. de twee verschillende datavelden, die het als argumenten mee krijgt, om te draaien en hiermee zichzelf opnieuw aan te roepen.

# dag 5
Vandaag heb ik een legenda toegevoegd aan de kaart en heb ik de tooltip van de bar chart veranderd zodat deze er hetzelfde uitziet als die van de kaart. Bij het toevoegen van de legenda had ik problemen met het positioneren hiervan, maar dit is uiteindelijk gelukt. Verder heb ik me beziggehouden met het opschonen van de code en de opmaak van de pagina.

# dag 6
Vandaag heb ik de laatste puntjes op de i gezet en het filmpje en verslag (af)gemaakt.




