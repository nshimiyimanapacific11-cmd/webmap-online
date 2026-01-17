ol.proj.proj4.register(proj4);
//ol.proj.get("USER:100000").setExtent([453608.445300, 4702234.414700, 482749.179300, 4738418.544100]);
var wms_layers = [];

var format_ADMINSTRATIVE_BOUNDARY_0 = new ol.format.GeoJSON();
var features_ADMINSTRATIVE_BOUNDARY_0 = format_ADMINSTRATIVE_BOUNDARY_0.readFeatures(json_ADMINSTRATIVE_BOUNDARY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_ADMINSTRATIVE_BOUNDARY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINSTRATIVE_BOUNDARY_0.addFeatures(features_ADMINSTRATIVE_BOUNDARY_0);
var lyr_ADMINSTRATIVE_BOUNDARY_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINSTRATIVE_BOUNDARY_0, 
                style: style_ADMINSTRATIVE_BOUNDARY_0,
                popuplayertitle: 'ADMINSTRATIVE_BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/ADMINSTRATIVE_BOUNDARY_0.png" /> ADMINSTRATIVE_BOUNDARY'
            });
var format_HUYE_SECTOR_1 = new ol.format.GeoJSON();
var features_HUYE_SECTOR_1 = format_HUYE_SECTOR_1.readFeatures(json_HUYE_SECTOR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_HUYE_SECTOR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUYE_SECTOR_1.addFeatures(features_HUYE_SECTOR_1);
var lyr_HUYE_SECTOR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUYE_SECTOR_1, 
                style: style_HUYE_SECTOR_1,
                popuplayertitle: 'HUYE_SECTOR',
                interactive: true,
                title: '<img src="styles/legend/HUYE_SECTOR_1.png" /> HUYE_SECTOR'
            });
var format_PROPOSED_ROAD_2 = new ol.format.GeoJSON();
var features_PROPOSED_ROAD_2 = format_PROPOSED_ROAD_2.readFeatures(json_PROPOSED_ROAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_PROPOSED_ROAD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSED_ROAD_2.addFeatures(features_PROPOSED_ROAD_2);
var lyr_PROPOSED_ROAD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPOSED_ROAD_2, 
                style: style_PROPOSED_ROAD_2,
                popuplayertitle: 'PROPOSED_ROAD',
                interactive: true,
                title: '<img src="styles/legend/PROPOSED_ROAD_2.png" /> PROPOSED_ROAD'
            });
var format_PROPOSED_HEALTH_FACILITIES_3 = new ol.format.GeoJSON();
var features_PROPOSED_HEALTH_FACILITIES_3 = format_PROPOSED_HEALTH_FACILITIES_3.readFeatures(json_PROPOSED_HEALTH_FACILITIES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_PROPOSED_HEALTH_FACILITIES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSED_HEALTH_FACILITIES_3.addFeatures(features_PROPOSED_HEALTH_FACILITIES_3);
var lyr_PROPOSED_HEALTH_FACILITIES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPOSED_HEALTH_FACILITIES_3, 
                style: style_PROPOSED_HEALTH_FACILITIES_3,
                popuplayertitle: 'PROPOSED_HEALTH_FACILITIES',
                interactive: true,
                title: '<img src="styles/legend/PROPOSED_HEALTH_FACILITIES_3.png" /> PROPOSED_HEALTH_FACILITIES'
            });
var format_ExISTING_ROADS_4 = new ol.format.GeoJSON();
var features_ExISTING_ROADS_4 = format_ExISTING_ROADS_4.readFeatures(json_ExISTING_ROADS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_ExISTING_ROADS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExISTING_ROADS_4.addFeatures(features_ExISTING_ROADS_4);
var lyr_ExISTING_ROADS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExISTING_ROADS_4, 
                style: style_ExISTING_ROADS_4,
                popuplayertitle: 'ExISTING_ROADS',
                interactive: true,
                title: '<img src="styles/legend/ExISTING_ROADS_4.png" /> ExISTING_ROADS'
            });
var format_EXISTING_HEALTH_FACILITIES_5 = new ol.format.GeoJSON();
var features_EXISTING_HEALTH_FACILITIES_5 = format_EXISTING_HEALTH_FACILITIES_5.readFeatures(json_EXISTING_HEALTH_FACILITIES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_EXISTING_HEALTH_FACILITIES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXISTING_HEALTH_FACILITIES_5.addFeatures(features_EXISTING_HEALTH_FACILITIES_5);
var lyr_EXISTING_HEALTH_FACILITIES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXISTING_HEALTH_FACILITIES_5, 
                style: style_EXISTING_HEALTH_FACILITIES_5,
                popuplayertitle: 'EXISTING_HEALTH_FACILITIES',
                interactive: true,
                title: '<img src="styles/legend/EXISTING_HEALTH_FACILITIES_5.png" /> EXISTING_HEALTH_FACILITIES'
            });

