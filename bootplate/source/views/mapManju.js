enyo.kind({
    name:"mapManju",
    components:[
        {
            kind:"Button",
            content:"click me!!!!!!!",
            ontap:"showMe"
        },
      
        {                            
            components:[
            {
            name:"mapdiv",
            style:"width:50%;height:500px;margin-top:20px"
        },
        {
            name:"details"
        }
        ]
        }

    ],
    rendered:function(){
        var mapid=this.$.mapdiv.id;
        mymap = L.map(mapid, {
           center: [-6.081689,145.391881],
           zoom: 10,
       });
      
 
       L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
           attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
           maxZoom: 18,
           id: 'mapbox.streets',
           accessToken: 'sk.eyJ1IjoiYmluZHVwcmF2ZWVuYSIsImEiOiJjam9oNHFvanowa2NkM3BydzUwYXRwbW5lIn0.3lbBo9WPOPosVoR6IuLYgA'
       }).addTo(mymap);
       var popup = L.popup();

function onMapClick(e) {
  
    // popup.setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(mymap);
        L.marker([e.latlng.lat,e.latlng.lng]).addTo(mymap);
       self.details.setContent("You clicked the map at " + e.latlng.toString())
}
mymap.on('click', onMapClick);   
       var request = new enyo.Ajax({url: "details.json"});
       request.response(this, function (inSender, inData) {
        this.items = inData;
       })
       request.go();
    //    for(var i=0;i<this.items.length;i++){
    //     L.marker([this.items.lat,this.items.lng]).addTo(mymap);
    //    }
    },
    showMe:function(){
       var items= this.items;
       var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity:1,
        radius: 500
    }).bindPopup("i am a circle").addTo(mymap);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ],{fillOpacity:1,
        color: 'blue',
        fillColor: 'blue',
    }).bindPopup("i am a polygon").addTo(mymap);
        for(var i=0;i<items.length;i++){
            popup="name:"+items[i].name  +"      "+"city:"+items[i].city;
        
             var m=L.marker([items[i].lat,items[i].lng]).addTo(mymap).bindPopup(popup);
             m.on('mouseover',function(e){
                this.openPopup();
            });
            m.on('mouseout',function(e){
                this.closePopup();
            });

               }
    }
})

