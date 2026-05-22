var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Onsitesubstation_1 = new ol.format.GeoJSON();
var features_Onsitesubstation_1 = format_Onsitesubstation_1.readFeatures(json_Onsitesubstation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onsitesubstation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onsitesubstation_1.addFeatures(features_Onsitesubstation_1);
var lyr_Onsitesubstation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onsitesubstation_1, 
                style: style_Onsitesubstation_1,
                popuplayertitle: 'Onsite substation',
                interactive: true,
                title: '<img src="styles/legend/Onsitesubstation_1.png" /> Onsite substation'
            });
var format_Sitecompound_2 = new ol.format.GeoJSON();
var features_Sitecompound_2 = format_Sitecompound_2.readFeatures(json_Sitecompound_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitecompound_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitecompound_2.addFeatures(features_Sitecompound_2);
var lyr_Sitecompound_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitecompound_2, 
                style: style_Sitecompound_2,
                popuplayertitle: 'Site compound',
                interactive: true,
                title: '<img src="styles/legend/Sitecompound_2.png" /> Site compound'
            });
var format_Accesstracks_3 = new ol.format.GeoJSON();
var features_Accesstracks_3 = format_Accesstracks_3.readFeatures(json_Accesstracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesstracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesstracks_3.addFeatures(features_Accesstracks_3);
var lyr_Accesstracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesstracks_3, 
                style: style_Accesstracks_3,
                popuplayertitle: 'Access tracks',
                interactive: true,
                title: '<img src="styles/legend/Accesstracks_3.png" /> Access tracks'
            });
var format_ScopingTurbinelayout_4 = new ol.format.GeoJSON();
var features_ScopingTurbinelayout_4 = format_ScopingTurbinelayout_4.readFeatures(json_ScopingTurbinelayout_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScopingTurbinelayout_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScopingTurbinelayout_4.addFeatures(features_ScopingTurbinelayout_4);
var lyr_ScopingTurbinelayout_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScopingTurbinelayout_4, 
                style: style_ScopingTurbinelayout_4,
                popuplayertitle: 'Scoping Turbine layout',
                interactive: true,
                title: '<img src="styles/legend/ScopingTurbinelayout_4.png" /> Scoping Turbine layout'
            });
var format_ProjectBoundary_5 = new ol.format.GeoJSON();
var features_ProjectBoundary_5 = format_ProjectBoundary_5.readFeatures(json_ProjectBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectBoundary_5.addFeatures(features_ProjectBoundary_5);
var lyr_ProjectBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectBoundary_5, 
                style: style_ProjectBoundary_5,
                popuplayertitle: 'Project Boundary',
                interactive: true,
                title: '<img src="styles/legend/ProjectBoundary_5.png" /> Project Boundary'
            });
var format_SiteAccessPoint_6 = new ol.format.GeoJSON();
var features_SiteAccessPoint_6 = format_SiteAccessPoint_6.readFeatures(json_SiteAccessPoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteAccessPoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteAccessPoint_6.addFeatures(features_SiteAccessPoint_6);
var lyr_SiteAccessPoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteAccessPoint_6, 
                style: style_SiteAccessPoint_6,
                popuplayertitle: 'Site Access Point',
                interactive: true,
                title: '<img src="styles/legend/SiteAccessPoint_6.png" /> Site Access Point'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Onsitesubstation_1.setVisible(true);lyr_Sitecompound_2.setVisible(true);lyr_Accesstracks_3.setVisible(true);lyr_ScopingTurbinelayout_4.setVisible(true);lyr_ProjectBoundary_5.setVisible(true);lyr_SiteAccessPoint_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Onsitesubstation_1,lyr_Sitecompound_2,lyr_Accesstracks_3,lyr_ScopingTurbinelayout_4,lyr_ProjectBoundary_5,lyr_SiteAccessPoint_6];
lyr_Onsitesubstation_1.set('fieldAliases', {'Descriptio': 'Descriptio', });
lyr_Sitecompound_2.set('fieldAliases', {'Descriptio': 'Descriptio', });
lyr_Accesstracks_3.set('fieldAliases', {});
lyr_ScopingTurbinelayout_4.set('fieldAliases', {});
lyr_ProjectBoundary_5.set('fieldAliases', {'Descriptio': 'Descriptio', });
lyr_SiteAccessPoint_6.set('fieldAliases', {'Descriptio': 'Descriptio', });
lyr_Onsitesubstation_1.set('fieldImages', {'Descriptio': 'TextEdit', });
lyr_Sitecompound_2.set('fieldImages', {'Descriptio': '', });
lyr_Accesstracks_3.set('fieldImages', {});
lyr_ScopingTurbinelayout_4.set('fieldImages', {});
lyr_ProjectBoundary_5.set('fieldImages', {'Descriptio': 'TextEdit', });
lyr_SiteAccessPoint_6.set('fieldImages', {'Descriptio': 'TextEdit', });
lyr_Onsitesubstation_1.set('fieldLabels', {'Descriptio': 'no label', });
lyr_Sitecompound_2.set('fieldLabels', {'Descriptio': 'inline label - always visible', });
lyr_Accesstracks_3.set('fieldLabels', {});
lyr_ScopingTurbinelayout_4.set('fieldLabels', {});
lyr_ProjectBoundary_5.set('fieldLabels', {'Descriptio': 'no label', });
lyr_SiteAccessPoint_6.set('fieldLabels', {'Descriptio': 'no label', });
lyr_SiteAccessPoint_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});