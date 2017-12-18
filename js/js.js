///This is a 3-STEP process
/// 1. Setting up the Basemap
// here this function sets up the name (to match the id of the map div element in the HTML), the center with coordinates(latitude, longitude), and the zoom level(larger level, more zoom-in) for the map.
var map = L.map('map', {
  center: [-23.617, -56.981],
  zoom: 7
});

// here we set up the basemap style
// we can also set it as var Style = 'dark';
// other styles are also available to choose from
// here maybe: http://leaflet-extras.github.io/leaflet-providers/preview/
var Style = 'light';

// this code constructs the map object
var Basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/'+ Style + '_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  subdomains: 'abcd'
}).addTo(map);
console.log("mapped");

//hide the LEGEND first
$('#legend').hide();

//1.2 SWITCH BASEMAPS
var darkmap = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  subdomains: 'abcd'
}),

  lightmap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
    subdomains: 'abcd'
  });


$('#dark').click(function(){
  console.log("dark clicked.");
    $('#map1').hide();
    $('#map').show();
    map.removeLayer(Basemap);
    map.removeLayer(lightmap);
    map.addLayer(darkmap);
});

$('#light').click(function(){
    $('#map1').hide();
    $('#map').show();
    map.removeLayer(Basemap);
    map.removeLayer(darkmap);
    map.addLayer(lightmap);
});

//1.3 LOAD SATELLITE MAP
// REFERENCE
// http://bl.ocks.org/d3noob/8663620
// https://github.com/react-community/react-native-maps
$('#satellite').click(function(){
  $('#map').hide();
  $('#map1').show();

  $('#legend').css('background-color','white');
  $('#legend').css('opacity','0.7');

// Q:  Is there any cap on usage?
//
// A:  Yes.  If you have an ArcGIS Online subscription, ArcGIS Desktop, or ArcGIS Enterprise, you are limited to 50,000,000 transactions in a twelve month
// period.  A transaction is defined as 8 tile requests which equates to
// 400,000,000 tile requests per year or slightly more than 1,000,000 tile
// requests per day.
//
// If you have a developer account, you are limited to 1,000,000 transactions per month.
//
// Q:  How can I estimate if I might reach the transaction limit?
//
// A:  To help determine whether you may qualify as a high volume user, the following calculation can be made:
// Multiply the number of expected users per day times the number of times you expect they might pan or zoom the map.   If you think you will have 200 visitors, and each visitor will pan or zoom 10 times, a ballpark number of transactions is 2,000 (200 visits times 10 pan/zooms) per day.

  var map1 = L.map('map1').setView([-24.617, -56.981], 7);
        mapLink =
            '<a href="http://www.esri.com/">Esri</a>';
        wholink =
            'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; '+mapLink+', '+wholink,
            minzoom: 5,
            maxZoom: 15,
          }).addTo(map1);


   //ADD THE MARKER
   // L.marker([-25.262, -57.581]).addTo(map1)
   //     .bindPopup('Asuncion, Paraguay');


   //LOAD THE LAYERS
   // $(document).ready(function(){
   //    $.ajax(Paraguay_Department_withSchools).done(function(data){
   //        var Boundary = JSON.parse(data);
   //        console.log("parsed2_imagery");
   //        console.log(Boundary);
   //        var itemB = L.geoJSON(Boundary,
   //            {
   //                style: myStyle,
   //                pointToLayer: function (feature, latlng) {
   //                return new L.Polygon(latlng, {
   //                });
   //                },
   //
   //                onEachFeature: function(feature,layer){
   //
   //                layer.bindPopup(
   //                  "<b>Department Name: </b>" +
   //                  feature.properties.nombre_dep +
   //                  "</br>" +
   //
   //                  "<b>Area: </b>" +
   //                  feature.properties.area.toFixed(2) + " square kilometers" +
   //                  "</br>" +
   //
   //                  "<b>Population: </b>" +
   //                  feature.properties.total_pop +
   //                  "</br>" +
   //
   //                  "<b>Middle Schools: </b>" +
   //                  feature.properties.schl_perca.toFixed(2) + " middle schools per 10,000 people" +
   //                  "</br>" +
   //
   //                  "<b>Poverty Rate: </b>" +
   //                  feature.properties.poverty.toFixed(1) + " %" +
   //                  "</br>" +
   //
   //                  "</br>" +
   //                  "<b>Data Collected Year: </b>" +
   //                  feature.properties.anio +
   //                  "</br>" +
   //
   //                  "<b>More information: </b>" +
   //                  "<a target=\"_blank\" href =" + feature.properties.uri + ">here</a>" +
   //                  "</br>"
   //                )
   //               }
   //          }).addTo(map1);
   //          itemB.eachLayer(eachFeatureFunction);
   //        })
   //      })

});


// 1.3 SWITCHING SACLES
var changeBasemap1 = function(location1){
  var value1 = location1.value;
  console.log(value1);
  if(value1 == 'Paraguay'){
    map.setView([-24.405005, -57.758066],5);
    // map1.setView([-24.405005, -57.758066],5);
  }
  if(value1 == 'Brazil'){
    map.setView([-12.888368, -53.062495],5);
    // map1.setView([-12.888368, -53.062495],5);
  }
  if(value1 == 'Argentina'){
    map.setView([-38.155521, -66.728787],5);
    // map1.setView([-38.155521, -66.728787],5);
  }
};

var changeBasemap2 = function(location2){
  var value2 = location2.value;
  console.log(value2);
  if(value2 == 'Alto Paraná'){
      map.setView([-25.489225, -54.854657],9);
  }
  if(value2 == 'Asunción'){
      map.setView([-25.288962, -57.620495],9);
  }
  if(value2 == 'Central'){
      map.setView([-25.562634, -57.496427],9);
  }
};

