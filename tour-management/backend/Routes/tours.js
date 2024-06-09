import express from 'express';
const router = express.Router();
import { createTour, updateTour, deleteTour, getTour, getAllTour, getToursBySearch, getFeaturedTour,
getTourCount} from '../Controller/tourController.js';


//create new tour 
router.post('/', createTour);

//update tour
router.put('/:id', updateTour);

//delete tour
router.delete('/:id', deleteTour);

//get single tour
router.get('/:id', getTour);

//get all tour
router.get('/', getAllTour);

//search tour
router.get('/search/getTourBySearch',getToursBySearch);
// /search is not coming to this rooute but it is coming to getToursBySearch


// search by featured 
router.get('/search/getFeaturedTours', getFeaturedTour);

// tour count
router.get('/search/getTourCount',getTourCount );









export default router;