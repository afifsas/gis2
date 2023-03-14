var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SiteMaster2022_11_22SemerurevLongLat_1 = new ol.format.GeoJSON();
var features_SiteMaster2022_11_22SemerurevLongLat_1 = format_SiteMaster2022_11_22SemerurevLongLat_1.readFeatures(json_SiteMaster2022_11_22SemerurevLongLat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteMaster2022_11_22SemerurevLongLat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteMaster2022_11_22SemerurevLongLat_1.addFeatures(features_SiteMaster2022_11_22SemerurevLongLat_1);
var lyr_SiteMaster2022_11_22SemerurevLongLat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteMaster2022_11_22SemerurevLongLat_1, 
                style: style_SiteMaster2022_11_22SemerurevLongLat_1,
                interactive: true,
                title: '<img src="styles/legend/SiteMaster2022_11_22SemerurevLongLat_1.png" /> Site Master - 2022_11_22 - Semeru rev LongLat'
            });
var format_5618v2_2 = new ol.format.GeoJSON();
var features_5618v2_2 = format_5618v2_2.readFeatures(json_5618v2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5618v2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5618v2_2.addFeatures(features_5618v2_2);
var lyr_5618v2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5618v2_2, 
                style: style_5618v2_2,
                interactive: true,
                title: '5618 v2'
            });
var format_1682toAI_3 = new ol.format.GeoJSON();
var features_1682toAI_3 = format_1682toAI_3.readFeatures(json_1682toAI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1682toAI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1682toAI_3.addFeatures(features_1682toAI_3);
var lyr_1682toAI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1682toAI_3, 
                style: style_1682toAI_3,
                interactive: true,
                title: '1682 to AI'
            });