var changeBasemap3 = function(location3){
  var value3 = location3.value;
  console.log(value3);
  if(value3 == 'Ciudad del Este'){
      map.setView([-25.504610, -54.648694],12);
      //highlight the boundary of the selected municipality
      selectedmuni_name = 'Ciudad del Este';
      console.log("Ciudad del Este selected");
      //layermappedpolygons not defined?!
      // layerMappedPolygons.eachLayer(function(layer){
      //   if (layer.feature.properties.m_name == selectedmuni_name) {
      //     console.log("ready to select");
      //     layer.setStyle(highlight);
      //     console.log("selection highlighted")
      //     };
      // });

  }
  if(value3 == 'Asunción'){
      map.setView([-25.288962, -57.620495],12);
      selectedmuni_name = 'Asunción';
      console.log("Asunción selected");
      // layerMappedPolygons.eachLayer(function(layer){
      //   if (layer.feature.properties.m_name == selectedmuni_name) {
      //     console.log("ready to select");
      //     layer.setStyle(highlight);
      //     console.log("selection highlighted")
      //     };
      // });
  }
  if(value3 == 'Encarnación'){
      map.setView([-27.309479, -55.888319],12);
      selectedmuni_name = 'Encarnación';
      console.log("Encarnación selected");
      // layerMappedPolygons.eachLayer(function(layer){
      //   if (layer.feature.properties.m_name == selectedmuni_name) {
      //     console.log("ready to select");
      //     layer.setStyle(highlight);
      //     console.log("selection highlighted")
      //     };
      // });
  }
};



//3.Set the default values for the input thresholdinput
// $("#input1l").attr("value","10");
// $("#input1h").attr("value","30");
// $("#input2l").attr("value","0");
// $("#input2h").attr("value","5");

///4. Adding the layer data to be mapped
// calling the data to be mapped, that is in this case, stored within the Github repo data folder
// var Paraguay_Department = "https://raw.githubusercontent.com/GeoAdaptive/Resources_library/master/Example_Paraguay/data/Paraguay_Department.json?token=AgSQK_iClU3Bq4w13Xt-gKc1xP9YEfbUks5aKafawA%3D%3D";
var Paraguay_Boundary = "https://raw.githubusercontent.com/GeoAdaptive/Paraguay_Schools_V2/master/data/Paraguay_Department.json?token=AgSQK3t4-gR01nMoS0CElqOkMzLEbA1Lks5aPB0WwA%3D%3D";
var Paraguay_Department_withSchools = "https://raw.githubusercontent.com/GeoAdaptive/Paraguay_Schools_V2/master/data/DEMO_deptmt_schools_join.geojson?token=AgSQK9YwtDUceng8lC-jaDPcpPhslFypks5aN_04wA%3D%3D";
var Paraguay_Middle_Schools = "https://raw.githubusercontent.com/GeoAdaptive/Paraguay_Schools_V2/master/data/INFR_middleschool_Paraguay.geojson?token=AgSQKx1poFvEHc-8MLbpVF1PUmKHmK42ks5aN_1owA%3D%3D";
var Central_Districcts = "https://raw.githubusercontent.com/GeoAdaptive/Paraguay_Schools_V2/master/data/ADM_Districts_in_Central_Dep.geojson?token=AgSQKxZ_TkJQKWwiM0-uEdVNeRkRQ-oGks5aN_2OwA%3D%3D";

var ParaguayDepartments;
var parsedData_Departments;

var PovertyRate_Selected;

// var layerMappedPolygons;
var layerselected = [ ];

//The query selection Section
//THE HIGHLIGHT AND FADE-OUT STYLE
var fadeout = {
  'opacity': 0.05,
  'fillColor':'#F0B27A',
};

var highlight = {
  'fillColor':'#416FEA',
  'fillOpacity':'0.5',
  'borderStyle':'solid',
  'borderColor':'#416FEA',
  // 'borderOpacity':'1',
  'borderWidth': '20px',
};

//Selecting only those Departments with data meeting the criteria set
var povlow = 0;
var povhigh = 0;
var schllow = 0;
var schlhigh = 0;


var eachFeatureFunction = function(layer){
    layer.on('click', function (event){
      console.log(layer.feature.properties.poverty);

      map.fitBounds(layer.getBounds(),{
               padding: [70,70]
            });

      //TO BE FIXED, THE ZOOMING FUNCTION HOW DOES IT WORK FOR ESRI LAYERS?
      // map1.fitBounds(layer.getBounds(),{
      //          padding: [70,70]
      //       });

      //Create the interactive graph for poverty rate
      $('#myChart').remove();
      $('.chartsarea').append('<canvas class="charts" id="myChart" width="330" height="300"></canvas>');
      console.log("chart replaced.");
      $('#reportbutton').remove();
      $('.chartsarea').append('<button class="btn btn-default dropdown-toggle" type="button" id="reportbutton" onclick="tableToPDF1()" data-toggle="dropdown" aria-haspopup="true">Download Report</button>');
      var backgroundColor = 'white';

      PovertyRate_Selected = layer.feature.properties.poverty;

      Chart.plugins.register({
        beforeDraw: function(c) {
          var ctx = c.chart.ctx;
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, c.chart.width, c.chart.height);
         }
       });

       if(myChart!=null){

       }
       else {
         var ctx2 = document.getElementById("myChart");

         ctx2.style.backgroundColor = 'rgba(255,255,255,1)';

         var myChart = new Chart(ctx2, {
             type: 'bar',
             data: {
                 labels: [layer.feature.properties.nombre_dep, "LATIN AMERICA"],
                 datasets: [{
                     label: 'Poverty Rate (%)',
                     data: [layer.feature.properties.poverty, 8.7],
                     backgroundColor: [
                         // 'rgba(133,193,233, 0.5)',
                         'rgba(65,111,234, 0.5)',
                         'rgba(255, 120, 35, 0.5)',
                         // 'rgba(255, 206, 86, 0.5)',
                         // 'rgba(255, 66, 24, 0.5)',

                     ],
                     borderColor: [
                        // 'rgba(133,193,233, 1)',
                        'rgba(65,111,234, 0.5)',
                         'rgba(255, 120, 35, 1)',
                         // 'rgba(255, 206, 86, 1)',
                         // 'rgba(255, 66, 24, 1)',
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
               responsive: false,
               maintainAspectRatio: false,
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero:true
                             }
                           }],
                     xAxes: [{
                              barPercentage:0.6
                           }],
                         }
                       }
             });
       }


      layerselected.push(layer);
      console.log(layerselected);
      // namelist.push(layer.feature.properties.m_name);
      // console.log(namelist);

      ParaguayDepartments.setStyle(fadeout);
      layer.setStyle(highlight);

    });

    //read the user input
    $('#search').click(function(){
      povlow = $('#input1l').val();
      povhigh = $('#input1h').val();
      schllow = $('#input2l').val();
      schlhigh = $('#input2h').val();
      console.log("You selected the poverty range from "+ povlow +"% to " + povhigh +"%.");
      console.log("You selected the school density range from "+ schllow +" schools to " + schlhigh +"schools per 10,000 people.");

      var pov = layer.feature.properties.poverty;
      console.log(layer.feature.properties.poverty);

      var schld = layer.feature.properties.schl_perca;
      console.log(layer.feature.properties.schl_perca);

      if((pov >= povlow) && (pov <= povhigh) && (schld >= schllow) && (schld <= schlhigh)){
        console.log(layer);
      } else {
        map.removeLayer(layer);
      }
    });

};


