enyo.kind({
    name: "maps",

    array: [],
    components: [{
            name: "mapDiv",
            style: "width:70%;height:90%;",
        },
        {
            kind: "Button",
            content: "Click Me!!!!!!!",
            ontap: "showMe"
        },
        {
            name: "details",
            allowHtml:true
        },
        {
            kind:"Button",
            content:"Click Here (for Scroll Bar)",
            ontap:"scrollBar"
        },
        {
            name:"scroll",
            allowHtml:true  
        }

    ],

    rendered: function() {
        var self = this;

        var mapid = this.$.mapDiv.id;

        mymap = L.map(mapid, {
            center: [17.795482, 83.382683],
            zoom: 10,
        });
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoicHR2a21hbmphcmk0IiwiYSI6ImNqb2prdmU4eTA1cnYza3Jwb2V2bnU5N2IifQ.MssXnz2jA0fKs9XtdXg65w'
        }).addTo(mymap);
        var marker = L.marker([17.795482, 83.382683]).addTo(mymap);
        var circle = L.circle([17.793990, 83.389484], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);


        var polygon = L.polygon([
            [17.802481, 83.360861],
            [17.808712, 83.372877],
            [17.812083, 83.359852]
        ]).addTo(mymap);
        marker.bindPopup("Hello Iam Marker");

        var popup = L.popup();

        function onMapClick(e) {

            dynamicMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
            self.array.push(L.marker([e.latlng.lat, e.latlng.lng]));

            dynamicMarker.on('dblclick', function(e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent(e.latlng.toString())
                    .openOn(mymap);

            })
            dynamicMarker.on('click', function(e) {
                var tempMarker = this;
                mymap.removeLayer(tempMarker);
            })
        }

        var littleton = L.marker([17.802481, 83.360861]).bindPopup('This is Littleton, CO.'),
            denver = L.marker([17.808712, 83.372877]).bindPopup('This is Denver, CO.'),
            aurora = L.marker([17.812083, 83.359852]).bindPopup('This is Aurora, CO.');

        L.layerGroup([littleton, denver, aurora]).addTo(mymap);

        mymap.on('click', onMapClick);

        


    },
    showMe: function() {
        for (var i = 0; i < this.items.length; i++) {
            detailsMarker = L.marker([this.items[i].lat, this.items[i].lng]).addTo(mymap);
        }
        var self = this;
        self.tableId="tables";

        var datarray = [],
            display;
        var displaydata;
        self.$.details.setContent("<table id='"+self.tableId+"'>DataTable</table>")
        for (let j = 0; j < self.items.length; j++) {

            var options = '<input type="checkbox" name="checkbox" id=' + j + '>';
            // console.log(options.id);
            displaydata = [options, self.items[j].name, self.items[j].lat, self.items[j].lng];
            // displaydata.id = j;
            datarray.push(displaydata);
            display = datarray;
        }

        var coldefs = [{
                data: 'name',
                targets:'0'
            },
            {
                data: 'lat',
                targets:'1'
            },
            {
                data: 'lng',
                targets:'2'
            }
        ]
        // var coldefs=[{
        //     "targets":'_all',
        //     "render":$.fn.dataTable.render.text()
        // }]
        // var table = $('#' + self.tableId).DataTable();
        $('#' + self.tableId).DataTable({
            data: display,
            columnDefs: coldefs,
            "fnCreatedRow": function(nRow, aData) {
                $(nRow).attr('row_id', "jhgdjgh");
                
                }
        }).rows.add(display).draw();
        },
        
        scrollBar: function(){
            var self = this;
            self.$.scroll.setContent("<div id='container'></div>");
            var container=$("#container");
            for (var i = 0; i < 100; i++) {
                container.append("<p>"+i+"</p>");
            }
            $('#container').mCustomScrollbar({
                theme:"dark-3"        
        });
        }
        
    

});