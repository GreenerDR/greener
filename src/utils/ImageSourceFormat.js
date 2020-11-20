export default function ImageSouceFormat(formats) {
  let source = { uri: 'https://greenerappdr.herokuapp.com' };
  if ('medium' in formats) {
    source.uri = source.uri + formats.medium.url;
  } else if ('small' in formats) {
    source.uri = source.uri + formats.small.url;
  } else {
    source.uri = source.uri + formats.thumbnail.url;
  }
  return source;
}