$('#reset').click(function(){
  console.log("reset clicked.");
  _.each(ParaguayDepartments,function(layer){
    map.removeLayer(layer);
  });
  // console.log(selectedmaps);
  // $('#box2').hide();
  // $('#box3').hide();
  // $('#box4').hide();
  // $('#box5').hide();
  //
  // _.each(Greenspaces,function(layer){
  //   map.removeLayer(layer);
  // });
  //
  // _.each(Buildings,function(layer){
  //   map.removeLayer(layer);
  // });
  //
  // _.each(Railways,function(layer){
  //   map.removeLayer(layer);
  // });
  //
  // _.each(Roads,function(layer){
  //   map.removeLayer(layer);
  // });
  //
  // map.removeLayer(layerMappedPolygons);
  // console.log("removed");
  // layerMappedPolygons.addTo(map);
  // console.log("reloaded");
  // layer.setStyle(samelook);
});


//assigining color function
var myStyle = function(feature){
  // switch(feature.properties.tipo_manag){
  //   case "PRIVADA":return{color:"#e74c3c"};
  //   case "OFICIAL":return{color:"#e67e22"};
  // }
  var x = feature.properties.poverty;
  switch(true){
    case (x < 10):
      return{color:"#58D68D"};
      break;
    case (x < 20):
      return{color:"#45B39D"};
      break;
    case (x < 30):
      return{color:"#5DADE2"};
      break;
    case (x < 40):
      return{color:"#DC7633"};
      break;
    case (x >= 40):
      return{color:"#922B21"};
      break;
  }

  return {};
};

//REFERENCE
// $(document).ready(function(){
//   $.ajax(torinoboundary).done(function(data) {
//
//     parsedData_torinoboundary = JSON.parse(data);
//     console.log(parsedData_torinoboundary);
//     console.log("parsed torinoboundary");
//
//     var boundary = L.geoJson(parsedData_torinoboundary,
//       {
//         style: {opacity:0.7,width:1.2,color:'#FA2712', fillOpacity:0},
//         pointToLayer: function (feature, latlng) {
//           return new L.Polygon(latlng, {
//           });
//         },
//         }).addTo(map);
//       });
//     });



//Click button to control for displaying the map
$('#showmap').click(function(){

  $('#legend').show();
  ///2. Adding the markers
  // now add the marker here, with a popup text explaining the marker
  // L.marker([-25.262, -57.581]).addTo(map)
  //     .bindPopup('Asuncion, Paraguay')
  //     .addTo(map);

  // L.marker([-25.504610, -54.648694]).addTo(map)
  //     .bindPopup('Ciudad del Este, Paraguay')
  //     .addTo(map);
  //
  // L.marker([-27.309479, -55.888319]).addTo(map)
  //     .bindPopup('Encarnación, Paraguay')
  //     .addTo(map);

  console.log("search button clicked.");
  ParaguayDepartments = L.geoJSON(parsedData_Departments,
    {
      style: myStyle,
      pointToLayer: function (feature, latlng) {
      return new L.Polygon(latlng, {
      });
      },

      onEachFeature: function(feature,layer){

      layer.bindPopup(
        "<b>Department Name: </b>" +
        feature.properties.nombre_dep +
        "</br>" +

        "<b>Area: </b>" +
        feature.properties.area.toFixed(2) + " square kilometers" +
        "</br>" +

        "<b>Population: </b>" +
        feature.properties.total_pop +
        "</br>" +

        "<b>Middle Schools: </b>" +
        feature.properties.schl_perca.toFixed(2) + " middle schools per 10,000 people" +
        "</br>" +

        "<b>Poverty Rate: </b>" +
        feature.properties.poverty.toFixed(1) + " %" +
        "</br>" +

        "</br>" +
        "<b>Data Collected Year: </b>" +
        feature.properties.anio +
        "</br>" +

        "<b>More information: </b>" +
        "<a href =" + feature.properties.uri + ">here</a>" +
        "</br>"
      )
     }
  }).addTo(map);
  ParaguayDepartments.eachLayer(eachFeatureFunction);
  // ParaguayDepartments.push(itemB);
});

//use this function to download and create mappable objects
$(document).ready(function(){
  $.ajax(Paraguay_Department_withSchools).done(function(data){
    parsedData_Departments = JSON.parse(data);
    console.log("parsed");
    console.log(parsedData_Departments);
  })
})




