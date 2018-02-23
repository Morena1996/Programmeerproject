# Verslag

Introductie
-----------
Ik heb een datavisualisatie gemaakt die een aantal zaken met betrekking tot de ontkerkelijking van Nederland weergeeft. Deze datavisualisatie kan helderheid omtrent dit onderwerp bieden voor 
o.a. parochies, lagere overheden en mensen die, net als ik, geïnteresseerd zijn in dit onderwerp. Voor dit project heb ik data gebruikt van het Centraal Bureau voor de Statistiek.



Technisch ontwerp
-----------------
De webpagina bestaat uit een kaart van Nederland met daarop zichtbaar, per provincie, welk percentage inwoners zichzelf tot een kerkelijke gezindte rekent. De gebruiker kan op de kaart een provincie selecteren door hierop te klikken. Vervolgens verschijnen nog twee visualisaties die andere informatie over de geselecteerde provincie bevatten:  een staafdiagram die weergeeft hoe de frequentie in kerkbezoek is verdeeld onder de inwoners en een meter (gauge) die weergeeft welk percentage van de inwoners gehuwd is óf welk percentage van de huishoudens in de provincie uit eenoudergezinnen bestaat (afhankelijk van welke data door de gebruiker is geselecteerd in een dropdown).

De code bestaat uit de volgende bestanden:

* index.html:
	Dit bestand bevat de HTML-code die de indeling van de web pagina bepaalt. Hierin zijn de volgende bestandsnamen te vinden:
	* ontkerkelijking.css: 
		Dit bestand bevat de CSS-code die de opmaak van de web pagina bepaalt.

	* main.js:
	Dit bestand bevat de JavaScript code die de functie *loadCheckbox* aanroept. *loadCheckbox* roept de volgende functies aan:
		*	functie *loadMap* uit het bestand map.js:
		      Deze functie bevat de code om de kaart van Nederland te vormen. Met behulp van TopoJSON data wordt de kaart weergegeven en vervolgens wordt de kaart gekleurd naar de data in het TopoJSON bestand, over het percentage inwoners dat zichzelf tot een kerkelijke gezindte rekent. Wanneer een gebruiker op een provincie klikt, roept deze functie de functies *removeBarchart*, *removeGauge*, *loadBarchart* en *loadGauge* aan. 
		*	functie *loadBarchart* uit het bestand barchart.js: 
			  Deze functie bevat de code om de staafdiagram te vormen met behulp van JSON data en SVG.
		*	functie *loadGauge* uit het bestand gauge.js:
			  Deze functie gebruikt hetzelde TopoJSON bestand als de functie *loadMap*, maar een ander aspect van de data (*married10*).
		*	functie *removeBarchart* uit het bestand remove.js:
			  Deze functie verwijdert de staafdiagram. Deze wordt aangeroepen in *loadMap* wanneer de gebruiker een andere provincie selecteert.
		*	functie *removeGauge* uit het bestand remove.js:
			  Deze functie verwijdert de meter (*gauge*). Deze wordt ook aangeroepen in *loadMap* wanneer de gebruiker een andere provincie selecteert.
		* 	functie *makeTitle*:
			  Deze functie voegt dynamisch de titels voor de gauge en de bar chart toe aan de HTML en wordt aangeroepen wanneer een gebruiker een provincie selecteert.
		*	functie *removeTitle* uit remove.js:
			  Deze functie verwijdert bovengenoemde titels weer als er een andere provincie wordt geselecteerd.	


Het proces
----------
Ik heb van dit vak het meest geleerd van alle vakken dan de minor. Omdat ik zelfstandig een heel project van begin tot eind moest bouwen, ben ik tegen veel dingen aangelopen die ik nu anders zou doen. Een voorbeeld hiervan is de data die ik wilde gebruiken voor de kaart van Nederland, zoals beschreven op dag 7 van mijn *process book*. Gelukkig was het relatief makkelijk en snel oplosbaar, maar in de toekomst zal ik daar nu natuurlijk eerder over nadenken. D
Het andere probleem op dag 7, de verschillende versies van D3 voor de staafdiagram en de *gauge*, zal ik natuurlijk in de toekomst ook niet meer tegenkomen.

Ook heb ik het mezelf extra moeilijk gemaakt door te lang in verschillende HTML bestanden te werken. Omdat ik de verschillende bestanden pas laat samenvoegde, kwamen er toen allerlei nieuwe problemen, zoals dat de *drop down* van de staafdiagram en de *mouse over* functionaliteit van de kaart ineens niet meer werkten in deze bestanden. Hier heb ik dus ook van geleerd dat je beter niet in verschillende bestanden kunt blijven werken, maar beter meteen kan testen hoe het samen werkt.

Iets anders waar ik tegenaan liep was het maken van de kaart van Nederland. Ik had geen idee waar ik moest beginnen en pas toen ik me flink had verdiept in TopoJSON lukte dit eindelijk. Hier heb ik ook veel van geleerd. 


Beslissingen en terugblik:
-------------------------
Als je kijkt naar hoe mijn prototype eruit ziet (afbeelding "programmeerproject.png" in de map "docs") en hoe het eindresultaat is, dan zijn er een aantal verschillen. Een van die verschillen is dat ik de data die ik zou gebruiken voor de kaart van Nederland en de data die ik zou gebruiken voor de staafdiagram met elkaar heb omgewisseld, omdat ik tegen een probleem aanliep (zie "Het proces"). Ik denk dat het ten goede is gekomen van de visualisatie dat ik dat op deze manier heb gewijzigd, omdat mijn visualisatie op deze manier een stuk beter en duidelijker de dataset kan weergeven. Ook heb ik de tabel weggelaten, omdat ik gedurdende het process van het bouwen van dit project me steeds meer begon te realizerend dat ik de tabel niet bij mijn pagina vond passen. Ik vind dat ik, door een tabel toe te voegen die alle data overzichtelijk weergeeft, mijn doel voorbijschiet. Dat doel is namelijk de data weer te geven aan de hand van verschillende visualisaties waar de gebruiker "doorheen kan klikken". 

Ik ben tevreden met het eindresultaat, maar het kan natuurlijk altijd beter. Dingen die eventueel nog verbeterd zouden kunnen worden zijn bijvoorbeeld de code. Deze kan naar mijn idee nog efficiënter en meer zó dat het nog makkelijker herbruikbaar is. Wel heb ik hierin al enorme stappen gezet voor mezelf tijdens dit project en dit was erg leuk om te leren en je ook mee bezig te houden. Daarnaast geeft de console nog een paar errors waarvan ik geen idee heb waar ze vandaan komen en wat ze betekenen, ook Google maakte me hier niet veel wijzer in. Dit zou dus ook nog opgelost kunnen worden in de toekomst. Andere dingen die nog zouden kunnen worden verbeterd zijn de uitleg voor de gebruiker (een tekstvak dat omhoog "popt" met uitgebreidere uitleg van de data bijvoorbeeld) en de verschillende perioden. Het zou achteraf interessanter zijn geweest om twee jaren te hebben gekozen waar meer tijd tussen zit. Ook zou er nog iets kunnen worden gedaan met de zoom, dat de webpagina ook handig weergegeven wordt als de gebruiker een andere grootte scherm gebruikt of een andere zoom heeft ingesteld.




