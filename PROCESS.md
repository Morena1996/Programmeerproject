# day 1 

Today I worked on my project proposal and turned it in. 

# day 1

Today I found my data on www.CBS.nl. I downloaded the data in CSV format and spent some time putting everything in the right place (columns, rows, different variables, etc.).). After this I used a function that I wrote (convertCSV2JSON.py) to convert the data to JSON data. 


# day 2

Once the data was fully usable, I was able to start with the first figure: the bar chart. I finished my code for a bar chart that uses data from one province and one year, and yet have to find out how to program the bar chart in such a way that the user is able to switch between the different years (2010/2015) and the different provinces. This is something I planned on asking tomorrow.

Another problem I encountered today was that the browser would not load my data in the right way. After asking a staff member for help, we found some minor detail in my javascript file caused the error. This was solved quickly. 


# day 3

Today I finished the second view: the fill gauge. I had problems with positioning the gauge, but besides that, it was rather easily done by using an example. I also tried to optimize the bar chart and improve some small difficulties, like the fact that not all numbers show when you hover over the bars and 


# day 4

Today my plan was to make the third view: the map. Due to the huge chaos on Science Park (the roof was blown off), the fact that I was stuck for a few hours and the fact that I couldn't ask any questions all day, I was not able to finish this one. Today I was planning on asking how to find the map in the first place, because Google did not make me that much wiser on this topic and I hoped someone from the staff would be able to help me start off. I assume that this won't affect my grade, considering the very exceptional circumstances. Another thing I was not able to ask was how to combine all views in one webpage, so this is also something I'll have to put off until Monday. 

Today I also put the data on marriages (for the gauge) per province and per year in the right place and then converted it to json (gehuwd.json). 

# day 5

Today I was sick in bed and thus wasn't able to do anything. 

# day 6

Today I am still not feeling very good, but I have to catch up on the time I lost yesterday and also the deadline on Friday is coming closer. My plan today is to put everything in one HTML and start with the map of the Netherlands.

Today I encountered an annoying problem: I used v3 for the map and v4 for the bar chart which resulted in the fact that when i combined the two into one html, one of the two would not work. So I changed some functions in barchart.js into v3 functions so it would still work together. 

Then I encountered another problem: my data for the map of the Netherlands (average frequency of church visits per province) is not usable, because the differences are not big enough. So all provinces would have the same colour on the map... So I had to change something. I fixed it by using the data of the different religions per province (kerkelijke gezindten). So now the map will show the average amount of people per province that count themselves to a religion. The bar chart will now show the data of the frequency of the church visits.

Also I found a svg map for the Netherlands, but I'm still working on making it applicable for my web page. 

So today I found a map, changed the use of my data, prepared some data and combined the two visuals into one web page. 


# day 7

Today I found out that the svg map I found yesterday was not usable. So I searched the web for quite a long time for another one, but only found usable maps you have to pay for. Then I asked the staff and they gave me a website (www.datamap.github.io). 

I also found out that my browser would not update my script properly by using the refresh button, because it loads what's in the cache. Then someone from the staff told me how to "hard refresh", so that problem was fixed as well.

I also tried to change my bar chart script from v4 of D3 to v3, because my other visuals are in v3. 