// $(document).ready(function(){
//   $.ajax(Central_Districcts).done(function(data){
//     var parsedData = JSON.parse(data);
//     console.log("parsed2");
//     console.log(parsedData);
//     LayerMappedPolygon = L.geoJSON(parsedData,
//       {
//         style:{opacity:1,width:0.5,color:'#F4D03F'},
//         pointToLayer: function (feature, latlng) {
//         return new L.Polygon(latlng, {
//         });
//         },
//
//         onEachFeature: function(feature,layer){
//
//         layer.bindPopup(
//           "<b>Department Name: </b>" +
//           feature.properties.nombre_dep +
//           "</br>" +
//
//           "<b>Area: </b>" +
//           feature.properties.area.toFixed(2) + " square kilometers" +
//           "</br>" +
//
//           "<b>Population: </b>" +
//           feature.properties.total_pop +
//           "</br>" +
//
//           "<b>Middle Schools: </b>" +
//           feature.properties.schl_perca.toFixed(2) + " middle schools per 10,000 people" +
//           "</br>" +
//
//           "<b>Poverty Rate: </b>" +
//           feature.properties.poverty.toFixed(1) + " %" +
//           "</br>" +
//
//           "</br>" +
//           "<b>Data Collected Year: </b>" +
//           feature.properties.anio +
//           "</br>" +
//
//           "<b>More information: </b>" +
//           "<a href =" + feature.properties.uri + ">here</a>" +
//           "</br>"
//         )
//        }
//     }).addTo(map);
//     layerMappedPolygons.eachLayer(eachFeatureFunction);
//   })
// })


//REFERENCE
// var itemB = L.geoJson(parsedData_Schools,
//  {
//    style: {opacity:0.3,width:0.5,color:'#E5EF13'},
//    filter: myFilter1,
//    pointToLayer: function (feature, latlngs) {
//      return new L.circleMarker(latlngs, {
//         radius:2,
//         fillColor:'#E5EF13',
//         color:'#EBA430',
//         weight:1,
//         opacity:0.3,
//         fillOpacity:0.3,
//        });
//      }
//  }).addTo(map).bindPopup("PrimarySchools");



// Display the school data
//use this function to download and create mappable objects

// $(document).ready(function(){
//   $.ajax(Paraguay_Middle_Schools).done(function(data){
//     var parsedData = JSON.parse(data);
//     console.log("parsed1");
//     console.log(parsedData);
//     var itemB = L.geoJSON(parsedData,
//       {
//         style: {opacity:0.8,width:0.5,color:'#21618C'},
//         pointToLayer: function (feature, latlng) {
//         return new L.circleMarker(latlng, {
//           radius:1.5,
//           // fillColor:'#212F3C',
//           weight:1,
//           opacity:0.9,
//           fillOpacity:0.3,
//         });
//         },
//
//         onEachFeature: function(feature,layer){
//
//         layer.bindPopup(
//           "<b>School Name: </b>" +
//           feature.properties.nom_instit +
//           "</br>" +
//
//           "<b>Address: </b>" +
//           feature.properties.direccion +
//           "</br>" +
//
//           "</br>" +
//           "<b>Data Collected Year: </b>" +
//           feature.properties.anio +
//           "</br>" +
//
//           "<b>More information: </b>" +
//           "<a href =" + feature.properties.uri + ">here</a>" +
//           "</br>"
//         )
//        }
//     }).addTo(map);
//     itemB.eachLayer(eachFeatureFunction);
//   })
// })



