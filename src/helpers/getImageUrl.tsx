const getImgUrl = data => {
  const baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

  if (data && data.filename) {
    return baseUrl + data.category + data.hash + '_' + data.filename;
  }
  return null;
};

export default getImgUrl;