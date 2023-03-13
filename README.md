# Final-Deliverable


## When it comes to annual weather data visualization, we typically see a very traditional line or bar plot used, with the x-axis as the date and the y-axis as the temperature. We’ve seen  examples of this on old newspapers, and while they are simple to read and understand, they lack interactiveness and creativeness. With the help of the D3 framework, I created a circular bar diagram visualization that plots the mean temperature of all 365 days from July 1, 2014 to June 30, 2015 of eight different cities. In terms of the design, I labeled the bars of each month with different colors and created a circular axis for temperature readability. On top of this, my visualization supports two dynamic tasks, which are 1) the ability to change cities on the same plot and 2) the ability to track data through mouseover. My objective was to display these weather information as neatly as possible, while avoiding unnecessary dynamic features that will overcomplicate a user’s experience. Below are screenshots of the user interface:

<img width="797" alt="Screen Shot 2023-03-12 at 5 37 21 PM" src="https://user-images.githubusercontent.com/102645083/224612557-2382b4dd-e7ca-47f3-a8c6-6d8542857fc4.png">

<img width="600" alt="Screen Shot 2023-03-12 at 7 59 26 PM" src="https://user-images.githubusercontent.com/102645083/224612695-f27ed334-6444-40e5-bb30-3ac8690bbaac.png">



## By plotting these data, we can see that Seattle, Jacksonville, and CQT had the most consistent weather, while New York City, Philadelphia, and Indianapolis had very harsh temperature differences year-round. This visualization can really benefit those who are looking for a new place to live but are really sensitive to harsh weather, or just want to be in a place that has consistent weather year-round.


## Lastly, I think the colors of the bars in this visualization needs to be addressed. I initially thought about directly labeling the months outside of the largest axis (for 90 F) and creating a color scale for the bars. However, after doing so, it became way too complex and had unnecessary features: the temperature axis already shows the value of each bar clearly, which means this scale is meaningless, and adding months labels is only going confuse the readers. To fix and simplify these issues, I made the bars of every month a distinct color and generalized them by the season that they are in, and created a legend by the visualization for an easy readability. 