//PDF GENERATION AND CREATION
var tableToPDF1 = function(){
  var doc = new jsPDF("1", "", "letter");
  var pageHeight = doc.internal.pageSize.height;
  var pageWidth = doc.internal.pageSize.width;
  console.log(pageHeight);
  console.log(pageWidth);


  //construct the PDF for profile
  doc.setFontSize(10);
  doc.setFontType("light");
  doc.setFont("Arial");
  doc.text(10, 5, 'DataXLat | Geoadaptive LLC.');
  doc.text(150,5, '250 Summer St, Boston, MA, USA');
  //DIVIDING LINE
  doc.setLineWidth(1);
  doc.setDrawColor(133,193,233);
  // #85C1E9
  doc.line(0, 8, 240, 8);

  //TITLE BOX
  doc.setDrawColor(0);
  doc.setFillColor(133,193,233);
  doc.rect(10, 15, 75, 48, 'F');

  doc.setFont("times");
  doc.setFontSize(26);
  doc.setFontType("bold");
  doc.setTextColor(255,255,255);
  var Header = doc.splitTextToSize("Social Development Analysis in Paraguay", 60);
  doc.text(13, 24, Header);

  //Quick facts
  doc.setFont("Arial");
  doc.setFontSize(12);
  doc.setFontType("bold");

  doc.setTextColor(133,193,233);
  doc.text(100, 24, "Name: ");
  doc.setTextColor(0,0,0);
  doc.text(125, 24, "Alto Paraná");

  doc.setTextColor(133,193,233);
  doc.text(100, 36, "Area: ");
  doc.setTextColor(0,0,0);
  doc.text(125, 36, "14,212 sq km");

  doc.setTextColor(133,193,233);
  doc.text(100, 48, "Population: ");
  doc.setTextColor(0,0,0);
  doc.text(135, 48, "773,303");

  doc.setTextColor(133,193,233);
  doc.text(100, 60, "Poverty Rate: ");
  doc.setTextColor(0,0,0);
  doc.text(135, 60, "15.9%");


  //INTRO
  doc.setFont("Arial");
  doc.setFontType("narrow");
  doc.setFontSize(11);
  doc.setTextColor(0,0,0);
  var Intro1 = doc.splitTextToSize("Alto Paraná is a department in Paraguay. The capital is Ciudad del Este (formerly known as Puerto Presidente Stroessner, originally Puerto Flor de Lis).The Alto Paraná department has experienced tremendous economic and population growth in the past 50 years. Most of this growth has been concentrated in the department capital of Ciudad del Este, and mainly occurred after the construction of the Puente de la Amistad bridge in 1961, ", 90);
  var Intro2 = doc.splitTextToSize("which connects Paraguay and Brazil. This department is home to the Itaipu power plant, which supplies 95% of the energy consumed by Paraguay, and the Acaray Dam. Several ecological reserves, a zoo and the Taiwanese-Paraguayan Technology Park are situated in this department. The city of Presidente Franco was the first city founded in this department.", 90);
  doc.text(10, 78, Intro1);
  doc.text(110, 78, Intro2);


  //TABLE
  doc.setFont("Arial");
  doc.setFontSize(14);
  doc.setFontType("bold");
  doc.setTextColor(133,193,233);
  doc.text(10, 123, "Key Indicators");

  doc.setTextColor(0,0,0);


  //TABLE
  var columns = [
           // {title: "Subjects", dataKey: "sb"},
           {title: "Indicators", dataKey: "id"},
           {title: "Value", dataKey: "val"},
         ];
  var rows = [
           {"id": "Total Road Length (km)", "val": "2903"},
           {"id": "Road Density (km per sq km)", "val": "8.6"},
           {"id": "Major Road (km)", "val": "211"},
           {"id": "Secondary Road (km)", "val": "323"},
           {"id": "Tertiary Road (km)", "val": "680"},
           {"id": "", "val": ""},
           {"id": "Sanitation", "val": "67%"},
           {"id": "Water", "val": "90%"},
           {"id": "Electricity", "val": "84%"},
           {"id": "Internet", "val": "25%"},
           {"id": "Telephone", "val": "71%"},
           {"id": "Basic Needs Unsatisfied", "val": "28%"},
           {"id": "", "val": ""},
           {"id": "Number of Primary Schools", "val": "311"},
           {"id": "Number of Middle Schools", "val": "69"},
           {"id": "Number of High Schools", "val": "18"},
           {"id": "Total Enrollment Number", "val": "12067"},
         ];

         // P_rd_1.toFixed(3)

  // reference doc.addImage(div,'JPEG', 174, 40, 48, 32);
  // doc.autoTable(columns, rows);

  doc.autoTable(columns, rows, {
    // header: {textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold'},
    headerStyles: {fillColor: [133,193,233]},
    alternateRow: { fillColor: 133},
    styles: {
      // fillColor: [245, 245, 245]
      // fillColor: [214, 225, 225]
    },
    // rowStyles: {
    //   {fillColor: [255, 140, 40]}
    //
    // },

    columnStyles: {
      // sb: {fillColor: [214, 225, 225]},
    	// id: {fillColor: [255,140,0],
      },

    margin: {right: 120, left: 10, top: 128},
    addPageContent: function(data) {
      doc.setFontSize(12);
      doc.setFontType("normal");
      doc.setFont("georgia");
    }
  });

  //ADD AN LIVE STATS
  var statsData =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4RDgRXhpZgAATU0AKgAAAAgABAE7AAIAAAAHAAAISodpAAQAAAABAAAIUpydAAEAAAAOAAAQyuocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdlbmhhbwAAAAWQAwACAAAAFAAAEKCQBAACAAAAFAAAELSSkQACAAAAAzU0AACSkgACAAAAAzU0AADqHAAHAAAIDAAACJQAAAAAHOoAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDE3OjEyOjE4IDA5OjQxOjUzADIwMTc6MTI6MTggMDk6NDE6NTMAAABXAGUAbgBoAGEAbwAAAP/hCxlodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDE3LTEyLTE4VDA5OjQxOjUzLjUzOTwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5XZW5oYW88L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAHBQUGBQQHBgUG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uYiCNuBg4PXpQBq6Z4g03WJDHp87SN5YlAeF49yHgMu4DcPcZpl7ri2etW1gYGdJcebMG4hLEhMjHO4qR7VDpOi3FhdWMkjRFbfTVtGCE8uCDkcdOP8A61VLvwtLf/2nc3Nw63tw+bUx3MixxhAPK3KCAxBGTkHrQBfuPFOkW129tNcyCWOTymC28jAPjITIXG4joOp7ZpZPE+kxWcVy1y5jmDFdkEjMApwxZQu5QDwSQMd6pRaDfFxLO1uJG1NL1wjMRtEYUgHaOcj8qoT+Eb4bJoTDLMBcIyfbJrddskpdTuj5bGcFTwfUYoA2rjxNp8ckkUEwlkiMe8+XJ5YDldvzqhGSGBA7/mRM3iHS0uZYJLrY0QYs7xsI/lGWAcjaSO4BJHPpWUvhe4isLy2ha3UTS2zR4LABYggIOcn+E45Puaeuk65bafeadYz2kMLmd4bre5l3OSwGMYXBY/NlunQdgDX07V7PVDKLN5N8WN6SwPEy5GQdrgHB9elXawPD2i3mm397c3hQC5SMKgu5bllK7s5eQZPUHt9O536ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k='

  //ADD AN IMAGE
  var mapData =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4RDgRXhpZgAATU0AKgAAAAgABAE7AAIAAAAHAAAISodpAAQAAAABAAAIUpydAAEAAAAOAAAQyuocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdlbmhhbwAAAAWQAwACAAAAFAAAEKCQBAACAAAAFAAAELSSkQACAAAAAzMwAACSkgACAAAAAzMwAADqHAAHAAAIDAAACJQAAAAAHOoAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDE3OjEyOjE4IDA5OjE3OjM0ADIwMTc6MTI6MTggMDk6MTc6MzQAAABXAGUAbgBoAGEAbwAAAP/hCxlodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDE3LTEyLTE4VDA5OjE3OjM0LjMwNDwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5XZW5oYW88L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAHBQUGBQQHBgUG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ejdPr6U6kZdyketIj7sA8NjkUAOooooAKKKKACiiigAooooAKKKwHuY21S6XUNRltJI5VWCFZNgZMDBA/jyc+tNK4jfpij97IdpHQZz1/wA5rnJvElwst0IvKdUhmkjygBUocDIDk/mFqSbUtTtGvCxtGFsI5XxGw3h+No+bjGDz9OKfKw5kdFSH74+hrDt766OoJbW/lKslzcby4ZuEZenPXk+1Ns7nU3t9Jezgia2kX/SGZiSgz2y2f50coXN+iiipGFNcgISTjHSnU0qS+4EdMcjpQA6ikXPOTnBpaACiiigAooooAKKKKACiiigAooooAKCcCio7iQRxMx6KMmgChOfNvcdox+pqUcVDbKdu5/vMdxqeudu7OjbQKKKKQBRRRQAUUUUAFFFJnFAAxwKZnNDHJpKYCgkU4Nkc0yigCTI9aMj1qOikBJketGR61HRQBJketGR61HRQBJketGR61HRQBJketGR61HRQBJkUZHrUdFAElLTU706gAooooAKKKKACiiigAooooAKKKKACiiigApkmdvFPooAZpr4VomGHU/Nz1z3rQrKiJS/AB++vPOOlaW/C5OK2g9DKa1HMARzVSZfJJliIHdh2b/69D3LSriBWOeA5GAPemmGZ2VJJA8ecnjBPtVkrQkgjMvzuWVW525wfxq0AFAAGAO1IowKWgQUUUUAFFFIxwpx1xQAJ93PrzS0LjaMdMUUAFFFFABSNwwP4GloIyMGgBi/u8L/DnAPpT6aRuBVjyOQf60Yk/vL/AN8//XoAdRTcuvVQ3uOKVW3KCKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkYZXilooATJHUcexpaKRPu49CaAFooooAKRuSB75paReST+AoAWiiigAooooAKKKKACiiigAooooAKR13LxwRyD6GlooARWDrkfiPSlUhlBFRvG5YujbSBgDHB+tJbszxkupU7jxQBLRRRQAUUUUAFFFFABSFQWBIBI6HHSlooATYpz8o568dajyqzFXXiQ8EnOTjp+lS0wn/AEhRvx8pO3HX3oGO2jOcDP0o2jbgDA9qWigQinKgn0paReBj0NLQAUUUUAIvQ/U0tIn3fxP86WgAooooAKKKKACiiigAooooAKKKKAAnArNu3+0yGEfdHLkfyqxeXHloAnLtwo/rVeGPYvqepPqa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6ipKKAIirD7wDAL1HUn6f/XppwCRnGBnmp6QgEYIyPQ0XAhLMvVSR6ipUIKAimvGNrlSVJHUGkt93l4Yg4OMjvQMlooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUh6cUtFAFeB/KvmMnAcAKe30rTD5rKn3iSN1TcFJOM457U2KV7ZhI7Fw3+s56e9aRkkrEyjfU2aKbG+9QRzTq1MQ6U0uKRz2ptAClietJRRQAUUUUAFFFFABS5wtJTjzGMUAPH3RSH5Wz270J93mloAKKRPuL9KWgApGUMpU9DS0UARHzFTaBuyMBgcY+tOG5ZApbcCDgEc0+myA7cgZIIOB9aAHUUKQygjoaKACiiigAooooAKKKKACiiigAooooAKKKKACkPzNjsOvvS0i85PqaAFpoAWQ4HUZp1I3BB96AFooooAKKKKACiiigAooooAKRgSvy4z2zS0UAM81N2GO09MEYp9NMat1UH606gAooooAKKKKACiiigAooooAaUIOYyBnqCOKKdRQAUUUUAFFFFABRRRQAUjHA469qWkHLk+nFACgYUD0ooooAKKKKACiiigAooooAKKKKACq99/x6yf7hqxUF5/x6yf7poGtypB/q1+gqWorf8A1K/7oqWuY3CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAGvkocelMtyNjDgHccgVLUB/d3WflAcYPqT2/rQMnooooEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUARTsQh2jJA4FVIxACPPilweC5yBmr5xjmqzO0shihVWP8AEWPA/wAaaeodDUjKiMBcbQOMUOc9KggiMMKRlt20YzUtdBzhRRRQAUUU4J60ANop+wUwjBoAKKKKACnLzxTaenQ0AIGI60+o2+9UlACJ9we3FLSLx8vpS0AFFFFABTZCVXIOPU+gp1RkCSXkfdGPzoAeq7VwOe9LTUTYu3JIHTNOoAKKKKACiiigAooooAKKKKACik53e1LQAUUUEgdTigBGOFJpQMKB6U0kMQByOpNOoAKGGVIoooAAcqD6iikT7v0JFLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUANik8yMPjbnse1OqFIgkpCs+AvTPXOacYchR5sg2+/X60DJKKYY85/eOMnPB6UeVyx8x/m7Z6fSgB9FMMWc/vHGRjg9PemuhEgYSP/u54oAlpE+7n15qERs2F81+M85pyx9RvfGNvX9frQBLRTPLz/G/3dvX9frR5Q/vv93b979frQA+imeUP7z/AHdv3j/nPvR5Q/vP93b98/5z70APopnlL6v93b989Pz6+9Hkr/tfd2/fPT8+vvQIfRTPJT/a+7t+8en+e9Hkp6H7u37x6UD0H0UzyU54PK7ep6UeSn93qu3r2oDQfUN3/wAe7/7pp/kxnqvVdv4elQ3UaLA5CgHyyPwoAq23+pT/AHRU1RW/EK/7oqWuY3CiiigAooooAKKYW9KQHBoAkooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqGcHAKnB7EjODU1NZdy4oAEYOoZTkU6oYmO9kYknqOOlTUAFFFFAEZRzID5hC/3QB/OpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBCM1XmgH34wBIOQw9as1HM+yNmIyAM0AJbXMst0UlVVG3IA5rQ2ehqnYQZUzPy7/oPSr1dEb21MZWvoMKGkUZNSUUyQAA6UUUUAFIy5paKAI2XbSVKQD1puz3oAZT06U0qR2p6jA5oAa45zTx90UUitmgAb+8OopRzRSJ90e3FAC0UUUAFRRoBKxycgn6c81LTV4kcd85oAdRRRQAUUUUAFFFFABRRRQAUUE4GTTQM8tn6ZxigB1HSk2+jH86No78n3oAC42kgg4HrQq4HPJ7mlKg9QD+FIvQj04oAWiiigAooooARerfWlpF7j3paACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBrBgwZQDxggnFCOHzjqDgiiORJUDxOrqejKcg0bCM7GxznBHFADqKYxlIwiqD6k8UAS7RuZM9wFP8AjQA+mP8AeoEq/wAXyn36fnTSdxyORQA5eFJNOUYUZpCPur706gAooooAKKKKACiiigAooooAKKKKACqWov8Audg6uQtXelZtw3mXoXtGufxNJuyKirsegwtOpBwKWuc2CiiigAooooAjIwaSnsMimhSaYDlPFOpAMUtIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCB+Jtw3fLzhe9T1Gv+ubNLFwpXBGw7ee9Ax9FFFAgooooAKKKKACiiigAooooAKQkKpJOAKWigBFYOuVOR60tFFABRRRQAUUUUAFRzY2Hd0xzUlMkwVwaAH6ZuFsA31HsKu1S0wk2/PIyQPoKu10LYwluwooopiCiiigAooooAKKKKACiiigAJxUecNkVIeeKioAlByM03O1unDHr6UqjCilIyMGgAopEOUUnniloAKZEB5anuwyT60+mRZ2YPRTgH1xQA+iiigApCyjuKT7/A+7396dtGMYwKAEDqe+PrS0gQCjDDocj3oAWik3j0OfTFHzN/sj9aAD7zew/nS0AYGBRQAUUUUAB4BpFGFGKG5IX16/SloAKKKKACiiigBBw59xS0h4YH8KWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA5RodWgsbaK2huI3jTIKE4LeYcgjIHTHXOc1cNlqD3AkNxeKHvZEZVk4WHDYIHbkDnrzW/RVcxNjmXi1ZYQkhvXCJKsJicBi+87C5zyNu3rx1zU32fVPPad5rjzFuoQI1f92UwgkOPT735V0FFHMOxyq2uo21okMK3QRbiUzYY5YFiUK4IOOecd6t2qalHqlv55nlTywJC3yKp2dcBiG56jGc9Ditw85btjApFGWo5gsZulQ6hY27jUbn7WxckSei4HH6GtNJd65UZ+hpyfdB9eagcSRs22MsBypUjI9RS3DYsAgjIoqobzDJ50Eke443dhVrJX73I9aQxaKKKACiiigAooooAKKKKAGucLWZAfMd5D/G2fw7Vbv5Clu2OpGB9TUEK7IwB2GKzm9LGkO5JRRRWRoFFFFABRRRQAUUUUAFFN3eo49adQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBE/wAsqt68GlZgsy5Jy/AGeOOc1HLIZSY4RlgRknoKmRdo5JJ65JzQMdRRRQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqpIRJdCKRtkZGev3vbNW6rXO0gLtDljhV9TQtwNKFUVAEGABwBUlQWcRht0Q8lRgmp66TnCiiigAooooAKKKKACiiigAooooAY/wB6kUZNLJ2pUHGaAHUUUUAN2Afd+U0u491OfalByOKKAE3EfeGB9aReHYfj/n8qdUcfEkg9CP5UASUh+Y4HTuaUnAyaRfu/jmgBaKKKACiiigAooooAKan3nH+1/SnU1vlcN2PB/pQA6kY4U4paQ/M2Ow5NAABj3Pc0tFFABRRRQAUUUUAIwypx17UoORkUUi8ZHoaAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAbhj1bHsBRtJ+8x/DinUUANK4YAEj8aCzDjqT0xSj75z17UtADW4QAUiDINEnanJ92gAU5UUtIvVvrS0AIyh1KsMg8EGq5gNsC9vkrjmJjkH6elWaKAIoJRJErjhW6Z7H0qWq0ts6u0ts21m+8h+61LbXPmArIpR16g9qALFFHWigAooooAKKKRjhTQBn3jb7iOPsMuf6U8cCoVPm3Ur9s7R9BU9YTd2bxVkFFFFSMKKKKACiikJA60ALTfvfT+dHLewp1ABTcbenT0p1FACA56UtIR3HB/nQDn2PpQAtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACE4GagCvccudqcgrjrUshxGx9qSBdtugwR8vQmgY9VVFCqAAOgFLRRQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAQnAqK0US3byddnyL9e9JcuyRkr16D2q3ZRJHAoX6n696uC1uTJ2RZHFFFFbGIUUUUAFFFFABRRRQAUUUUAFFFFADHz+FKn3acRkUAYHFABSMcKSKCwzgcn0FHzN6AfnQAowq+woDA9DSBAPf60EZ9j6igBajYiN9/8J4P9Kftz1JP1pAilmyB6UAGC2N3HtS4I6HPsaSP7nPOCR+Rp1ACBgeOh9DS0EA9Rmk2+hIP1oAWikB7Hg0tABRRRQAUdetFBOBk0AMz5ZA6qenqKcowOevekkUPhSPekWTHEhwc454zQA+iiigAooo+lABRQDn2I60UAFNPDj3p1NwGY5Gccc0AOopNg7cfSjJH3hn3AoAWigEHpRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAj9B9etKCD0OaKROhPqaAGvy1PztXntTBzJ+NKBuJJ9eKAFUYXnqeTS0UUAFFFFABVW8LQstzHzt+Vx6rVqkdQ6MrdGGDQABVIyB17jijBHRvzqG0ctBtb70ZKH3xU9ACZYdVz9DRvHfj68UtFABUN1J5UDN6DNS7B2GPpxVC/JJSLOdzc59BSeg0rsZbpsiXPXHP1qamKuR83T0p21f7o/Kuc3E5bnOB2oww6HP1p1FADcnuPyo3ex/KnUUAN5PXj6UoAHSlooAKKKKACiiigApCM0tFADc44b86dSdetJyvuP5UAOoo60UAFFFFABRRRQAUUUUAFFFFABRRRQBDdcwMME7uMA4qUDAAqKcbmjXGfmBPPSpqBhRRRQIKKKKACo4ZhMpKgjBwQakooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAI5VDLhhkHg0aaGKuwYlCcLnrxT2+7VaCV4boRR/MjnJX+771UXZikro16KTePf8jRvX1A+tbmAtFIGU9GH50tABRRRQAUUUUAFFFFABRRSFgOp59KAFpD8xwOnc0fMf9kfrSgYGBQAAYGBxRRRQAUUUUABOP6Cm52IzNz3OKE+b5u/8qcRkEHoaAEQbUAPXv8AWlpqttwr9ex9adQAUUUUABGetJnafmPHrS0UAJvX+8Pzo3DsCfwpaKAE3D6H3paOvWk2+hIoAaPlkwecjg+lOZQy4PSjYvcZPqeaaUVTkLx3FADciI4AyvoO1Sct1+UUjDdGQuORxSq25c4xQAZK/e6etLRSY28r07igBM7WOe5606mls4HQ5706gApE+6PfmjJY4HA9aUDAwKACiiigBCvORwaPm9R+VLRQAmG/vD8BR83oD+NLRQAm4/3T+Bo3DuD+VLRQAm9fUfjSg56UUm1T1UflQAtFJgr93kehoDA+x9DQAtFFFABRRRQAUUUUAFFFFABRRRQAUi8bvrS0wsF3BjjPI96ABOpNOT7v15poGV2+vX6U+gAooooAKKKKACiiigCvu+z3RBXCTHII7N/9erFRzQiZR8xUjkEdjSW8jurLKAHRtpx396AJaKKKAAnANZjnzL1z2QBR9e9aEz7IyT0AzWbbAlN56sSx/Gom9C4LW5YooorE1CiiigAooooAKKKKACiiigAooooAKKKKACiiigBuMcr+VKDmlpCM8jg0ALRSA9jwaWgAooooAKKKKACiiigAooooAhcbrqP5chQTnPQ/5NTVCgzduxXouA2f8+lTUDCiiigQUUUUAFFFFABRRRQAUx9+V2Yxn5s+lPooAKKKKACiiigAooooAKKKKACiiigBrjIqPTmwzxlcsDy+etEzOEOxcnsKk04x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'

  // 10, 40, 195, 76
  // doc.addImage(imgData, 'JPEG', 10, 35, 195, 80, undefined);
  doc.addImage(statsData, 'JPEG', 105, 123, 85, 60, undefined);
  doc.addImage(mapData, 'JPEG', 105, 188, 97, 76, undefined);
  // console.log(imgData);
  console.log(mapData);

  //ADD A DESCRIPTION

  doc.setFont("Arial");
  doc.setFontType("normal");
  doc.setFontSize(8);
  doc.text(95, 275, 'Page 1 of 1');

  //
  // doc.addPage();
  // doc.setPage(2);
  //
  // doc.setFontSize(10);
  // doc.setFontType("light");
  // doc.setFont("Arial");
  // doc.text(10, 5, 'DataXLat @ Geoadaptive LLC.');
  // doc.text(150, 5, '250 Summer St, Boston, MA, USA');
  // //DIVIDING LINE
  // doc.setLineWidth(1);
  // doc.setDrawColor(133,193,233);
  // doc.line(0, 8, 240, 8);



  doc.save('Analysis Report.pdf');
  console.log("INTRODUCTORY PROFILE");
};


