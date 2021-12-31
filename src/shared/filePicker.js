/**
 * filePicker.js
 * Created - 2021/12/27
 * @author Amit Sajane
 *
 * Image/Document picker methods
 */
import ImagePicker from 'react-native-image-crop-picker';

/**
 * pickFromCamera
 * @description Pick image from camera
 * @author Amit Sajane
 *
 */
export const pickFromCamera = async () => {
  try {
    const image = await ImagePicker.openCamera({
      width: 500,
      height: 500,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    });
    console.log('..image', image);
    const mime = image.mime;

    return {base64Image: `data:${mime};base64,${image.data}`};
  } catch (error) {
    if (error?.code === 'E_PICKER_CANCELLED') {
      return;
    }
    console.error(JSON.stringify(error));
    alert(error?.message);
  }
};

/**
 * pickFromGallery
 * @description Pick image from gallery
 * @author Amit Sajne
 *
 */
export const pickFromGalary = async () => {
  try {
    const image = await ImagePicker.openPicker({
      width: 500,
      height: 500,
      mediaType: 'photo',
      includeBase64: true,
      cropping: true,
    });
    console.log('..image', image);
    let mime = image.mime;

    return {base64Image: `data:${mime};base64,${image.data}`};
  } catch (error) {
    if (error?.code === 'E_PICKER_CANCELLED') {
      return;
    }
    console.error(JSON.stringify(error));
    alert(error?.message);
  }
};
