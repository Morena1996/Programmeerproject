# Verslag

Introductie
-----------
Ik heb een datavisualisatie gemaakt die een aantal zaken met betrekking tot de ontkerkelijking van Nederland weergeeft. Deze datavisualisatie kan helderheid omtrent dit onderwerp bieden voor 
o.a. parochies, lagere overheden en mensen die, net als ik, geïnteresseerd zijn in dit onderwerp. Voor dit project heb ik data gebruikt van het Centraal Bureau voor de Statistiek.



Technisch ontwerp
-----------------
De webpagina bestaat uit een kaart van Nederland met daarop zichtbaar, per provincie, welk percentage inwoners zichzelf tot een kerkelijke gezindte rekent. De gebruiker kan op de kaart een provincie selecteren door hierop te klikken. Vervolgens verschijnen nog twee visualisaties die andere informatie over de geselecteerde provincie bevatten:  een staafdiagram die weergeeft hoe de frequentie in kerkbezoek is verdeeld onder de inwoners en een meter (gauge) die weergeeft welk percentage van de inwoners gehuwd is.

De code bestaat uit de volgende bestanden:

* index.html:
	Dit bestand bevat de HTML-code die de opmaak van bepaalt voor de webpagina en binnen index.html worden twee andere bestanden aangeroepen:
	* ontkerkelijking.css:

	* ontkerkelijking.js:
	Dit bestand bevat de JavaScript code voor de webpagina. De code is ingedeeld in vijf functies:
		*	function *loadMap*:  
		      Deze functie bevat de code om de kaart van Nederland te vormen. Met behulp van TopoJSON data wordt de kaart weergegeven en vervolgens wordt de kaart gekleurd naar de data in het TopoJSON bestand, over het percentage inwoners dat zichzelf tot een kerkelijke gezindte rekent. Wanneer een gebruiker op een provincie klikt, roept deze functie respectievelijk de functies *removeBarchart*, *removeGauge*, *loadBarchart* en *loadGauge* aan. 
		*	function *loadBarchart*:  
			  Deze functie bevat de code om de staafdiagram te vormen met behulp van JSON data en SVG.
		*	function *loadGauge*:  
			  Deze functie gebruikt hetzelde TopoJSON bestand als de functie *loadMap*, maar een ander aspect van de data (*married10*).
		*	function *removeBarchart*:  
			  Deze functie verwijdert de staafdiagram. Deze wordt aangeroepen in *loadMap* wanneer de gebruiker een andere provincie selecteert.
		*	function *removeGauge*:  
			  Deze functie verwijderd de meter (*gauge*). Deze wordt ook aangeroepen in *loadMap* wanneer de gebruiker een andere provincie selecteert.


Het proces
----------
Ik heb van dit vak het meest geleerd van alle vakken dan de minor. Omdat ik zelfstandig een heel project van begin tot eind moest bouwen, ben ik tegen veel dingen aangelopen die ik nu anders zou doen. Een voorbeeld hiervan is de data die ik wilde gebruiken voor de kaart van Nederland, zoals beschreven op dag 7 van mijn *process book*. Gelukkig was het relatief makkelijk en snel oplosbaar, maar in de toekomst zal ik daar nu natuurlijk eerder over nadenken. D
Het andere probleem op dag 7, de verschillende versies van D3 voor de staafdiagram en de *gauge*, zal ik natuurlijk in de toekomst ook niet meer tegenkomen.

Ook heb ik het mezelf extra moeilijk gemaakt door te lang in verschillende HTML bestanden te werken. Omdat ik de verschillende bestanden pas laat samenvoegde, kwamen er toen allerlei nieuwe problemen, zoals dat de *drop down* van de staafdiagram en de *mouse over* functionaliteit van de kaart ineens niet meer werkten in deze bestanden. Hier heb ik dus ook van geleerd dat je beter niet in verschillende bestanden kunt blijven werken, maar beter meteen kan testen hoe het samen werkt.

Iets anders waar ik tegenaan liep was het maken van de kaart van Nederland. Ik had geen idee waar ik moest beginnen en pas toen ik me flink had verdiept in TopoJSON lukte dit eindelijk. Hier heb ik ook veel van geleerd. 


Beslissingen en terugblik:
-------------------------
Als je kijkt naar hoe mijn prototype eruit ziet (afbeelding "programmeerproject.png" in de map "docs") en hoe het eindresultaat is, dan zijn er een aantal verschillen. Een van die verschillen is dat ik de data die ik zou gebruiken voor de kaart van Nederland en de data die ik zou gebruiken voor de staafdiagram met elkaar heb omgewisseld, omdat ik tegen een probleem aanliep (zie "Het proces"). Ik denk dat het ten goede is gekomen van de visualisatie dat ik dat op deze manier heb gewijzigd, omdat mijn visualisatie op deze manier een stuk beter en duidelijker de dataset kan weergeven.

Ik vind het wel erg jammer dat ik geen tijd meer had voor de tabel die een overzicht van de data weergeeft, want deze zou naar mijn idee veel overzichtelijkheid toevoegen aan de pagina en gebruikers een extra en betere manier bieden om de data echt te vergelijken. 
