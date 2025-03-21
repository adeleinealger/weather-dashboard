import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';
// import { get } from 'node:http';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  const weatherData = await WeatherService.getWeatherForCity(req.body.cityName);
  res.json(weatherData);
  // TODO: save city to search history
  await HistoryService.addCity(req.body.cityName);
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  const historyList = await HistoryService.getCities();
  res.json(historyList);
});

// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
