const config = {
  // global
  totalWidth: window.innerWidth,
  mediaWidthMed: 900,
  mediaWidthSmall: 700,
  activeColor: '#F45B69',
  color: 'black',
  animations: true,
  animationScrollDelay: 100,
  addEvenPropToChildren: false,
  
  // line
  lineColor: '#F45B69',
  lineWidth: 5,
  paddingToItem: 30,
  paddingToItemSmall: 20,
  endNodeType: 'circle', // none, square or circle
  endNodeSize: 40,

  // circle
  circleColor: '#F45B69',
  circleWidth: 30,
  
  // triangle
  triangleColor: '#F45B69',
  triangleWidth: 16,
  triangleHeight: 8,
  trianglePosition: 'top', // top or bottom
  triangleOffset: 15,

  // list item content
  paddingTop: 20,
  itemWidth: 350,
  itemWidthMed: 250,
  offsetHidden: 200,
  twoSidedOverlap: 80, // negative overlap between items if two-sided
  smallItemWidthPadding: 50,
  itemPadding: 16,
  evenItemOffset: 0, // important when using bootstrap.css
}

export default config
