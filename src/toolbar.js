//Configuración de toolbar de Quill
//Sí no se configura, dará error si ingresamos despues de ver la nota

const toolbar = [
  ['bold', 'italic', 'underline', 'strike'],
  [{ align: [] }],

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],

  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image', 'video'],
  [{ color: [] }, { background: [] }],

  ['clean']
]

export default toolbar