var tableToPDF2 = function(){
  var doc = new jsPDF("1", "", "letter");
  var pageHeight = doc.internal.pageSize.height;
  var pageWidth = doc.internal.pageSize.width;
  console.log(pageHeight);
  console.log(pageWidth);


  //construct the PDF for profile
  doc.setFontSize(10);
  doc.setFontType("light");
  doc.setFont("inherit");
  doc.text(10, 5, 'DataXLat | Geoadaptive LLC.');
  doc.text(150,5, '250 Summer St, Boston, MA, USA');
  //DIVIDING LINE
  doc.setLineWidth(1);
  doc.setDrawColor(133,193,233);
  doc.line(0, 8, 240, 8);



  doc.setFont("times");
  doc.setFontSize(18);
  doc.setFontType("bold");
  doc.text(10, 18, 'Infrastructure Efficiency Profile of ');
  doc.setTextColor(133,193,233);
  // doc.text(110, 18, ' ' + P_muni);
  // doc.text(20, 30, '     ');

  //INTRO
  doc.setFont("times");
  doc.setFontType("normal");
  doc.setFontSize(12);
  doc.setTextColor(0,0,0);
  doc.text(10, 30, 'Following is a brief summary of infrastructure efficiency condition in ');
  // doc.text(10, 36, '' + P_muni + ', department of ' + P_department + ', in ' + P_country + '.');
  // doc.text(10, 50, 'this City of ' + P_muni + ' is selected.');



  doc.save('INTERMEDIATE ANALYSIS.pdf');
  console.log("INTERMEDIATE ANALYSIS");
};


