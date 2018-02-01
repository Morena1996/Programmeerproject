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



Beslissingen 
------------

Terugblik
---------