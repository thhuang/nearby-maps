// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{
    name: 'TH Huang',
    github: 'https://github.com/thhuang',
    website: 'https://thhuang.dev/',
  }])
}
