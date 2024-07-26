var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prospectiveprojects_1 = new ol.format.GeoJSON();
var features_Prospectiveprojects_1 = format_Prospectiveprojects_1.readFeatures(json_Prospectiveprojects_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prospectiveprojects_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prospectiveprojects_1.addFeatures(features_Prospectiveprojects_1);
var lyr_Prospectiveprojects_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prospectiveprojects_1, 
                style: style_Prospectiveprojects_1,
                popuplayertitle: "Prospective projects",
                interactive: true,
                title: '<img src="styles/legend/Prospectiveprojects_1.png" /> Prospective projects'
            });
var format_Cities_Currentprojects_2 = new ol.format.GeoJSON();
var features_Cities_Currentprojects_2 = format_Cities_Currentprojects_2.readFeatures(json_Cities_Currentprojects_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_Currentprojects_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_Currentprojects_2.addFeatures(features_Cities_Currentprojects_2);
var lyr_Cities_Currentprojects_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_Currentprojects_2, 
                style: style_Cities_Currentprojects_2,
                popuplayertitle: "Cities_Current projects",
                interactive: true,
                title: '<img src="styles/legend/Cities_Currentprojects_2.png" /> Cities_Current projects'
            });
var format_Currentproject_3 = new ol.format.GeoJSON();
var features_Currentproject_3 = format_Currentproject_3.readFeatures(json_Currentproject_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Currentproject_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Currentproject_3.addFeatures(features_Currentproject_3);
var lyr_Currentproject_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Currentproject_3, 
                style: style_Currentproject_3,
                popuplayertitle: "Current project",
                interactive: true,
                title: '<img src="styles/legend/Currentproject_3.png" /> Current project'
            });
var format_gadm41_COD_shpgadm41_COD_1shp_4 = new ol.format.GeoJSON();
var features_gadm41_COD_shpgadm41_COD_1shp_4 = format_gadm41_COD_shpgadm41_COD_1shp_4.readFeatures(json_gadm41_COD_shpgadm41_COD_1shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_COD_shpgadm41_COD_1shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_COD_shpgadm41_COD_1shp_4.addFeatures(features_gadm41_COD_shpgadm41_COD_1shp_4);
var lyr_gadm41_COD_shpgadm41_COD_1shp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_COD_shpgadm41_COD_1shp_4, 
                style: style_gadm41_COD_shpgadm41_COD_1shp_4,
                popuplayertitle: "gadm41_COD_shp — gadm41_COD_1.shp",
                interactive: true,
                title: '<img src="styles/legend/gadm41_COD_shpgadm41_COD_1shp_4.png" /> gadm41_COD_shp — gadm41_COD_1.shp'
            });
var format_Prospectivecitiesonly_5 = new ol.format.GeoJSON();
var features_Prospectivecitiesonly_5 = format_Prospectivecitiesonly_5.readFeatures(json_Prospectivecitiesonly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prospectivecitiesonly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prospectivecitiesonly_5.addFeatures(features_Prospectivecitiesonly_5);
var lyr_Prospectivecitiesonly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prospectivecitiesonly_5, 
                style: style_Prospectivecitiesonly_5,
                popuplayertitle: "Prospective cities only",
                interactive: true,
                title: '<img src="styles/legend/Prospectivecitiesonly_5.png" /> Prospective cities only'
            });
var format_Bunia_DNrev06_16022024MVTx_Bunia_6 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVTx_Bunia_6 = format_Bunia_DNrev06_16022024MVTx_Bunia_6.readFeatures(json_Bunia_DNrev06_16022024MVTx_Bunia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVTx_Bunia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVTx_Bunia_6.addFeatures(features_Bunia_DNrev06_16022024MVTx_Bunia_6);
var lyr_Bunia_DNrev06_16022024MVTx_Bunia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVTx_Bunia_6, 
                style: style_Bunia_DNrev06_16022024MVTx_Bunia_6,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Tx_Bunia",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Tx_Bunia'
            });
var format_Bunia_DNrev06_16022024MVPartieSud_7 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVPartieSud_7 = format_Bunia_DNrev06_16022024MVPartieSud_7.readFeatures(json_Bunia_DNrev06_16022024MVPartieSud_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVPartieSud_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVPartieSud_7.addFeatures(features_Bunia_DNrev06_16022024MVPartieSud_7);
var lyr_Bunia_DNrev06_16022024MVPartieSud_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVPartieSud_7, 
                style: style_Bunia_DNrev06_16022024MVPartieSud_7,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Partie Sud",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Partie Sud'
            });
