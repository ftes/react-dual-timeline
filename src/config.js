const config = {
  // global
  totalWidth: window.innerWidth,
  paddingTop: 50,
  mediaWidthMed: 900,
  mediaWidthSmall: 700,
  activeColor: '#F45B69',
  color: 'black',
  twoSidedOverlap: 80, // negative overlap between items if two-sided
  animations: true,
  addEvenPropToChildren: false,

  // line
  lineColor: '#FFF',
  lineWidth: 5,
  paddingToItem: 30,
  paddingToItemSmall: 20,

  // circle
  circleColor: '#ff0',
  circleWidth: 30,
  
  // triangle
  triangleColor: '#fff',
  triangleWidth: 16,
  triangleHeight: 8,
  trianglePosition: 'top', // top or bottom
  triangleOffset: 15,

  // list item content
  itemWidth: 350,
  itemWidthMed: 250,
  offsetHidden: 200,
  smallItemWidthPadding: 50,
  itemPadding: 16,
  evenItemOffset: 0, // important when using bootstrap.css
}

export default config
