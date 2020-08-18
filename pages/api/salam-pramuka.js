import cors from '../../middleware/cors';
import data from '../../data/salam-pramuka';

export default (req, res) => {
	await cors(req, res)

	res.setHeader('Cache-Control', 'max-age=86400');
	res.statusCode = 200;
  res.json(data)
}