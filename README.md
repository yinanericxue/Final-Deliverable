# Final-Deliverable


## When it comes to visualizing annual weather data, we typically see a traditional line or bar plot being used, with the x-axis as the date and the y-axis as the temperature. We’ve seen examples of this on old newspapers, and while they are simple to read and interpret, they lack interactiveness and creativeness. With the help of the D3 framework, I created an interactive circular bar visualization that plots the mean temperature of all 365 days from July 1, 2014 to June 30, 2015 of 10 different cities. In terms of the design, I labeled the bars of each month with different colors and created a circular axis for temperature readability. On top of this, my visualization supports two dynamic tasks, which are 1) the ability to change and view different cities on the same plot and 2) the ability to track data through mouseover. My objective was to display these weather information as neatly as possible, while avoiding unnecessary dynamic features that will overcomplicate a user’s experience. Below are some screenshots of the user interface:

![Weather Data Visualization from July 2014 - June 2015](https://user-images.githubusercontent.com/102645083/224612841-567eca02-b3a7-4a6e-b059-8c13b174b5c4.png)

<img width="600" alt="Temperature 56" src="https://user-images.githubusercontent.com/102645083/224612847-cfc78e58-6852-4b37-a441-9f7c0c81cc8c.png">



## By plotting these data, we can see that Seattle, Jacksonville, and CQT had the most consistent weather, while New York City, Philadelphia, and Indianapolis had very harsh temperature differences year-round. This visualization can really benefit those who are looking for a new place to live but are really sensitive to harsh weather, or just want to be in a place that has consistent weather year-round. For example, here are some questions that this visualization can answer: 1) As someone who cannot stand the heat wave in the summer from June to  August, I want to know if Seattle is a good place to stay at at this time?  2) Can people that live in Houston expect to have summer like weather in the majority of the months that they live there?  3) Can people in NYC expect extreme weathers in the winter?


## Lastly, I think the colors of the bars in this visualization needs to be addressed. I initially thought about directly labeling the months outside of the largest axis (for 90 F) and creating a color scale for the bars. However, after doing so, it became way too complex and had unnecessary features: the temperature axis already shows the value of each bar clearly, which means this scale is meaningless, and adding months labels is only going confuse the readers. To fix and simplify these issues, I made the bars of every month a distinct color and generalized them by the season that they are in, and created a legend by the visualization for an easy readability. 



