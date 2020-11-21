export default function RemoveAccents(text) {
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return text;
}
