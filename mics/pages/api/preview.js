export default function handler(req, res) {
  res.setPreviewData({user: "Godswill"})
  res.redirect('/news')
}