var tableToPDF3 = function(){
  var doc = new jsPDF("1", "", "letter");
  var pageHeight = doc.internal.pageSize.height;
  var pageWidth = doc.internal.pageSize.width;
  console.log(pageHeight);
  console.log(pageWidth);
  doc.save('Introductory Analysis.pdf');
  console.log("PDF ready");


  //construct the PDF for profile
  doc.setFontSize(10);
  doc.setFontType("light");
  doc.setFont("inherit");
  doc.text(10, 5, 'DataXLat | Geoadaptive LLC.');
  doc.text(150,5, '250 Summer St, Boston, MA, USA');
  //DIVIDING LINE
  doc.setLineWidth(1);
  doc.setDrawColor(255,140,40);
  doc.line(0, 8, 240, 8);

  doc.setFont("times");
  doc.setFontSize(18);
  doc.setFontType("bold");
  doc.text(10, 18, 'Infrastructure Efficiency Profile of ');
  doc.setTextColor(255,140,40);
  // doc.text(110, 18, ' ' + P_muni);
  // doc.text(20, 30, '     ');

  //INTRO
  doc.setFont("times");
  doc.setFontType("normal");
  doc.setFontSize(12);
  doc.setTextColor(0,0,0);
  doc.text(10, 30, 'Following is a brief summary of infrastructure efficiency condition in ');
  // doc.text(10, 36, '' + P_muni + ', department of ' + P_department + ', in ' + P_country + '.');
  // doc.text(10, 50, 'this City of ' + P_muni + ' is selected.');


  doc.save('ADVANCED ANALYSIS.pdf');
  console.log("ADVANCED ANALYSIS");
};
