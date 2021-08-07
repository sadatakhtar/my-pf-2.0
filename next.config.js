module.exports = {
  reactStrictMode: true,
  // images: {
  //   loader: (width, src,quality) => `/preprocessed-images/${filename}-${width}.jpg`
  // },
  images: {
    loader: 'imgix',
    path: '',
  },
}