var format_Bunia_DNrev06_16022024MVMV_line_06_2023_8 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVMV_line_06_2023_8 = format_Bunia_DNrev06_16022024MVMV_line_06_2023_8.readFeatures(json_Bunia_DNrev06_16022024MVMV_line_06_2023_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVMV_line_06_2023_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVMV_line_06_2023_8.addFeatures(features_Bunia_DNrev06_16022024MVMV_line_06_2023_8);
var lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVMV_line_06_2023_8, 
                style: style_Bunia_DNrev06_16022024MVMV_line_06_2023_8,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — MV_line_06_2023",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — MV_line_06_2023'
            });
var format_Bunia_DNrev06_16022024MVKindia_Generation_Site_9 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVKindia_Generation_Site_9 = format_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.readFeatures(json_Bunia_DNrev06_16022024MVKindia_Generation_Site_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVKindia_Generation_Site_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.addFeatures(features_Bunia_DNrev06_16022024MVKindia_Generation_Site_9);
var lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVKindia_Generation_Site_9, 
                style: style_Bunia_DNrev06_16022024MVKindia_Generation_Site_9,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Kindia_Generation_Site",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Kindia_Generation_Site'
            });
var format_Bunia_DNrev06_16022024MVInterconnectionPoint_10 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVInterconnectionPoint_10 = format_Bunia_DNrev06_16022024MVInterconnectionPoint_10.readFeatures(json_Bunia_DNrev06_16022024MVInterconnectionPoint_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVInterconnectionPoint_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVInterconnectionPoint_10.addFeatures(features_Bunia_DNrev06_16022024MVInterconnectionPoint_10);
var lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVInterconnectionPoint_10, 
                style: style_Bunia_DNrev06_16022024MVInterconnectionPoint_10,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Interconnection Point",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Interconnection Point'
            });
var format_Bunia_DNrev06_16022024MVCommunedeShari_11 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVCommunedeShari_11 = format_Bunia_DNrev06_16022024MVCommunedeShari_11.readFeatures(json_Bunia_DNrev06_16022024MVCommunedeShari_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVCommunedeShari_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVCommunedeShari_11.addFeatures(features_Bunia_DNrev06_16022024MVCommunedeShari_11);
var lyr_Bunia_DNrev06_16022024MVCommunedeShari_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVCommunedeShari_11, 
                style: style_Bunia_DNrev06_16022024MVCommunedeShari_11,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Commune de Shari",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Commune de Shari'
            });
var format_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12 = format_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.readFeatures(json_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.addFeatures(features_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12);
var lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12, 
                style: style_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Commune de Nyakasanza",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Commune de Nyakasanza'
            });
var format_Bunia_DNrev06_16022024MVCommunedeMbunya_13 = new ol.format.GeoJSON();
var features_Bunia_DNrev06_16022024MVCommunedeMbunya_13 = format_Bunia_DNrev06_16022024MVCommunedeMbunya_13.readFeatures(json_Bunia_DNrev06_16022024MVCommunedeMbunya_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunia_DNrev06_16022024MVCommunedeMbunya_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunia_DNrev06_16022024MVCommunedeMbunya_13.addFeatures(features_Bunia_DNrev06_16022024MVCommunedeMbunya_13);
var lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bunia_DNrev06_16022024MVCommunedeMbunya_13, 
                style: style_Bunia_DNrev06_16022024MVCommunedeMbunya_13,
                popuplayertitle: "Bunia_DN-rev06_16-02-2024-MV — Commune de Mbunya",
                interactive: true,
                title: 'Bunia_DN-rev06_16-02-2024-MV — Commune de Mbunya'
            });
var format_KAVUMUSheet1_14 = new ol.format.GeoJSON();
var features_KAVUMUSheet1_14 = format_KAVUMUSheet1_14.readFeatures(json_KAVUMUSheet1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAVUMUSheet1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAVUMUSheet1_14.addFeatures(features_KAVUMUSheet1_14);
var lyr_KAVUMUSheet1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAVUMUSheet1_14, 
                style: style_KAVUMUSheet1_14,
                popuplayertitle: "KAVUMU - Sheet1",
                interactive: true,
                title: '<img src="styles/legend/KAVUMUSheet1_14.png" /> KAVUMU - Sheet1'
            });
