$("#map").click(function(event){
    var loc = event.offsetX + event.offsetY

    if(loc < 265 && loc > 225){
        $("#heading").text(`North america wildfires:`)
        $(".para").text("Many states and provinces in USA and Canada had 58,733 wild fires which burned 7.13 million acres of forest.")
    }else if(loc < 790 && loc > 735){
        $("#heading").text("Russian wildfires:")
        $(".para").text("Forest fires have destroyed more than 18.16m hectares in 2021, setting a record since the country began monitoring forest fires using satellites in 2001. This has produced almost 1.3 billion tonnes of carbon dioxide.")
    }else if(loc < 705 && loc > 685){
        $("#heading").text("Turkey wildfires")
        $(".para").text("A total of 180 wildfires have affected 38 different provinces in Turkey. The fires started on 28th July 2021, and continue to rage mainly in the Mediterranean and Aegean regions of Turkey. A total of 8 people lost their lives due to these fires.")
    }else if(loc < 515 && loc > 505){
        $("#heading").text("St. Vincent")
        $(".para").text("La Soufrière, the largest volcano and the highest peak on the main island of St. Vincent and the Grenadines, erupted for the first time in 40 years. The blast sent ash six miles high, covering nearby communities and creating heavy ashfall.")
    }else if(loc < 1143 && loc > 1133){
        $("#heading").text(`Mount Semeru Eruption:`)
        $(".para").text("On 4 December 2021, the Mount Semeru volcano in East Java Province had its largest eruption in recent history and released hot cloud with volcanic materials and heavy ashfall. As of 6 December, It was reported that 34 people killed and 5,205 people directly affected, including some 3,697 people who are displaced within the regency. The eruption has damaged 2,970 houses and has affected 24 schools and 3,888 students.")
    }else if(loc < 837 && loc > 794){
        $("#heading").text(`Central African Floods:`)
        $(".para").text("According to reports, 13,325 people were left homeless after rain, strong winds and lightning strikes in Kindu and surrounding areas on 21 January 2022 in DRC.")
    }else if(loc < 966 && loc > 934){
        $("#heading").text(`South India floods:`)
        $(".para").text("During the second half of 2021, south Indian states faced massive upsurg of floods due to heavy rainfall on 6-7 November. At least 26 people have died from flash flooding, building collapses and mudslides.")
    }else if(loc < 992 && loc > 976){
        $("#heading").text(`Floods in Henan Province`)
        $(".para").text("The city of Zhengzhou in Henan province, received 24 inches (617 millimeters) of rain between July 17 and 20, nearly same as China's average yearly rainfall.")
    }else if(loc < 1345 && loc > 1325){
        $("#heading").text(`Australian Floods:`)
        $(".para").text("Days of heavy rain flooded the province of New South Wales in March, 2021, leading to a once-in-a-hundred-year-flood with water amounts not seen since 1961. The catastrophic flooding came after the record-setting bushfires that swept the region during 2019-2020, leaving many residents reeling from back-to-back disasters.")
    }else if(loc < 600 && loc > 588){
        $("#heading").text(`Floods in Western Europe`)
        $(".para").text("Europe (especially Germany) received the equivalent of a normal two months of rain in few days, which caused rivers to overtop their banks, flooding through communities, and left many people injured, missing or dead. As of Aug. 11, there were 229 confirmed deaths in Europe.")
    }else if(loc < 530 && loc > 515){
        $("#heading").text(`Peru earthquake:`)
        $(".para").text("On 28 November 2021, an earthquake of magnitude 7.5 on the Richter scale occured in the district of Barranca, Peru. The earthquake occurred at a depth of 131km on 6th December 2021. The affected regions experienced four aftershocks with the strongest one recorded with magnitude of 5.")
    }else if(loc < 370 && loc > 360){
        $("#heading").text(`Guerrero earthquake:`)
        $(".para").text("A moment magnitude of 7.0 or 7.1 earthquake occurred near the city of Acapulco in the Guerrero state of Mexico on 7 September. The earthquake killed 13 and injured almost 23 people. 1.6 million people in Mexico were affected by the earthquake which resulted in severe damage.")
    }else if(loc < 455 && loc > 445){
        $("#heading").text(`Haiti Earthquake:`)
        $(".para").text("This earthquake occurred at a depth of only 10 km, which is important factor in causing massive damage. Almost 19,000 people displaced in the metropolitan area of Port-au-Prince, capital of Haiti due to the earthquake.")
    }else if(loc < 855 && loc > 845){
        $("#heading").text(`Pakisthan earthquake:`)
        $(".para").text("More than 20 people lost their lives and more than 300 hundred were injured on October 7, when an earthquake struck in Balochistan. The earthquake was of 5.9M with the depth of 9km, followed by an aftershock of 4.9M.")
    }else if(loc < 1155 && loc > 1135){
        $("#heading").text(`Sulawesi earthquake:`)
        $(".para").text("On Jan. 15, 2021, an earthquake struck 3.7 miles (6 km) northeast of the city of Majene on the west coast of Sulawesi island in Indonesia. 92 people died and over 3,000 were injured. More than 94,000 were initially displaced, though within a month that number decreased to almost 47,000.")
    }else if(loc < 1055 && loc > 1045){
        $("#heading").text(`Japan Earthquake`)
        $(".para").text("The 2021 Fukushima-ken Oki earthquake was a very intense and deadly seismic event that struck offshore east of Tōhoku, Japan. The earthquake was followed by multiple aftershocks within less than an hour. The earthquake has been considered an aftershock of the 2011 Tōhoku earthquake.")
    }else if(loc < 360 && loc > 330){
        $("#heading").text(`Hurricane Ida`)
        $(".para").text("Hurricane Ida was a deadly Category 4 Atlantic hurricane that became the second-most damaging hurricane to make landfall in the U.S. state of Louisiana on record, behind Hurricane Katrina in 2005. The remnants of the storm also caused widespread destruction and harsh flooding across the northeastern states.")
    }else if(loc < 1095 && loc > 1080){
        $("#heading").text(`Typhoon Surigae:`)
        $(".para").text("Typhoon Surigae, also known as Typhoon Bising, was the strongest tropical cyclone to form before May, one of the most intense tropical cyclones on record, and the strongest tropical cyclone worldwide in 2021.")
    }else if(loc < 915 && loc > 895){
        $("#heading").text(`Cyclone Tauktae:`)
        $(".para").text("Cyclonic Tauktae was a powerful, deadly and damaging tropical cyclone in the Arabian Sea that became the strongest tropical cyclone to make landfall in the Indian state of Gujarat since the 1998 Gujarat cyclone and also to ever affect the west coast of India.")
    }else if(loc < 1235 && loc > 1200){
        $("#heading").text(`Cyclone Seroja`)
        $(".para").text("On April 4, Cyclone Seroja formed over the Savu Sea near southern islands of Indonesia, northwest of the Australian city of Darwin. It quickly produced heavy rains and high winds. This cyclone affected Timor-Leste, Australia and Indonesia.")
    }else {
        $("#heading").text('CLICK ON THE DOTS:')
        $(".para").text("To get information about a major natural disaster which occured in 2021, click on any of the marked dots in the map.")
    }
})



