var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.jpg'
            })
        });
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                popuplayertitle: "COMMUNE",
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_1.png" /> COMMUNE'
            });
var format_Parcelles_4_communes_2 = new ol.format.GeoJSON();
var features_Parcelles_4_communes_2 = format_Parcelles_4_communes_2.readFeatures(json_Parcelles_4_communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_4_communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_4_communes_2.addFeatures(features_Parcelles_4_communes_2);
var lyr_Parcelles_4_communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_4_communes_2, 
                style: style_Parcelles_4_communes_2,
                popuplayertitle: "Parcelles_4_communes",
                interactive: true,
                title: '<img src="styles/legend/Parcelles_4_communes_2.png" /> Parcelles_4_communes'
            });
var format_Nom_communes_3 = new ol.format.GeoJSON();
var features_Nom_communes_3 = format_Nom_communes_3.readFeatures(json_Nom_communes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nom_communes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nom_communes_3.addFeatures(features_Nom_communes_3);
var lyr_Nom_communes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nom_communes_3, 
                style: style_Nom_communes_3,
                popuplayertitle: "Nom_communes",
                interactive: true,
                title: 'Nom_communes'
            });
var format_PC_4_communes_4 = new ol.format.GeoJSON();
var features_PC_4_communes_4 = format_PC_4_communes_4.readFeatures(json_PC_4_communes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PC_4_communes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PC_4_communes_4.addFeatures(features_PC_4_communes_4);
var lyr_PC_4_communes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PC_4_communes_4, 
                style: style_PC_4_communes_4,
                popuplayertitle: "PC_4_communes",
                interactive: true,
                title: '<img src="styles/legend/PC_4_communes_4.png" /> PC_4_communes'
            });
var format_PC_4_communes_5ans_5 = new ol.format.GeoJSON();
var features_PC_4_communes_5ans_5 = format_PC_4_communes_5ans_5.readFeatures(json_PC_4_communes_5ans_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PC_4_communes_5ans_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PC_4_communes_5ans_5.addFeatures(features_PC_4_communes_5ans_5);
var lyr_PC_4_communes_5ans_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PC_4_communes_5ans_5, 
                style: style_PC_4_communes_5ans_5,
                popuplayertitle: "PC_4_communes_<5ans",
                interactive: true,
                title: '<img src="styles/legend/PC_4_communes_5ans_5.png" /> PC_4_communes_<5ans'
            });

lyr_Positron_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_Parcelles_4_communes_2.setVisible(true);lyr_Nom_communes_3.setVisible(true);lyr_PC_4_communes_4.setVisible(true);lyr_PC_4_communes_5ans_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_COMMUNE_1,lyr_Parcelles_4_communes_2,lyr_Nom_communes_3,lyr_PC_4_communes_4,lyr_PC_4_communes_5ans_5];
lyr_COMMUNE_1.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'CODE_DEP': 'CODE_DEP', 'CODE_INSEE': 'CODE_INSEE', });
lyr_Parcelles_4_communes_2.set('fieldAliases', {'fid': 'fid', 'IDU': 'IDU', 'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', 'CONTENANCE': 'CONTENANCE', 'layer': 'layer', 'path': 'path', });
lyr_Nom_communes_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_PC_4_communes_4.set('fieldAliases', {'fid': 'fid', 'IDU': 'IDU', 'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', 'CONTENANCE': 'CONTENANCE', 'layer': 'layer', 'path': 'path', });
lyr_PC_4_communes_5ans_5.set('fieldAliases', {'fid': 'fid', 'IDU': 'IDU', 'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', 'CONTENANCE': 'CONTENANCE', 'layer': 'layer', 'path': 'path', });
lyr_COMMUNE_1.set('fieldImages', {'NOM_COM': 'TextEdit', 'CODE_DEP': 'TextEdit', 'CODE_INSEE': 'TextEdit', });
lyr_Parcelles_4_communes_2.set('fieldImages', {'fid': 'TextEdit', 'IDU': 'TextEdit', 'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CONTENANCE': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Nom_communes_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_PC_4_communes_4.set('fieldImages', {'fid': 'TextEdit', 'IDU': 'TextEdit', 'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CONTENANCE': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PC_4_communes_5ans_5.set('fieldImages', {'fid': 'TextEdit', 'IDU': 'TextEdit', 'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CONTENANCE': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_COMMUNE_1.set('fieldLabels', {'NOM_COM': 'no label', 'CODE_DEP': 'no label', 'CODE_INSEE': 'no label', });
lyr_Parcelles_4_communes_2.set('fieldLabels', {'fid': 'no label', 'IDU': 'no label', 'NUMERO': 'no label', 'FEUILLE': 'no label', 'SECTION': 'no label', 'CODE_DEP': 'no label', 'NOM_COM': 'no label', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', 'CONTENANCE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Nom_communes_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_PC_4_communes_4.set('fieldLabels', {'fid': 'no label', 'IDU': 'inline label - always visible', 'NUMERO': 'no label', 'FEUILLE': 'inline label - always visible', 'SECTION': 'inline label - always visible', 'CODE_DEP': 'no label', 'NOM_COM': 'inline label - always visible', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', 'CONTENANCE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PC_4_communes_5ans_5.set('fieldLabels', {'fid': 'no label', 'IDU': 'inline label - always visible', 'NUMERO': 'no label', 'FEUILLE': 'inline label - always visible', 'SECTION': 'inline label - always visible', 'CODE_DEP': 'no label', 'NOM_COM': 'inline label - always visible', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', 'CONTENANCE': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PC_4_communes_5ans_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});