lyr_ADMINSTRATIVE_BOUNDARY_0.setVisible(true);lyr_HUYE_SECTOR_1.setVisible(true);lyr_PROPOSED_ROAD_2.setVisible(true);lyr_PROPOSED_HEALTH_FACILITIES_3.setVisible(true);lyr_ExISTING_ROADS_4.setVisible(true);lyr_EXISTING_HEALTH_FACILITIES_5.setVisible(true);
var layersList = [lyr_ADMINSTRATIVE_BOUNDARY_0,lyr_HUYE_SECTOR_1,lyr_PROPOSED_ROAD_2,lyr_PROPOSED_HEALTH_FACILITIES_3,lyr_ExISTING_ROADS_4,lyr_EXISTING_HEALTH_FACILITIES_5];
lyr_ADMINSTRATIVE_BOUNDARY_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMDISTR': 'NOMDISTR', 'PROV': 'PROV', 'AREA_KM_': 'AREA_KM_', 'DISTR_ID': 'DISTR_ID', 'DISTR_NAME': 'DISTR_NAME', 'PERIMETER': 'PERIMETER', 'POP_02': 'POP_02', 'Area_sqkm': 'Area_sqkm', 'Pop_Densit': 'Pop_Densit', 'Pop_Dens_1': 'Pop_Dens_1', 'DisArea_m2': 'DisArea_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HUYE_SECTOR_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'COD_SECT05': 'COD_SECT05', 'NOMSECT': 'NOMSECT', 'AREA_KMÃ½': 'AREA_KMÃ½', 'REGION': 'REGION', 'DISTR': 'DISTR', 'SECT_NAME': 'SECT_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_PROPOSED_ROAD_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Length_km_': 'Length_km_', });
lyr_PROPOSED_HEALTH_FACILITIES_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'X': 'X', 'Y': 'Y', });
lyr_ExISTING_ROADS_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'objectid_2': 'objectid_2', 'road_no': 'road_no', 'settlement': 'settlement', 'new_id': 'new_id', 'class': 'class', 'status': 'status', 'district': 'district', 'commentsdi': 'commentsdi', 'type': 'type', 'source': 'source', 'capture': 'capture', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'shape_Leng': 'shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_EXISTING_HEALTH_FACILITIES_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'objectid': 'objectid', 'layer': 'layer', 'district': 'district', 'name': 'name', 'type': 'type', 'sector': 'sector', 'cell': 'cell', 'village': 'village', 'lat': 'lat', 'long': 'long', 'comments': 'comments', 'source': 'source', 'capture': 'capture', 'globalid': 'globalid', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_ADMINSTRATIVE_BOUNDARY_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMDISTR': 'TextEdit', 'PROV': 'TextEdit', 'AREA_KM_': 'TextEdit', 'DISTR_ID': 'TextEdit', 'DISTR_NAME': 'TextEdit', 'PERIMETER': 'TextEdit', 'POP_02': 'TextEdit', 'Area_sqkm': 'TextEdit', 'Pop_Densit': 'Range', 'Pop_Dens_1': 'TextEdit', 'DisArea_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HUYE_SECTOR_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD_SECT05': 'TextEdit', 'NOMSECT': 'TextEdit', 'AREA_KMÃ½': 'TextEdit', 'REGION': 'TextEdit', 'DISTR': 'TextEdit', 'SECT_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PROPOSED_ROAD_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Length_km_': 'TextEdit', });
lyr_PROPOSED_HEALTH_FACILITIES_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ExISTING_ROADS_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'objectid_2': 'TextEdit', 'road_no': 'TextEdit', 'settlement': 'TextEdit', 'new_id': 'TextEdit', 'class': 'TextEdit', 'status': 'TextEdit', 'district': 'TextEdit', 'commentsdi': 'TextEdit', 'type': 'TextEdit', 'source': 'TextEdit', 'capture': 'TextEdit', 'globalid': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', });
lyr_EXISTING_HEALTH_FACILITIES_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'objectid': 'TextEdit', 'layer': 'TextEdit', 'district': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'sector': 'TextEdit', 'cell': 'TextEdit', 'village': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'comments': 'TextEdit', 'source': 'TextEdit', 'capture': 'TextEdit', 'globalid': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_ADMINSTRATIVE_BOUNDARY_0.set('fieldLabels', {'OBJECTID': 'no label', 'NOMDISTR': 'no label', 'PROV': 'no label', 'AREA_KM_': 'no label', 'DISTR_ID': 'no label', 'DISTR_NAME': 'inline label - visible with data', 'PERIMETER': 'no label', 'POP_02': 'no label', 'Area_sqkm': 'no label', 'Pop_Densit': 'no label', 'Pop_Dens_1': 'no label', 'DisArea_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_HUYE_SECTOR_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'COD_SECT05': 'no label', 'NOMSECT': 'no label', 'AREA_KMÃ½': 'no label', 'REGION': 'no label', 'DISTR': 'no label', 'SECT_NAME': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_PROPOSED_ROAD_2.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Length_km_': 'inline label - visible with data', });
lyr_PROPOSED_HEALTH_FACILITIES_3.set('fieldLabels', {'OBJECTID': 'no label', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_ExISTING_ROADS_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'objectid_2': 'no label', 'road_no': 'no label', 'settlement': 'no label', 'new_id': 'no label', 'class': 'no label', 'status': 'inline label - visible with data', 'district': 'no label', 'commentsdi': 'no label', 'type': 'no label', 'source': 'no label', 'capture': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', });
lyr_EXISTING_HEALTH_FACILITIES_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'objectid': 'no label', 'layer': 'no label', 'district': 'inline label - visible with data', 'name': 'no label', 'type': 'inline label - visible with data', 'sector': 'no label', 'cell': 'no label', 'village': 'no label', 'lat': 'no label', 'long': 'no label', 'comments': 'no label', 'source': 'no label', 'capture': 'no label', 'globalid': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'header label - visible with data', 'last_edi_1': 'no label', });
lyr_EXISTING_HEALTH_FACILITIES_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});