var format_5618toAI_4 = new ol.format.GeoJSON();
var features_5618toAI_4 = format_5618toAI_4.readFeatures(json_5618toAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5618toAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5618toAI_4.addFeatures(features_5618toAI_4);
var lyr_5618toAI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5618toAI_4, 
                style: style_5618toAI_4,
                interactive: true,
                title: '5618 to AI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SiteMaster2022_11_22SemerurevLongLat_1.setVisible(true);lyr_5618v2_2.setVisible(true);lyr_1682toAI_3.setVisible(true);lyr_5618toAI_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SiteMaster2022_11_22SemerurevLongLat_1,lyr_5618v2_2,lyr_1682toAI_3,lyr_5618toAI_4];
lyr_SiteMaster2022_11_22SemerurevLongLat_1.set('fieldAliases', {'System ID (DO NOT MODIFY)': 'System ID (DO NOT MODIFY)', 'ID Relokasi': 'ID Relokasi', 'Update Mark': 'Update Mark', 'Deleted': 'Deleted', 'Site ID': 'site id', 'Site ID Pasti': 'Site ID Pasti', 'Terminal ID': 'Terminal ID', 'Lokasi': 'Lokasi', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Provinsi': 'Provinsi', 'Kabupaten': 'kab', 'Kecamatan': 'kec', 'Desa': 'desa', 'Alamat': 'Alamat', 'Tanggal Relokasi': 'Tanggal Relokasi', 'Tanggal OnAir': 'Tanggal OnAir', 'Tanggal OnAir Awal': 'Tanggal OnAir Awal', 'Tanggal Sustain Topo': 'Tanggal Sustain Topo', 'Tanggal Sustain GS': 'Tanggal Sustain GS', 'Tanggal Integrasi': 'Tanggal Integrasi', 'MTTR GS (Hour)': 'MTTR GS (Hour)', 'Center Point GS': 'Center Point GS', 'MTTR Topo (Hour)': 'MTTR Topo (Hour)', 'Center Point Topo': 'Center Point Topo', 'Threshold LVD': 'Threshold LVD', 'Spotbeam': 'Spotbeam', 'LC': 'LC', 'Opsel': 'opsel', 'Penyedia GS (Read Only)': 'Penyedia GS (Read Only)', 'Penyedia TOPO (Read Only)': 'Penyedia TOPO (Read Only)', 'Keterangan 3T': 'Keterangan 3T', 'Project Phase': 'Project Phase', 'Teknologi': 'Teknologi', 'Battery Type': 'Battery Type', 'Battery Spec': 'Battery Spec', 'Tipe Tower': 'Tipe Tower', 'Tinggi Tower (M)': 'Tinggi Tower (M)', 'Vendor Opsel': 'Vendor Opsel', 'Tipe Transmisi': 'Tipe Transmisi', 'Kode WBS': 'Kode WBS', 'Tahun Pembangunan': 'Tahun Pembangunan', 'Order by Provider GS': 'Order by Provider GS', 'Order by Provider TOPO': 'Order by Provider TOPO', 'Daerah Khusus': 'Daerah Khusus', 'Site ID Reference': 'Site ID Reference', 'Remark TOPO': 'Remark TOPO', });
lyr_5618v2_2.set('fieldAliases', {'Site ID ACTUAL': 'site id', 'SITE ID ORIGINAL': 'SITE ID ORIGINAL', 'RELOK': 'RELOK', 'PROVINSI ORI': 'PROVINSI ORI', 'KABUPATEN ORI': 'KABUPATEN ORI', 'KECAMATAN ORI': 'KECAMATAN ORI', 'DESA ORI': 'DESA ORI', 'PROVINSI ACTUAL': 'PROVINSI ACTUAL', 'KABUPATEN ACTUAL': 'kab', 'KECAMATAN ACTUAL': 'kec', 'DESA ACTUAL': 'desa', 'LAT ACTUAL': 'LAT ACTUAL', 'LONG ACTUAL': 'LONG ACTUAL', 'Opsel': 'Opsel', 'KONSORSIUM': 'KONSORSIUM', 'PAKET': 'PAKET', 'Batch': 'Batch', 'Phase': 'Phase', 'Tower Height': 'Tower Height', 'Tower Type': 'Tower Type', 'Transmission - TRM Type': 'TRM', 'BAND': 'BAND', 'SATELIT': 'SATELIT', 'BW MW': 'BW MW', 'On Air (OSS)': 'On Air', 'SSV': 'SSV', 'Status SSV': 'Status SSV', 'Status CCTV': 'Status CCTV', 'Fungsi CCTV': 'Fungsi CCTV', 'BAUP Actual': 'BAUP', 'BAPHP Actual': 'BAPHP', 'Nodin BAPL': 'Nodin BAPL', 'BAPL Approved': 'BAPL Approved', 'RFC': 'RFC', 'CME Start': 'CME Start', 'MOS': 'MOS', 'RFI': 'RFI', 'BTS & TRM Install': 'BTS & TRM Install', 'On Air': 'On Air', 'Status': 'Status', 'Remark': 'Remark', });
lyr_1682toAI_3.set('fieldAliases', {'Site ID 1682': 'Site ID 1682', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': '1682', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipe Transmisi': 'Transmisi', 'ID AI': 'ID AI', 'Provinsi_1': 'Prov', 'Kabupaten/Kota': 'Kab', 'Kecamatan_1': 'Kecamatan_1', 'Desa_1': 'Desa_1', 'Nama Lokasi': 'Lokasi', 'Longitude_1': 'Long', 'Latitude_1': 'Lat', 'status': 'Status', 'Distance': 'Dist', 'Dist < 1.5 km': 'range', 'Dist < 3 km': 'Dist < 3 km', });
lyr_5618toAI_4.set('fieldAliases', {'Site ID 5618': 'Site id 5618', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipe Transmisi': 'transmisi', 'ID AI': 'id AI', 'Provinsi_1': 'Provinsi_1', 'Kabupaten/Kota': 'Kabupaten/Kota', 'Kecamatan_1': 'Kecamatan_1', 'Desa_1': 'Desa_1', 'Nama Lokasi': 'Nama Lokasi', 'Longitude_1': 'Longitude_1', 'Latitude_1': 'Latitude_1', 'status': 'status', 'Distance': 'dist', 'Dist < 1.5 km': 'range', 'Dist < 3 km': 'Dist < 3 km', });
lyr_SiteMaster2022_11_22SemerurevLongLat_1.set('fieldImages', {'System ID (DO NOT MODIFY)': 'Hidden', 'ID Relokasi': 'Hidden', 'Update Mark': 'Hidden', 'Deleted': 'Hidden', 'Site ID': 'TextEdit', 'Site ID Pasti': 'Hidden', 'Terminal ID': 'Hidden', 'Lokasi': 'Hidden', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Provinsi': 'Hidden', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Alamat': 'Hidden', 'Tanggal Relokasi': 'Hidden', 'Tanggal OnAir': 'Hidden', 'Tanggal OnAir Awal': 'Hidden', 'Tanggal Sustain Topo': 'Hidden', 'Tanggal Sustain GS': 'Hidden', 'Tanggal Integrasi': 'Hidden', 'MTTR GS (Hour)': 'Hidden', 'Center Point GS': 'Hidden', 'MTTR Topo (Hour)': 'Hidden', 'Center Point Topo': 'Hidden', 'Threshold LVD': 'Hidden', 'Spotbeam': 'Hidden', 'LC': 'Hidden', 'Opsel': 'TextEdit', 'Penyedia GS (Read Only)': 'Hidden', 'Penyedia TOPO (Read Only)': 'Hidden', 'Keterangan 3T': 'Hidden', 'Project Phase': 'Hidden', 'Teknologi': 'Hidden', 'Battery Type': 'Hidden', 'Battery Spec': 'Hidden', 'Tipe Tower': 'Hidden', 'Tinggi Tower (M)': 'Hidden', 'Vendor Opsel': 'Hidden', 'Tipe Transmisi': 'Hidden', 'Kode WBS': 'Hidden', 'Tahun Pembangunan': 'Hidden', 'Order by Provider GS': 'Hidden', 'Order by Provider TOPO': 'Hidden', 'Daerah Khusus': 'Hidden', 'Site ID Reference': 'Hidden', 'Remark TOPO': 'Hidden', });
lyr_5618v2_2.set('fieldImages', {'Site ID ACTUAL': 'TextEdit', 'SITE ID ORIGINAL': 'Hidden', 'RELOK': 'Hidden', 'PROVINSI ORI': 'Hidden', 'KABUPATEN ORI': 'Hidden', 'KECAMATAN ORI': 'Hidden', 'DESA ORI': 'Hidden', 'PROVINSI ACTUAL': 'Hidden', 'KABUPATEN ACTUAL': 'TextEdit', 'KECAMATAN ACTUAL': 'TextEdit', 'DESA ACTUAL': 'TextEdit', 'LAT ACTUAL': 'Hidden', 'LONG ACTUAL': 'Hidden', 'Opsel': 'Hidden', 'KONSORSIUM': 'Hidden', 'PAKET': 'Hidden', 'Batch': 'Hidden', 'Phase': 'Hidden', 'Tower Height': 'Hidden', 'Tower Type': 'Hidden', 'Transmission - TRM Type': 'TextEdit', 'BAND': 'Hidden', 'SATELIT': 'Hidden', 'BW MW': 'Hidden', 'On Air (OSS)': 'TextEdit', 'SSV': 'Hidden', 'Status SSV': 'Hidden', 'Status CCTV': 'Hidden', 'Fungsi CCTV': 'Hidden', 'BAUP Actual': 'TextEdit', 'BAPHP Actual': 'TextEdit', 'Nodin BAPL': 'Hidden', 'BAPL Approved': 'Hidden', 'RFC': 'Hidden', 'CME Start': 'Hidden', 'MOS': 'Hidden', 'RFI': 'Hidden', 'BTS & TRM Install': 'Hidden', 'On Air': 'Hidden', 'Status': 'Hidden', 'Remark': 'Hidden', });
lyr_1682toAI_3.set('fieldImages', {'Site ID 1682': 'Hidden', 'Provinsi': 'Hidden', 'Kabupaten': 'Hidden', 'Kecamatan': 'Hidden', 'Desa': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Tipe Transmisi': 'TextEdit', 'ID AI': 'TextEdit', 'Provinsi_1': 'Hidden', 'Kabupaten/Kota': 'Hidden', 'Kecamatan_1': 'Hidden', 'Desa_1': 'Hidden', 'Nama Lokasi': 'TextEdit', 'Longitude_1': 'TextEdit', 'Latitude_1': 'TextEdit', 'status': 'TextEdit', 'Distance': 'TextEdit', 'Dist < 1.5 km': 'TextEdit', 'Dist < 3 km': 'Hidden', });
lyr_5618toAI_4.set('fieldImages', {'Site ID 5618': 'TextEdit', 'Provinsi': 'Hidden', 'Kabupaten': 'Hidden', 'Kecamatan': 'Hidden', 'Desa': 'Hidden', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Tipe Transmisi': 'TextEdit', 'ID AI': 'TextEdit', 'Provinsi_1': 'Hidden', 'Kabupaten/Kota': 'Hidden', 'Kecamatan_1': 'Hidden', 'Desa_1': 'Hidden', 'Nama Lokasi': 'Hidden', 'Longitude_1': 'Hidden', 'Latitude_1': 'Hidden', 'status': 'TextEdit', 'Distance': 'TextEdit', 'Dist < 1.5 km': 'TextEdit', 'Dist < 3 km': 'Hidden', });
lyr_SiteMaster2022_11_22SemerurevLongLat_1.set('fieldLabels', {'Site ID': 'inline label', 'Kabupaten': 'inline label', 'Kecamatan': 'inline label', 'Desa': 'inline label', 'Opsel': 'inline label', });
lyr_5618v2_2.set('fieldLabels', {'Site ID ACTUAL': 'inline label', 'KABUPATEN ACTUAL': 'inline label', 'KECAMATAN ACTUAL': 'inline label', 'DESA ACTUAL': 'inline label', 'Transmission - TRM Type': 'inline label', 'On Air (OSS)': 'inline label', 'BAUP Actual': 'inline label', 'BAPHP Actual': 'inline label', });
lyr_1682toAI_3.set('fieldLabels', {'Desa': 'inline label', 'Tipe Transmisi': 'inline label', 'ID AI': 'inline label', 'Nama Lokasi': 'inline label', 'Longitude_1': 'inline label', 'Latitude_1': 'inline label', 'status': 'inline label', 'Distance': 'inline label', 'Dist < 1.5 km': 'inline label', });
lyr_5618toAI_4.set('fieldLabels', {'Site ID 5618': 'inline label', 'Tipe Transmisi': 'inline label', 'ID AI': 'inline label', 'status': 'inline label', 'Distance': 'inline label', 'Dist < 1.5 km': 'inline label', });
lyr_5618toAI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});