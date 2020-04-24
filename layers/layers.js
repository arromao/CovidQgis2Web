var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Brasil_0 = new ol.format.GeoJSON();
var features_Brasil_0 = format_Brasil_0.readFeatures(json_Brasil_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brasil_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Brasil_0.addFeatures(features_Brasil_0);var lyr_Brasil_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Brasil_0, 
                style: style_Brasil_0,
                title: '<img src="styles/legend/Brasil_0.png" /> Brasil'
            });var format_Semana09_1 = new ol.format.GeoJSON();
var features_Semana09_1 = format_Semana09_1.readFeatures(json_Semana09_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana09_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana09_1.addFeatures(features_Semana09_1);var lyr_Semana09_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana09_1, 
                style: style_Semana09_1,
                title: '<img src="styles/legend/Semana09_1.png" /> Semana09'
            });var format_Semana10_2 = new ol.format.GeoJSON();
var features_Semana10_2 = format_Semana10_2.readFeatures(json_Semana10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana10_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana10_2.addFeatures(features_Semana10_2);var lyr_Semana10_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana10_2, 
                style: style_Semana10_2,
                title: '<img src="styles/legend/Semana10_2.png" /> Semana10'
            });var format_Semana11_3 = new ol.format.GeoJSON();
var features_Semana11_3 = format_Semana11_3.readFeatures(json_Semana11_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana11_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana11_3.addFeatures(features_Semana11_3);var lyr_Semana11_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana11_3, 
                style: style_Semana11_3,
                title: '<img src="styles/legend/Semana11_3.png" /> Semana11'
            });var format_Semana12_4 = new ol.format.GeoJSON();
var features_Semana12_4 = format_Semana12_4.readFeatures(json_Semana12_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana12_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana12_4.addFeatures(features_Semana12_4);var lyr_Semana12_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana12_4, 
                style: style_Semana12_4,
                title: '<img src="styles/legend/Semana12_4.png" /> Semana12'
            });var format_Semana13_5 = new ol.format.GeoJSON();
var features_Semana13_5 = format_Semana13_5.readFeatures(json_Semana13_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana13_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana13_5.addFeatures(features_Semana13_5);var lyr_Semana13_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana13_5, 
                style: style_Semana13_5,
                title: '<img src="styles/legend/Semana13_5.png" /> Semana13'
            });var format_Semana14_6 = new ol.format.GeoJSON();
var features_Semana14_6 = format_Semana14_6.readFeatures(json_Semana14_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana14_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana14_6.addFeatures(features_Semana14_6);var lyr_Semana14_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana14_6, 
                style: style_Semana14_6,
                title: '<img src="styles/legend/Semana14_6.png" /> Semana14'
            });var format_Semana15_7 = new ol.format.GeoJSON();
var features_Semana15_7 = format_Semana15_7.readFeatures(json_Semana15_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana15_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana15_7.addFeatures(features_Semana15_7);var lyr_Semana15_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana15_7, 
                style: style_Semana15_7,
                title: '<img src="styles/legend/Semana15_7.png" /> Semana15'
            });var format_Semana16_8 = new ol.format.GeoJSON();
var features_Semana16_8 = format_Semana16_8.readFeatures(json_Semana16_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semana16_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semana16_8.addFeatures(features_Semana16_8);var lyr_Semana16_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semana16_8, 
                style: style_Semana16_8,
                title: '<img src="styles/legend/Semana16_8.png" /> Semana16'
            });

lyr_Brasil_0.setVisible(true);lyr_Semana09_1.setVisible(true);lyr_Semana10_2.setVisible(true);lyr_Semana11_3.setVisible(true);lyr_Semana12_4.setVisible(true);lyr_Semana13_5.setVisible(true);lyr_Semana14_6.setVisible(true);lyr_Semana15_7.setVisible(true);lyr_Semana16_8.setVisible(true);
var layersList = [baseLayer,lyr_Brasil_0,lyr_Semana09_1,lyr_Semana10_2,lyr_Semana11_3,lyr_Semana12_4,lyr_Semana13_5,lyr_Semana14_6,lyr_Semana15_7,lyr_Semana16_8];
lyr_Brasil_0.set('fieldAliases', {'NM_ESTADO': 'NM_ESTADO', 'NM_REGIAO': 'NM_REGIAO', 'CD_GEOCUF': 'CD_GEOCUF', 'UF': 'UF', 'Casos': 'Casos', 'Óbitos': 'Óbitos', 'Data': 'Data', });
lyr_Semana09_1.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana10_2.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana11_3.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana12_4.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana13_5.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana14_6.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana15_7.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Semana16_8.set('fieldAliases', {'NM_MUNICIP': 'NM_MUNICIP', 'CD_GEOCMU': 'CD_GEOCMU', 'Casos': 'Casos', 'Óbitos': 'Óbitos', });
lyr_Brasil_0.set('fieldImages', {'NM_ESTADO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_GEOCUF': 'TextEdit', 'UF': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', 'Data': 'TextEdit', });
lyr_Semana09_1.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana10_2.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana11_3.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana12_4.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana13_5.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana14_6.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana15_7.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Semana16_8.set('fieldImages', {'NM_MUNICIP': 'TextEdit', 'CD_GEOCMU': 'TextEdit', 'Casos': 'TextEdit', 'Óbitos': 'TextEdit', });
lyr_Brasil_0.set('fieldLabels', {'NM_ESTADO': 'no label', 'NM_REGIAO': 'no label', 'CD_GEOCUF': 'no label', 'UF': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', 'Data': 'inline label', });
lyr_Semana09_1.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana10_2.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana11_3.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana12_4.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana13_5.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana14_6.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana15_7.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana16_8.set('fieldLabels', {'NM_MUNICIP': 'no label', 'CD_GEOCMU': 'no label', 'Casos': 'inline label', 'Óbitos': 'inline label', });
lyr_Semana16_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});