var format_ExistingsitesSheet11_15 = new ol.format.GeoJSON();
var features_ExistingsitesSheet11_15 = format_ExistingsitesSheet11_15.readFeatures(json_ExistingsitesSheet11_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingsitesSheet11_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingsitesSheet11_15.addFeatures(features_ExistingsitesSheet11_15);
var lyr_ExistingsitesSheet11_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingsitesSheet11_15, 
                style: style_ExistingsitesSheet11_15,
                popuplayertitle: "Existing  sites - Sheet1 (1)",
                interactive: true,
    title: 'Existing  sites - Sheet1 (1)<br />\
    <img src="styles/legend/ExistingsitesSheet11_15_0.png" /> Operational<br />\
    <img src="styles/legend/ExistingsitesSheet11_15_1.png" /> Under-Construction<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Prospectiveprojects_1.setVisible(true);lyr_Cities_Currentprojects_2.setVisible(true);lyr_Currentproject_3.setVisible(true);lyr_gadm41_COD_shpgadm41_COD_1shp_4.setVisible(true);lyr_Prospectivecitiesonly_5.setVisible(true);lyr_Bunia_DNrev06_16022024MVTx_Bunia_6.setVisible(true);lyr_Bunia_DNrev06_16022024MVPartieSud_7.setVisible(true);lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8.setVisible(true);lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.setVisible(true);lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10.setVisible(true);lyr_Bunia_DNrev06_16022024MVCommunedeShari_11.setVisible(true);lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.setVisible(true);lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13.setVisible(true);lyr_KAVUMUSheet1_14.setVisible(true);lyr_ExistingsitesSheet11_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Prospectiveprojects_1,lyr_Cities_Currentprojects_2,lyr_Currentproject_3,lyr_gadm41_COD_shpgadm41_COD_1shp_4,lyr_Prospectivecitiesonly_5,lyr_Bunia_DNrev06_16022024MVTx_Bunia_6,lyr_Bunia_DNrev06_16022024MVPartieSud_7,lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8,lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9,lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10,lyr_Bunia_DNrev06_16022024MVCommunedeShari_11,lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12,lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13,lyr_KAVUMUSheet1_14,lyr_ExistingsitesSheet11_15];
lyr_Prospectiveprojects_1.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Cities_Currentprojects_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Currentproject_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_gadm41_COD_shpgadm41_COD_1shp_4.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Prospectivecitiesonly_5.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Bunia_DNrev06_16022024MVTx_Bunia_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVPartieSud_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVCommunedeShari_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KAVUMUSheet1_14.set('fieldAliases', {'N°': 'N°', 'Province': 'Province', 'Lieu': 'Lieu', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ExistingsitesSheet11_15.set('fieldAliases', {'N°': 'N°', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Name': 'Name', 'Capacity': 'Capacity', 'Statut': 'Statut', });
lyr_Prospectiveprojects_1.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Cities_Currentprojects_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Currentproject_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_gadm41_COD_shpgadm41_COD_1shp_4.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Prospectivecitiesonly_5.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Bunia_DNrev06_16022024MVTx_Bunia_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVPartieSud_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVCommunedeShari_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_KAVUMUSheet1_14.set('fieldImages', {'N°': 'CheckBox', 'Province': 'TextEdit', 'Lieu': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ExistingsitesSheet11_15.set('fieldImages', {'N°': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Name': 'TextEdit', 'Capacity': 'TextEdit', 'Statut': 'TextEdit', });
lyr_Prospectiveprojects_1.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'inline label - visible with data', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Cities_Currentprojects_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'header label - visible with data', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Currentproject_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'header label - visible with data', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_gadm41_COD_shpgadm41_COD_1shp_4.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'inline label - visible with data', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Prospectivecitiesonly_5.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'inline label - visible with data', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Bunia_DNrev06_16022024MVTx_Bunia_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVPartieSud_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVMV_line_06_2023_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVKindia_Generation_Site_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVInterconnectionPoint_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVCommunedeShari_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVCommunedeNyakasanza_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bunia_DNrev06_16022024MVCommunedeMbunya_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KAVUMUSheet1_14.set('fieldLabels', {'N°': 'no label', 'Province': 'no label', 'Lieu': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ExistingsitesSheet11_15.set('fieldLabels', {'N°': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Name': 'inline label - visible with data', 'Capacity': 'header label - always visible', 'Statut': 'header label - always visible', });
lyr_ExistingsitesSheet11_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});