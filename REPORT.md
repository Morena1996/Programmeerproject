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
		1.	function loadMap();
			Deze functie bevat de code om de kaart van Nederland te vormen. Met behulp van TopoJSON data wordt de kaart weergegeven en vervolgens wordt de kaart gekleurd met behulp van 
		2.	function loadBarchart();
		3.	function loadGauge();
		4.	removeBarchart();
		5.	removeGauge();


Het proces
----------



Beslissingen 
------------

Terugblik
---------