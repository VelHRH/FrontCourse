import EventModel from "../models/Event.js"
import CategoryModel from "../models/Category.js"

export const getRating = async (req, res) => {
  try {
    const id = req.params.id
    EventModel.find(
      {subcategory: id},
      (err, events) => {
        if (err){
          console.log(err);
          return res.status(500).json({message: "Unable to get events"});
        }
        if (events.length === 0){
          return res.status(404).json({message: "No event's yet for such subcategory"});
        }
        res.json(events);
      }
    ).sort({wins: -1})
  }
  catch (err) {
    console.log(err);
    res.status(500).json({message: "Unable to get category"});
  }
}