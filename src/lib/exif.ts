
import { parse as parseImage } from 'exifr';

export async function extractExif(blob: Blob) {
    const exifData = await parseImage(blob, {
        xmp: true,
        pick: [
            'ModifyDate',
            'Make',
            'Model',
            'AbsoluteAltitude',
            'RelativeAltitude',
            'GimbalRollDegree',
            'GimbalYawDegree',
            'GimbalPitchDegree',
            'FlightRollDegree',
            'FlightYawDegree',
            'FlightPitchDegree',
            'Orientation',
            'SerialNumber',
            'GPSAltitude',
            'GPSLatitudeRef',
            'GPSLongitudeRef',
            'GPSLongitude',
            'GPSLatitude',
            'latitude',
            'longitude',
            'CreateDate',
            'BrightnessValue',
            'FNumber',
            'ExposureTime',
            'ImageDescription',
        ],
    });

    const blobExif = new Blob([JSON.stringify(exifData)], { type: 'application/json' });
    return URL.createObjectURL(blobExif);
}

